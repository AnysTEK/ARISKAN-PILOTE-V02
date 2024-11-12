"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { Shield } from "lucide-react"

export default function SignIn() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    })

    setIsLoading(false)

    if (!response?.error) {
      const from = searchParams?.get("from") || "/"
      router.push(from)
      router.refresh()
    } else {
      toast({
        title: "Erreur",
        description: "Identifiants invalides",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container relative flex h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Shield className="mx-auto h-12 w-12" />
          <h1 className="text-2xl font-semibold tracking-tight">
            ARISKAN PILOTE
          </h1>
          <p className="text-sm text-muted-foreground">
            Entrez vos identifiants pour accéder à votre compte
          </p>
        </div>
        <div className="grid gap-6">
          <form onSubmit={onSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="nom@entreprise.fr"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  disabled={isLoading}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  disabled={isLoading}
                  required
                />
              </div>
              <Button disabled={isLoading}>
                {isLoading && (
                  <Shield className="mr-2 h-4 w-4 animate-spin" />
                )}
                Se connecter
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}