
import React from 'react';
import { Compass, FileCheck, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const solutionPoints = [
  {
    icon: <Compass className="h-12 w-12 text-mentor-primary" />,
    title: "Ваш персональный компас",
    description: "Я помогу вам найти правильное направление и избежать типичных ошибок на пути к успеху."
  },
  {
    icon: <FileCheck className="h-12 w-12 text-mentor-primary" />,
    title: "Четкий план действий",
    description: "Вместе мы разработаем пошаговую стратегию достижения ваших целей с конкретными сроками."
  },
  {
    icon: <Users className="h-12 w-12 text-mentor-primary" />,
    title: "Постоянная поддержка",
    description: "Я буду рядом, чтобы поддерживать вас, мотивировать и корректировать курс при необходимости."
  }
];

const Solution = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Менторинг — это ваш ключ к успеху
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Менторинг — это сопровождение опытным наставником, который уже прошел путь, который вам предстоит пройти. Это возможность учиться на чужих ошибках и достичь вашей цели в разы быстрее.
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
              <Button className="btn-primary">Начать менторинг сейчас</Button>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Mentoring Solution" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-500 font-medium">Проверено</span>
                </div>
                <p className="font-bold text-lg">В 2 раза быстрее к успеху</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
