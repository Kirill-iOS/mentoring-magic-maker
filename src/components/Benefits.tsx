
import React from 'react';
import { Clock, Target, ShieldCheck, Lightbulb } from 'lucide-react';

const benefits = [
  {
    icon: <Clock className="h-10 w-10 text-mentor-primary" />,
    title: "Экономия времени и ресурсов",
    description: "Не тратьте годы на поиск правильного пути. Ментор поможет избежать ошибок и двигаться кратчайшим путем к цели."
  },
  {
    icon: <Target className="h-10 w-10 text-mentor-primary" />,
    title: "Четкий план действий",
    description: "Получите пошаговую стратегию достижения ваших целей с конкретными сроками и измеримыми результатами."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-mentor-primary" />,
    title: "Поддержка и мотивация",
    description: "Всегда есть кто-то, кто верит в вас, поддерживает и помогает преодолеть трудности на пути к успеху."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-mentor-primary" />,
    title: "Доступ к опыту успешного ментора",
    description: "Используйте знания и опыт человека, который уже достиг результатов, к которым вы стремитесь."
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Преимущества менторинга
          </h2>
          <p className="text-lg text-gray-700">
            Работа с ментором — это инвестиция в ваше будущее, которая окупается быстрее, чем вы думаете. Вот что вы получаете:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md flex gap-6 card-hover">
              <div className="flex-shrink-0">{benefit.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
