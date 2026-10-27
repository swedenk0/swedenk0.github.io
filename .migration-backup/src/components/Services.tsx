import { Wrench, Gauge, Droplets, Disc3, Bubbles, Zap, LaptopMinimalCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Link } from "react-router-dom";
 
const services = [
  {
    icon: Wrench,
    title: "Mechanické opravy",
    description: "Komplexné opravy motorov, prevodoviek a podvozkov",
    link: null,
  },
  {
    icon: LaptopMinimalCheck,
    title: "Diagnostika",
    description: "Diagnostika všetkých systémov vozidla",
    link: null,
  },
  {
    icon: Droplets,
    title: "Výmena prevádzkových kvapalín vozidiel",
    description: "Výmena motorového oleja a ostatných prevádzkových kvapalín podľa predpisu",
    link: null,
  },
  {
    icon: Disc3,
    title: "Pneuservis",
    description: "Komplexné služby pneuservisu pre vaše vozidlo",
    link: "/cennik-pneuservis",
  },
  {
    icon: Zap,
    title: "Elektronika",
    description: "Oprava a servis elektrických systémov vozidla",
    link: null,
  },
  {
    icon: Bubbles,
    title: "Detailing",
    description: "Kompletný detailing pre dokonalý vzhľad vášho vozidla",
    link: null,
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
            const card = (
              <Card
                key={index}
                className={`group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border bg-card animate-slide-up h-full ${service.link ? "cursor-pointer" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl flex items-center gap-2">
                    {service.title}
                    {service.link && (
                      <span className="text-xs font-normal text-primary border border-primary/30 rounded-full px-2 py-0.5">
                        Zobraziť cenník
                      </span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
 
            return service.link ? (
              <Link to={service.link} key={index} className="block">
                {card}
              </Link>
            ) : (
              <div key={index}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
 
export default Services;
