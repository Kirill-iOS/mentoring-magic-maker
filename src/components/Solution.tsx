
import React from 'react';
import { Code, FileCode, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const solutionPoints = [
  {
    icon: <Code className="h-12 w-12 text-mentor-primary" />,
    title: "Практический подход к Swift и SwiftUI",
    description: "Я помогу вам освоить ключевые концепции iOS-разработки на практике, без бесконечной теории."
  },
  {
    icon: <FileCode className="h-12 w-12 text-mentor-primary" />,
    title: "Создание реальных приложений",
    description: "Вместе мы разработаем несколько приложений для вашего портфолио, чтобы вы могли продемонстрировать свои навыки работодателям."
  },
  {
    icon: <Users className="h-12 w-12 text-mentor-primary" />,
    title: "Подготовка к собеседованиям",
    description: "Я помогу вам подготовиться к техническим собеседованиям и расскажу, что именно ищут работодатели в iOS-разработчиках."
  }
];

const Solution = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Авоська Менторинг — ваш ключ к карьере в iOS-разработке
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Менторинг — это сопровождение опытным iOS-разработчиком, который поможет вам освоить необходимые навыки, избежать типичных ошибок и в кратчайшие сроки начать создавать собственные приложения.
            </p>
            <div className="space-y-8">
              {solutionPoints.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">{point.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                    <p className="text-gray-700">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Button className="btn-primary">Начать обучение сейчас</Button>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551651653-c5dcb9d54599?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="iOS Development Mentoring" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-500 font-medium">Проверено</span>
                </div>
                <p className="font-bold text-lg">Первое приложение за 6 недель</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
