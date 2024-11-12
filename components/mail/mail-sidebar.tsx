"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Inbox, Send, Archive, Trash, Edit } from "lucide-react"

export function MailSidebar() {
  return (
    <div className="w-[240px] border-r bg-muted/10">
      <div className="p-4 space-y-4">
        <Button className="w-full justify-start" variant="secondary">
          <Edit className="mr-2 h-4 w-4" />
          Nouveau message
        </Button>
        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start">
            <Inbox className="mr-2 h-4 w-4" />
            Boîte de réception
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Send className="mr-2 h-4 w-4" />
            Envoyés
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Archive className="mr-2 h-4 w-4" />
            Archive
          </Button>
          <Button variant="ghost" className="w-full justify-start text-destructive">
            <Trash className="mr-2 h-4 w-4" />
            Corbeille
          </Button>
        </div>
      </div>
    </div>
  )
}