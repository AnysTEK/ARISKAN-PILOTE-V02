"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RiskTable } from "@/components/risk-management/risk-table"
import { RiskMatrix } from "@/components/risk-management/risk-matrix"
import { AlertTriangle, BarChart, FileText, Plus } from "lucide-react"

export function RiskDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Gestion des Risques</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nouveau Risque
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="matrix">Matrice des Risques</TabsTrigger>
          <TabsTrigger value="reports">Rapports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Risques Critiques</CardTitle>
                <AlertTriangle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 depuis le dernier mois</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Risques Modérés</CardTitle>
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28</div>
                <p className="text-xs text-muted-foreground">-3 depuis le dernier mois</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Actions en Cours</CardTitle>
                <BarChart className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15</div>
                <p className="text-xs text-muted-foreground">8 actions terminées ce mois</p>
              </CardContent>
            </Card>
          </div>

          <RiskTable />
        </TabsContent>

        <TabsContent value="matrix">
          <Card>
            <CardHeader>
              <CardTitle>Matrice des Risques</CardTitle>
            </CardHeader>
            <CardContent>
              <RiskMatrix />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Rapports d'Analyse</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Rapport Mensuel - Février 2024
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Rapport Trimestriel - Q4 2023
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Bilan Annuel 2023
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  )
}