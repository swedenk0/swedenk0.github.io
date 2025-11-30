import { Button } from "./ui/button";
import heroImage from "@/assets/hero-garage.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Auto servis"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-primary">
            Deltacar<br />
            <span className="text-5xl md:text-7xl font-bold text-white mb-6">Autoservis</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Kvalitné opravy a údržba vášho vozidla. S nami je vaše auto v bezpečných rukách.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-red hover:opacity-90 transition-opacity text-lg px-8 py-6"
            >
              Rezervovať termín
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => {
                const element = document.getElementById("services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-lg px-8 py-6 bg-white text-foreground hover:bg-white/90"
            >
              Naše služby
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
