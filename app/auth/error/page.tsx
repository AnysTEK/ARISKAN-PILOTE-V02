import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AuthError() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Shield className="mx-auto h-12 w-12 text-destructive" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Erreur d'authentification
          </h1>
          <p className="text-sm text-muted-foreground">
            Une erreur s'est produite lors de l'authentification.
          </p>
        </div>
        <Button asChild>
          <Link href="/auth/signin">
            Retour à la connexion
          </Link>
        </Button>
      </div>
    </div>
  )
}