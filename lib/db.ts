import Database from 'better-sqlite3';
import { hash } from 'bcryptjs';
import path from 'path';
import { Crypto } from './crypto';

const dbPath = path.join(process.cwd(), 'data.db');
const db = new Database(dbPath);

// Initialize database with tables including encryption fields
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE,
    password TEXT,
    name TEXT,
    role TEXT DEFAULT 'USER',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS documents (
    id TEXT PRIMARY KEY,
    filename TEXT,
    hash TEXT UNIQUE,
    content_type TEXT,
    size INTEGER,
    uploaded_by TEXT,
    blockchain_tx TEXT,
    content BLOB,
    content_iv TEXT,
    content_tag TEXT,
    content_salt TEXT,
    metadata TEXT,
    metadata_iv TEXT,
    metadata_tag TEXT,
    metadata_salt TEXT,
    version INTEGER DEFAULT 1,
    status TEXT DEFAULT 'ACTIVE',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS audit_logs (
    id TEXT PRIMARY KEY,
    user_id TEXT,
    action TEXT,
    resource_type TEXT,
    resource_id TEXT,
    details TEXT,
    ip_address TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Secure document operations
export const secureDb = {
  saveDocument: (doc: any) => {
    const encryptedContent = Crypto.encrypt(doc.content);
    const encryptedMetadata = Crypto.encrypt(JSON.stringify(doc.metadata));

    return db.prepare(`
      INSERT INTO documents (
        id, filename, hash, content_type, size, uploaded_by,
        content, content_iv, content_tag, content_salt,
        metadata, metadata_iv, metadata_tag, metadata_salt
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      doc.id,
      doc.filename,
      doc.hash,
      doc.contentType,
      doc.size,
      doc.uploadedBy,
      encryptedContent.encryptedData,
      encryptedContent.iv,
      encryptedContent.tag,
      encryptedContent.salt,
      encryptedMetadata.encryptedData,
      encryptedMetadata.iv,
      encryptedMetadata.tag,
      encryptedMetadata.salt
    );
  },

  getDocument: (id: string) => {
    const doc = db.prepare('SELECT * FROM documents WHERE id = ?').get(id);
    if (!doc) return null;

    const content = Crypto.decrypt(
      doc.content,
      doc.content_iv,
      doc.content_tag,
      doc.content_salt
    );

    const metadata = JSON.parse(Crypto.decrypt(
      doc.metadata,
      doc.metadata_iv,
      doc.metadata_tag,
      doc.metadata_salt
    ));

    return {
      ...doc,
      content,
      metadata
    };
  },

  logAudit: (entry: {
    userId: string;
    action: string;
    resourceType: string;
    resourceId: string;
    details: string;
    ipAddress: string;
  }) => {
    return db.prepare(`
      INSERT INTO audit_logs (
        id, user_id, action, resource_type, resource_id, details, ip_address
      ) VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(
      `audit-${Date.now()}`,
      entry.userId,
      entry.action,
      entry.resourceType,
      entry.resourceId,
      entry.details,
      entry.ipAddress
    );
  }
};

// Initialize admin user if not exists
const initAdmin = async () => {
  const adminEmail = 'anys.tekaya@ariskan.fr';
  const admin = db.prepare('SELECT * FROM users WHERE email = ?').get(adminEmail);
  
  if (!admin) {
    const hashedPassword = await hash('admin123', 12);
    db.prepare(`
      INSERT INTO users (id, email, password, name, role)
      VALUES (?, ?, ?, ?, ?)
    `).run(
      'admin-' + Date.now(),
      adminEmail,
      hashedPassword,
      'Anys Tekaya',
      'ADMIN'
    );
  }
};

initAdmin().catch(console.error);

export { db };