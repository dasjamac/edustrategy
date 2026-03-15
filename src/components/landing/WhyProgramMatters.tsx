import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Target, AlertTriangle } from 'lucide-react';

const WhyProgramMatters = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const points = [
    {
      icon: AlertTriangle,
      title: 'Ошибка большинства',
      description: 'Громкое имя университета больше не гарантирует оффер. Пока другие гонятся за местом в рейтинге, мы помогаем вам занять место в индустрии. Выбирайте востребованность, а не строчку в резюме, которая устареет к вашему выпуску.',
    },
    {
      icon: Target,
      title: 'Программа определяет карьеру',
      description: 'Специализация — ваш пропуск на рынок труда. Забудьте об общих программах. Такие программы как data science, green energy или biotechology дают востребованные навыки для быстро растущих секторов.',
    },
    {
      icon: TrendingUp,
      title: 'Анализ дефицитных кадров',
      description: 'Я отслеживаю списки Shortage Occupations по всей Европе. Выбирая дефицитные специальности сегодня, Вы гарантируете себе упрощенную процедуру получения ВНЖ и зарплату на 30% выше среднерыночной сразу после выпуска.',
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
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Почему выбор программы важнее выбора университета
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Престижный диплом не гарантирует работу. Правильная специализация 
            в правильном секторе — гарантирует востребованность.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card p-8 rounded-xl shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                <point.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-4">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyProgramMatters;
