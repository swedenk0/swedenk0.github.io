import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import deltacarLogo from "@/assets/deltacar-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img 
              src={deltacarLogo} 
              alt="Deltacar Autoservis" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-white/80 mb-4">
              Váš spoľahlivý partner pre starostlivosť o auto.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/deltacar.sk/"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Rýchle odkazy</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Domov
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Služby
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  O nás
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+421 944 218 867</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>servis@deltacar.sk</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>© {new Date().getFullYear()} Deltacar. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
