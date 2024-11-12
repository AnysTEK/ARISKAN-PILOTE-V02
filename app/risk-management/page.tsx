"use client"

import { DashboardShell } from "@/components/dashboard/shell"
import { MainNav } from "@/components/dashboard/main-nav"
import { UserNav } from "@/components/dashboard/user-nav"

export default function RiskManagementPage() {
  return (
    <DashboardShell>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Gestion des Risques</h1>
        <p className="text-muted-foreground mt-2">Module en cours de développement.</p>
      </div>
    </DashboardShell>
  )
}