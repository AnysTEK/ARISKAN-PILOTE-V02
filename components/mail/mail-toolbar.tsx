"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, RefreshCcw, Archive, Trash } from "lucide-react"

export function MailToolbar() {
  return (
    <div className="border-b p-4 flex items-center gap-4">
      <div className="flex-1 flex items-center space-x-2">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher..."
            className="pl-8"
          />
        </div>
        <Button variant="ghost" size="icon">
          <RefreshCcw className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Archive className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Trash className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}