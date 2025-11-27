import { Award, Users, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "15+ rokov skúseností",
    description: "Dlhoročná tradícia v oblasti autoservisu",
  },
  {
    icon: Users,
    title: "Certifikovaní mechanici",
    description: "Tím odborníkov s praxou a vzdelaním",
  },
  {
    icon: Clock,
    title: "Rýchly servis",
    description: "Efektívne riešenia v krátkych časoch",
  },
  {
    icon: Shield,
    title: "Záruka kvality",
    description: "Garancia na všetky vykonané práce",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              O <span className="text-primary">nás</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Sme moderný autoservis, ktorý sa špecializuje na komplexné služby pre všetky
              typy vozidiel. Naším cieľom je poskytnúť našim zákazníkom najvyššiu kvalitu
              služieb za spravodlivé ceny.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4 p-6 rounded-lg bg-card border border-border hover:shadow-md transition-shadow animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-hero text-white p-8 rounded-lg animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Prečo si vybrať nás?</h3>
            <p className="text-white/90 leading-relaxed mb-4">
              Kombinujeme moderné technológie s osobným prístupom ku každému zákazníkovi.
              Naši mechanici pravidelne absolvujú školenia, aby boli v obraze s najnovšími
              trendmi v automotive.
            </p>
            <p className="text-white/90 leading-relaxed">
              Transparentnosť, profesionalita a spokojnosť zákazníka sú pre nás prvoradé.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
