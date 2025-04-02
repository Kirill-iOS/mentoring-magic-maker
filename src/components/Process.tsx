
import React from 'react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: "01",
    title: "Бесплатная консультация",
    description: "Знакомство с ментором, обсуждение вашего текущего уровня знаний в iOS-разработке, определение целей и ожиданий."
  },
  {
    number: "02",
    title: "Персональный план обучения",
    description: "Создание детального плана освоения Swift, SwiftUI и других технологий, необходимых для iOS-разработки, с учетом вашего уровня."
  },
  {
    number: "03",
    title: "Практические занятия",
    description: "Еженедельные сессии, где вы вместе с ментором разбираете сложные темы, работаете над проектами и получаете обратную связь."
  },
  {
    number: "04",
    title: "Создание портфолио и подготовка к трудоустройству",
    description: "Разработка нескольких iOS-приложений для портфолио, подготовка резюме и тренировка прохождения технических собеседований."
  }
];

const Process = () => {
  return (
    <section id="process" className="section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Как проходит процесс обучения iOS-разработке?
          </h2>
          <p className="text-lg text-gray-700">
            Работа с ментором — это структурированный процесс, который ведет вас от основ Swift до создания собственных iOS-приложений и трудоустройства. Вот как это происходит:
          </p>
        </div>
        
        <div className="space-y-6 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 bg-mentor-primary text-white text-4xl font-bold p-6 rounded-lg">
                {step.number}
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md flex-1 card-hover">
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg mb-6">
            Готовы начать свой путь в iOS-разработке с опытным ментором?
          </p>
          <Button className="btn-primary" size="lg">Записаться на бесплатную консультацию</Button>
        </div>
      </div>
    </section>
  );
};

export default Process;
