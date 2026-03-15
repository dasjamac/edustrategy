import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, X } from 'lucide-react';

const WhoIsFor = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const forWhom = [
    'Выпускники школ, планирующие бакалавриат в Европе',
    'Студенты, выбирающие магистратуру с прицелом на карьеру',
    'Родители, которые хотят понять реальную отдачу от инвестиций',
    'Те, кто думает о долгосрочной жизни и работе в ЕС',
    'Те, кто ценит независимую экспертизу без продаж',
  ];

  const notFor = [
    'Кто ищет "гарантированное поступление"',
    'Кто хочет просто "подать документы и забыть"',
    'Кто выбирает университет только по рейтингу',
    'Кто не готов к серьёзному разговору о целях',
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-gold font-medium mb-4 tracking-wide uppercase text-sm">
            Для кого
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Подходит ли вам эта услуга
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* For whom */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card p-8 lg:p-10 rounded-xl shadow-card"
          >
            <h3 className="font-serif text-2xl text-foreground mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-gold" />
              </div>
              Это для вас, если вы:
            </h3>
            <ul className="space-y-4">
              {forWhom.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Not for */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-muted/30 p-8 lg:p-10 rounded-xl border border-border"
          >
            <h3 className="font-serif text-2xl text-foreground mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              Не подойдёт, если вы:
            </h3>
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsFor;
