"use client"

import { useSession } from "next-auth/react"
import { DashboardShell } from "@/components/dashboard/shell"
import { MainNav } from "@/components/dashboard/main-nav"
import { UserNav } from "@/components/dashboard/user-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SettingsPage() {
  const { data: session } = useSession()

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
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Paramètres</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Profil Utilisateur</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom</Label>
                <Input id="name" defaultValue={session?.user?.name || ""} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue={session?.user?.email || ""} />
              </div>
              <Button>Sauvegarder les modifications</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  )
}