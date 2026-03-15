import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Compass, GraduationCap, FileText, MessageSquare } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Compass,
      title: 'Стратегическое планирование',
      description: 'Анализ ваших целей, сильных сторон и интересов. Определение секторов с наибольшим потенциалом роста для вашего профиля.',
      features: ['Карьерное позиционирование', 'Анализ трендов рынка труда', 'Долгосрочная стратегия'],
    },
    {
      icon: GraduationCap,
      title: 'Выбор программы',
      description: 'Подбор программ в Бельгии, Нидерландах и Франции с учётом специализации, языка обучения и карьерных перспектив.',
      features: ['Сравнительный анализ программ', 'Оценка employability', 'Финансовое планирование'],
    },
    {
      icon: FileText,
      title: 'Подготовка документов',
      description: 'Помощь с CV, мотивационным письмом и application strategy. Каждый документ — часть цельной истории.',
      features: ['Positioning в заявке', 'Редактура и feedback', 'Стратегия подачи'],
    },
    {
      icon: MessageSquare,
      title: 'Поддержка в принятии решения',
      description: 'Когда есть несколько офферов — помогаю взвесить факторы и принять осознанное решение.',
      features: ['Сравнение офферов', 'Оценка рисков', 'Финальные консультации'],
    },
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
            Услуги
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            От стратегии до поступления
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Полный цикл сопровождения — от первого разговора о целях 
            до осознанного выбора программы.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-8 lg:p-10 rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-navy-light transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
