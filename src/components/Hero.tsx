
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-20 md:py-32">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Хотите достичь своих целей в <span className="gradient-text">2 раза быстрее</span>?
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Ваш личный ментор уже ждет вас!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="btn-primary">
                Начать свой путь
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-mentor-primary text-mentor-primary hover:bg-mentor-primary/10">
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Mentoring Session" 
                className="absolute w-full h-full object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg animate-float">
                <p className="text-sm font-medium text-mentor-primary">
                  "Менторинг изменил мою жизнь!"
                </p>
                <p className="text-xs text-gray-500">— Анна, предприниматель</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
