"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, SortAsc } from "lucide-react"

export function DocumentToolbar() {
  return (
    <div className="border-b p-4">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher des documents..."
            className="pl-8"
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <SortAsc className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}