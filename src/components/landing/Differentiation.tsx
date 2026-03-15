import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, X } from 'lucide-react';

const Differentiation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const comparisons = [
    {
      aspect: 'Бизнес-модель',
      agencies: 'Комиссия от университетов',
      advisor: 'Оплата от клиента',
    },
    {
      aspect: 'Мотивация',
      agencies: 'Продать партнёрские программы',
      advisor: 'Найти лучшую программу для вас',
    },
    {
      aspect: 'Выбор университетов',
      agencies: 'Только партнёрские вузы',
      advisor: 'Любые программы в регионе',
    },
    {
      aspect: 'Глубина анализа',
      agencies: 'Поверхностное сравнение',
      advisor: 'Анализ рынка труда и специализаций',
    },
    {
      aspect: 'Фокус',
      agencies: 'Количество заявок',
      advisor: 'Качество выбора и стратегия',
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
            Отличия
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Почему не агентство
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Агентства зарабатывают на комиссиях от университетов. 
            Я работаю только на вас — без скрытых интересов.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 mb-4 text-center">
            <div></div>
            <div className="bg-muted/50 rounded-t-lg py-3 px-4">
              <span className="text-muted-foreground font-medium text-sm">Образовательные агентства</span>
            </div>
            <div className="bg-primary rounded-t-lg py-3 px-4">
              <span className="text-primary-foreground font-medium text-sm">Независимый консультант</span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, index) => (
            <motion.div
              key={row.aspect}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="grid grid-cols-3 gap-4 mb-2"
            >
              <div className="bg-card p-4 rounded-lg flex items-center">
                <span className="font-medium text-foreground text-sm">{row.aspect}</span>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg flex items-center gap-2">
                <X className="w-4 h-4 text-destructive flex-shrink-0" />
                <span className="text-muted-foreground text-sm">{row.agencies}</span>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg flex items-center gap-2">
                <Check className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-foreground text-sm">{row.advisor}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Differentiation;
