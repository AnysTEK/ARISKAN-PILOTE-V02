"use client"

import { DashboardShell } from "@/components/dashboard/shell"
import { MainNav } from "@/components/dashboard/main-nav"
import { UserNav } from "@/components/dashboard/user-nav"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GEDForm } from "@/components/forms/ged-form"
import { RolesForm } from "@/components/forms/roles-form"
import { ProcessForm } from "@/components/forms/process-form"
import { PolicyForm } from "@/components/forms/policy-form"
import { RiskForm } from "@/components/forms/risk-form"
import { EnvironmentalForm } from "@/components/forms/environmental-form"
import { DUERPForm } from "@/components/forms/duerp-form"
import { AssetForm } from "@/components/forms/asset-form"
import { ChemicalForm } from "@/components/forms/chemical-form"

export default function FormsPage() {
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
      <div className="flex-1 space-y-4 p-8">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Saisie des données</h2>
        </div>
        <Tabs defaultValue="ged" className="space-y-4">
          <TabsList className="flex flex-wrap">
            <TabsTrigger value="ged">GED</TabsTrigger>
            <TabsTrigger value="roles">Rôles</TabsTrigger>
            <TabsTrigger value="process">Processus</TabsTrigger>
            <TabsTrigger value="policy">Politique</TabsTrigger>
            <TabsTrigger value="risk">Risques</TabsTrigger>
            <TabsTrigger value="environmental">Environnement</TabsTrigger>
            <TabsTrigger value="duerp">DUERP</TabsTrigger>
            <TabsTrigger value="assets">Assets</TabsTrigger>
            <TabsTrigger value="chemical">Risques Chimiques</TabsTrigger>
          </TabsList>
          <TabsContent value="ged">
            <GEDForm />
          </TabsContent>
          <TabsContent value="roles">
            <RolesForm />
          </TabsContent>
          <TabsContent value="process">
            <ProcessForm />
          </TabsContent>
          <TabsContent value="policy">
            <PolicyForm />
          </TabsContent>
          <TabsContent value="risk">
            <RiskForm />
          </TabsContent>
          <TabsContent value="environmental">
            <EnvironmentalForm />
          </TabsContent>
          <TabsContent value="duerp">
            <DUERPForm />
          </TabsContent>
          <TabsContent value="assets">
            <AssetForm />
          </TabsContent>
          <TabsContent value="chemical">
            <ChemicalForm />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
}