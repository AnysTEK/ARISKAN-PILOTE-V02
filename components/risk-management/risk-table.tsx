"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const risks = [
  {
    id: 1,
    name: "Perte de données critiques",
    category: "Cybersécurité",
    level: "Critique",
    probability: "Moyenne",
    impact: "Élevé",
    status: "En cours",
  },
  {
    id: 2,
    name: "Non-conformité RGPD",
    category: "Légal",
    level: "Élevé",
    probability: "Faible",
    impact: "Élevé",
    status: "Mitigé",
  },
  {
    id: 3,
    name: "Interruption de service",
    category: "Opérationnel",
    level: "Modéré",
    probability: "Moyenne",
    impact: "Moyen",
    status: "En cours",
  },
]

export function RiskTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Risque</TableHead>
          <TableHead>Catégorie</TableHead>
          <TableHead>Niveau</TableHead>
          <TableHead>Probabilité</TableHead>
          <TableHead>Impact</TableHead>
          <TableHead>Statut</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {risks.map((risk) => (
          <TableRow key={risk.id}>
            <TableCell className="font-medium">{risk.name}</TableCell>
            <TableCell>{risk.category}</TableCell>
            <TableCell>
              <Badge variant={risk.level === "Critique" ? "destructive" : "secondary"}>
                {risk.level}
              </Badge>
            </TableCell>
            <TableCell>{risk.probability}</TableCell>
            <TableCell>{risk.impact}</TableCell>
            <TableCell>
              <Badge variant={risk.status === "Mitigé" ? "success" : "warning"}>
                {risk.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}