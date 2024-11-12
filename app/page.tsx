import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Shield, Target } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ARISKAN PILOTE
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Solution intégrée de management des activités industrielles et de services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-6 w-6" />
                Gestion des Processus
              </CardTitle>
              <CardDescription>
                Optimisez vos processus métier
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Accéder</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6" />
                Gestion des Risques
              </CardTitle>
              <CardDescription>
                Identifiez et maîtrisez vos risques
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Accéder</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6" />
                Objectifs et KPIs
              </CardTitle>
              <CardDescription>
                Suivez votre performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Accéder</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}