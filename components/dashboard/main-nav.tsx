import Link from "next/link"
import { cn } from "@/lib/utils"
import { LayoutDashboard, FileText, Mail, Shield, Settings } from "lucide-react"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="flex items-center text-sm font-medium transition-colors hover:text-primary"
      >
        <LayoutDashboard className="mr-2 h-4 w-4" />
        Tableau de bord
      </Link>
      <Link
        href="/ged"
        className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <FileText className="mr-2 h-4 w-4" />
        GED
      </Link>
      <Link
        href="/mail"
        className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <Mail className="mr-2 h-4 w-4" />
        Messagerie
      </Link>
      <Link
        href="/risk-management"
        className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <Shield className="mr-2 h-4 w-4" />
        Gestion des risques
      </Link>
      <Link
        href="/settings"
        className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <Settings className="mr-2 h-4 w-4" />
        Paramètres
      </Link>
    </nav>
  )
}