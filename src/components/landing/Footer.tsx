import { Mail, MapPin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <a href="/" className="font-serif text-xl font-semibold">
              <span className="text-primary-foreground">Education</span>
              <span className="text-gold">Strategy</span>
            </a>
            <p className="text-primary-foreground/60 mt-4 text-sm leading-relaxed">
              Независимая консультация по выбору образовательных программ 
              в Бельгии, Нидерландах и Франции.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-primary-foreground mb-4">Навигация</h4>
            <ul className="space-y-3">
              <li>
                <a href="#why" className="text-primary-foreground/60 hover:text-gold transition-colors text-sm">
                  Почему программа важнее
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/60 hover:text-gold transition-colors text-sm">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#differentiation" className="text-primary-foreground/60 hover:text-gold transition-colors text-sm">
                  Отличия от агентств
                </a>
              </li>
              <li>
                <a href="#credibility" className="text-primary-foreground/60 hover:text-gold transition-colors text-sm">
                  Экспертиза
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-primary-foreground mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:hello@edustrategy.eu"
                  className="flex items-center gap-3 text-primary-foreground/60 hover:text-gold transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  hello@edustrategy.eu
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/60 text-sm">
                <MapPin className="w-4 h-4 text-gold" />
                Лёвен, Бельгия
              </li>
              <li>
                <a 
                  href="https://t.me/Daria_Moto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/60 hover:text-gold transition-colors text-sm"
                >
                  <Send className="w-4 h-4 text-gold" />
                  @Daria_Moto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © 2026 EducationStrategy. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-primary-foreground/40 hover:text-gold transition-colors text-sm">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
