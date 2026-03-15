import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, BookOpen, Scale, Languages } from 'lucide-react';

const Credibility = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const credentials = [
    {
      icon: Globe,
      title: 'Знание региона',
      description: 'Глубокое понимание образовательных систем Бельгии, Нидерландов и Франции — как они работают, чем отличаются, какие программы дают больше шансов на трудоустройство для иностранных выпускников.',
    },
    {
      icon: BookOpen,
      title: 'Академический опыт',
      description: 'Я имею опыт успешного поступления в университеты Великобритании, Франции, Швейцарии, Италии, Бельгии и Нидерландов и сама окончила две магистратуры (в Италии и в Бельгии).',
    },
    {
      icon: Scale,
      title: 'Правовая поддержка',
      description: 'Как юрист я знаю всё о признании дипломов и визовых правилах. Я помогу правильно оформить документы и подскажу, как легально остаться в стране после учебы.',
    },
    {
      icon: Languages,
      title: 'Мультиязычность',
      description: 'Свободное владение английским, нидерландским и французским позволяет работать с оригинальными источниками и понимать локальную специфику.',
    },
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-gold font-medium mb-4 tracking-wide uppercase text-sm">
            Экспертиза
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Почему мне можно доверять
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Не агентство с сотней направлений. Глубокая специализация 
            на трёх странах и понимание европейского контекста.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {credentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credibility;
