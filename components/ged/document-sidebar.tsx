"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FolderPlus, Upload, Folder } from "lucide-react"

const folders = [
  { id: 1, name: "Documents généraux" },
  { id: 2, name: "Ressources humaines" },
  { id: 3, name: "Finances" },
  { id: 4, name: "Projets" },
  { id: 5, name: "Qualité" },
]

export function DocumentSidebar() {
  return (
    <div className="w-64 border-r bg-muted/10">
      <div className="p-4 space-y-2">
        <Button className="w-full justify-start" variant="secondary">
          <FolderPlus className="mr-2 h-4 w-4" />
          Nouveau dossier
        </Button>
        <Button className="w-full justify-start" variant="secondary">
          <Upload className="mr-2 h-4 w-4" />
          Importer
        </Button>
      </div>
      <ScrollArea className="h-[calc(100vh-8rem)]">
        <div className="p-2">
          {folders.map((folder) => (
            <Button
              key={folder.id}
              variant="ghost"
              className="w-full justify-start mb-1"
            >
              <Folder className="mr-2 h-4 w-4" />
              {folder.name}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}