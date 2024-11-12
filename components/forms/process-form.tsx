"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const formSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  description: z.string().min(1, "La description est requise"),
  type: z.string().min(1, "Le type est requis"),
  owner: z.string().min(1, "Le propriétaire est requis"),
  inputs: z.string().min(1, "Les entrées sont requises"),
  outputs: z.string().min(1, "Les sorties sont requises"),
  resources: z.string().min(1, "Les ressources sont requises"),
  status: z.string().min(1, "Le statut est requis"),
})

export function ProcessForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      type: "",
      owner: "",
      inputs: "",
      outputs: "",
      resources: "",
      status: "ACTIVE",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Processus enregistré",
      description: `${values.name} a été ajouté`,
    })
    form.reset()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ajouter un processus</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input placeholder="Processus de production" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Description du processus" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner un type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="CORE">Cœur de métier</SelectItem>
                      <SelectItem value="SUPPORT">Support</SelectItem>
                      <SelectItem value="MANAGEMENT">Management</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="owner"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Propriétaire</FormLabel>
                  <FormControl>
                    <Input placeholder="Nom du responsable" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="inputs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Entrées (séparées par des virgules)</FormLabel>
                  <FormControl>
                    <Input placeholder="Matières premières, spécifications" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="outputs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sorties (séparées par des virgules)</FormLabel>
                  <FormControl>
                    <Input placeholder="Produits finis, rapports" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="resources"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ressources (séparées par des virgules)</FormLabel>
                  <FormControl>
                    <Input placeholder="Personnel, équipements" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Statut</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner un statut" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="ACTIVE">Actif</SelectItem>
                      <SelectItem value="INACTIVE">Inactif</SelectItem>
                      <SelectItem value="DRAFT">Brouillon</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Enregistrer</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}