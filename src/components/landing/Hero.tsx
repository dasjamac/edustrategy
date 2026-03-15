import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="European universities" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="text-gold font-medium mb-6 tracking-wide uppercase text-sm">
              Независимый консультант по образованию
            </p>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
              Образование в Европе — как инвестиция в{' '}
              <span className="text-gradient-gold">карьеру на десятилетия</span>
            </h1>
            
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              Стратегический выбор программы в Бельгии, Нидерландах и Франции. 
              Не просто поступление — а понимание, какое образование откроет 
              двери на европейский рынок труда.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="/quiz">
              <Button variant="hero" size="xl">
                Карьерный тест
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a href="#services">
              <Button variant="heroOutline" size="xl">
                Узнать подробнее
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-primary-foreground/20"
          >
            <div className="flex flex-wrap gap-8 md:gap-16 text-primary-foreground/70 text-sm">
              <div>
                <div className="text-2xl font-serif text-primary-foreground mb-1">3 страны</div>
                <div>Бельгия • Нидерланды • Франция</div>
              </div>
              <div>
                <div className="text-2xl font-serif text-primary-foreground mb-1">Глубокая экспертиза</div>
                <div>Право • Технологии • Life Sciences</div>
              </div>
              <div>
                <div className="text-2xl font-serif text-primary-foreground mb-1">Независимость</div>
                <div>Без комиссий от университетов</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
