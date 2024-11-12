"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  filename: z.string().min(1, "Le nom du fichier est requis"),
  contentType: z.string().min(1, "Le type de contenu est requis"),
  size: z.string().min(1, "La taille est requise"),
  metadata: z.string().optional(),
})

export function GEDForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      filename: "",
      contentType: "",
      size: "",
      metadata: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Document enregistré",
      description: `${values.filename} a été ajouté à la GED`,
    })
    form.reset()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ajouter un document</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="filename"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom du fichier</FormLabel>
                  <FormControl>
                    <Input placeholder="rapport.pdf" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contentType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type de contenu</FormLabel>
                  <FormControl>
                    <Input placeholder="application/pdf" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Taille</FormLabel>
                  <FormControl>
                    <Input placeholder="1024" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="metadata"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Métadonnées (JSON)</FormLabel>
                  <FormControl>
                    <Input placeholder='{"department": "Quality"}' {...field} />
                  </FormControl>
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