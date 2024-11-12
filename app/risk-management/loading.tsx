import { DashboardShell } from "@/components/dashboard/shell"
import { MainNav } from "@/components/dashboard/main-nav"
import { UserNav } from "@/components/dashboard/user-nav"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function RiskManagementLoading() {
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
      
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-[200px]" />
          <Skeleton className="h-10 w-[150px]" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-5 w-40" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-[100px]" />
                <Skeleton className="h-4 w-[150px] mt-2" />
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <Skeleton className="h-5 w-[150px]" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}