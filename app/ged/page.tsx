"use client"

import { DashboardShell } from "@/components/dashboard/shell"
import { MainNav } from "@/components/dashboard/main-nav"
import { UserNav } from "@/components/dashboard/user-nav"
import { DocumentList } from "@/components/ged/document-list"
import { DocumentSidebar } from "@/components/ged/document-sidebar"
import { DocumentToolbar } from "@/components/ged/document-toolbar"

export default function GEDPage() {
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
      <div className="flex h-[calc(100vh-4rem)]">
        <DocumentSidebar />
        <div className="flex-1 flex flex-col">
          <DocumentToolbar />
          <DocumentList />
        </div>
      </div>
    </DashboardShell>
  )
}