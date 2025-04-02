
import React from 'react';
import { Clock, Target, FileCode, Award } from 'lucide-react';

const benefits = [
  {
    icon: <Clock className="h-10 w-10 text-mentor-primary" />,
    title: "Ускоренное обучение Swift и SwiftUI",
    description: "Освойте основы iOS-разработки за недели, а не месяцы. Ментор поможет сфокусироваться на самом важном и пропустить второстепенные детали."
  },
  {
    icon: <FileCode className="h-10 w-10 text-mentor-primary" />,
    title: "Портфолио iOS-приложений",
    description: "Создайте несколько реальных приложений под руководством ментора, которые станут отличным дополнением к вашему резюме."
  },
  {
    icon: <Award className="h-10 w-10 text-mentor-primary" />,
    title: "Подготовка к собеседованиям",
    description: "Получите инсайдерскую информацию о том, что спрашивают на собеседованиях iOS-разработчиков, и отработайте ответы на типичные вопросы."
  },
  {
    icon: <Target className="h-10 w-10 text-mentor-primary" />,
    title: "Четкий план обучения",
    description: "Следуйте персональной дорожной карте с конкретными целями, сроками и измеримыми результатами вашего прогресса в iOS-разработке."
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Преимущества менторинга в iOS-разработке
          </h2>
          <p className="text-lg text-gray-700">
            Работа с ментором — это инвестиция в вашу карьеру iOS-разработчика, которая окупается быстрее, чем вы думаете. Вот что вы получаете:
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
