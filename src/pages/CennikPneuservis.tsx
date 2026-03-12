import { Disc3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
 
const tireServices = [
  {
    title: "Výmena Pneumatík",
    description: "Demontáž a montáž pneumatík vrátane vyváženia",
    prices: [
      { size: 'do 16"', price: "55 €" },
      { size: '17" – 18"', price: "65 €" },
      { size: '19" – 20"', price: "75 €" },
      { size: '21" a viac', price: "95 €" },
    ],
  },
  {
    title: "Výmena Kolies",
    description: "Prezutie kompletných kolies (disk + pneumatika)",
    prices: [
      { size: 'do 16"', price: "35 €" },
      { size: '17" – 18"', price: "45 €" },
      { size: '19" – 20"', price: "55 €" },
      { size: '21" a viac', price: "65 €" },
    ],
  },
];
 
const CennikPneuservis = () => {
  const navigate = useNavigate();
 
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
 
      <main className="flex-1 pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Cenník <span className="text-primary">Pneuservis</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparentné ceny bez skrytých poplatkov
            </p>
          </div>
 
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tireServices.map((service, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card shadow-sm overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card header */}
                <div className="bg-gradient-hero px-6 py-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Disc3 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">{service.title}</h2>
                    <p className="text-white/70 text-sm">{service.description}</p>
                  </div>
                </div>
 
                {/* Price rows */}
                <div className="divide-y divide-border">
                  {service.prices.map((row, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-6 py-4 hover:bg-secondary/50 transition-colors"
                    >
                      <span className="text-foreground font-medium">{row.size}</span>
                      <span className="text-2xl font-bold text-primary">{row.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
 
          <p className="text-center text-muted-foreground text-sm mt-8">
            * Ceny sú uvedené vrátane DPH. Pri otázkach nás neváhajte kontaktovať.
          </p>
 
          <div className="text-center mt-10">
            <Button
              onClick={() => navigate("/#contact")}
              className="bg-gradient-red hover:opacity-90 transition-opacity text-lg px-8 py-6"
            >
              Rezervovať termín
            </Button>
          </div>
        </div>
      </main>
 
      <Footer />
    </div>
  );
};
 
export default CennikPneuservis;
 