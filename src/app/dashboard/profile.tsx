import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"

const skills = {
  salud: [
    { name: "Resistencia", value: 70 },
    { name: "Fuerza", value: 50 },
    { name: "Flexibilidad", value: 30 },
  ],
  conocimiento: [
    { name: "Programación", value: 90 },
    { name: "Historia", value: 40 },
    { name: "Idiomas", value: 60 },
  ],
  comunicacion: [
    { name: "Oratoria", value: 55 },
    { name: "Escucha activa", value: 75 },
    { name: "Empatía", value: 80 },
  ],
  liderazgo: [
    { name: "Gestión de equipos", value: 65 },
    { name: "Resolución de conflictos", value: 70 },
    { name: "Toma de decisiones", value: 60 },
  ],
  responsabilidad: [
    { name: "Puntualidad", value: 95 },
    { name: "Compromiso", value: 85 },
    { name: "Autonomía", value: 75 },
  ]
}

export default function Profile() {
  return (
    <div className="p-6 bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Habilidades del Personaje</h1>
      <Tabs defaultValue="salud" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-5 mb-4">
          {Object.keys(skills).map((categoria) => (
            <TabsTrigger key={categoria} value={categoria} className="capitalize">
              {categoria}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(skills).map(([categoria, habilidades]) => (
          <TabsContent key={categoria} value={categoria}>
            <ScrollArea className="h-[400px] pr-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {habilidades.map((habilidad) => (
                  <Card key={habilidad.name} className="bg-[#fff] border border-[#2a2a2a]">
                    <CardHeader>
                      <CardTitle>{habilidad.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Progress value={habilidad.value} className="h-4 bg-[#2a2a2a]" />
                      <div className="text-sm text-right mt-1">{habilidad.value}%</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}