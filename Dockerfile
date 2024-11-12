FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects anonymous telemetry data about general usage
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

RUN npm run build

# Production image, copy all the files and serve with nginx
FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html

# Install curl for healthcheck
RUN apk add --no-cache curl

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder
COPY --from=builder /app/out .

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create nginx cache directory with proper permissions
RUN mkdir -p /var/cache/nginx && \
    chown -R nginx:nginx /var/cache/nginx && \
    chmod -R 755 /var/cache/nginx

# Use non-root user
USER nginx

EXPOSE 80

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s \
    CMD curl -f http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]