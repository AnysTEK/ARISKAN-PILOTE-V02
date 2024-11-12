"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { FileText, FileImage, FilePdf } from "lucide-react"

interface Document {
  id: number
  name: string
  type: string
  size: string
  modified: string
  owner: string
}

const mockDocuments: Document[] = [
  {
    id: 1,
    name: "Rapport Q1 2024.pdf",
    type: "pdf",
    size: "2.4 MB",
    modified: "Il y a 2 heures",
    owner: "Jean Dupont",
  },
  {
    id: 2,
    name: "Présentation projet.pptx",
    type: "pptx",
    size: "5.1 MB",
    modified: "Hier",
    owner: "Marie Martin",
  },
  {
    id: 3,
    name: "Budget 2024.xlsx",
    type: "xlsx",
    size: "1.8 MB",
    modified: "28 fév. 2024",
    owner: "Pierre Bernard",
  },
  {
    id: 4,
    name: "Logo entreprise.png",
    type: "image",
    size: "842 KB",
    modified: "15 fév. 2024",
    owner: "Sophie Dubois",
  }
]

function getFileIcon(type: string) {
  switch (type) {
    case 'image':
      return <FileImage className="h-5 w-5 text-blue-500" />
    case 'pdf':
      return <FilePdf className="h-5 w-5 text-red-500" />
    default:
      return <FileText className="h-5 w-5 text-gray-500" />
  }
}

export function DocumentList() {
  return (
    <ScrollArea className="flex-1">
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockDocuments.map((doc) => (
            <div
              key={doc.id}
              className="group p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
            >
              <div className="flex items-start gap-3">
                {getFileIcon(doc.type)}
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">{doc.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {doc.size} • Modifié {doc.modified}
                  </div>
                  <div className="text-sm text-muted-foreground truncate">
                    {doc.owner}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  )
}