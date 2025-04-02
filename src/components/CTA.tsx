
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Gift } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-primary text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Начните свой путь к успеху прямо сейчас!
          </h2>
          <p className="text-xl mb-8">
            Оставьте заявку на бесплатную консультацию и получите персональный план действий.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Gift className="h-6 w-6 text-yellow-300" />
              <h3 className="text-xl font-bold">Бонус при записи сегодня</h3>
            </div>
            <p className="mb-6">
              При записи на консультацию сегодня вы получите эксклюзивный чек-лист "5 шагов к быстрому успеху" и доступ к закрытому сообществу единомышленников.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-mentor-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <span>Чек-лист "5 шагов к быстрому успеху"</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-mentor-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <span>Доступ к закрытому сообществу</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-mentor-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <span>Скидка 20% на первый месяц менторинга</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-mentor-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">4</span>
                </div>
                <span>Электронная книга "Секреты успеха"</span>
              </div>
            </div>
          </div>
          
          <Button size="lg" className="bg-white text-mentor-primary hover:bg-white/90 text-lg py-6 px-8">
            Записаться на бесплатную консультацию
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
