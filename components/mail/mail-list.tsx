"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Mail } from "lucide-react"

const mockEmails = [
  {
    id: 1,
    from: "Jean Dupont",
    subject: "Rapport mensuel - Mars 2024",
    preview: "Veuillez trouver ci-joint le rapport mensuel...",
    date: "10:30",
    unread: true,
  },
  {
    id: 2,
    from: "Marie Martin",
    subject: "Réunion d'équipe",
    preview: "La réunion d'équipe aura lieu demain à...",
    date: "Hier",
    unread: false,
  },
  {
    id: 3,
    from: "Pierre Bernard",
    subject: "Documentation technique",
    preview: "Suite à notre discussion, voici la documentation...",
    date: "Lun.",
    unread: false,
  },
]

export function MailList() {
  return (
    <ScrollArea className="flex-1">
      <div className="divide-y">
        {mockEmails.map((email) => (
          <div
            key={email.id}
            className={`flex items-center gap-4 p-4 hover:bg-muted/50 cursor-pointer ${
              email.unread ? "bg-muted/20 font-medium" : ""
            }`}
          >
            <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="truncate">{email.from}</span>
                <span className="text-muted-foreground text-sm flex-shrink-0">
                  {email.date}
                </span>
              </div>
              <div className="text-sm truncate">{email.subject}</div>
              <div className="text-sm text-muted-foreground truncate">
                {email.preview}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}