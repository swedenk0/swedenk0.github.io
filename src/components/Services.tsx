import { Wrench, Gauge, Droplets, Disc3, Bubbles, Zap, LaptopMinimalCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: Wrench,
    title: "Mechanické opravy",
    description: "Komplexné opravy motorov, prevodoviek a podvozkov",
  },
  {
    icon: LaptopMinimalCheck,
    title: "Diagnostika",
    description: "Diagnostika všetkých systémov vozidla",
  },
  {
    icon: Droplets,
    title: "Výmena prevádzkových kvapalín vozidiel",
    description: "Výmena motorového oleja a ostatných prevádzkových kvapalín podľa predpisu",
  },
  {
    icon: Disc3,
    title: "Pneuservis",
    description: "Komplexné služby pneuservisu pre vaše vozidlo",
  },
  {
    icon: Zap,
    title: "Elektronika",
    description: "Oprava a servis elektrických systémov vozidla",
  },
  {
    icon: Bubbles,
    title: "Detailing",
    description: "Kompletný detailing pre dokonalý vzhľad vášho vozidla",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Naše <span className="text-primary">Služby</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Poskytujeme široký rozsah služieb pre vaše vozidlo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border bg-card animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
