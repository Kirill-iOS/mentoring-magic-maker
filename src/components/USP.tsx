
import React from 'react';
import { Check } from 'lucide-react';

const USP = () => {
  return (
    <section className="bg-gradient-primary text-white section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Почему выбирают именно наш менторинг?
          </h2>
          <p className="text-xl">
            Индивидуальный подход, проверенные стратегии и гарантированный прогресс. Вместе мы достигнем ваших целей быстрее, чем вы могли себе представить.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">Индивидуальный подход</h3>
            <p className="mb-6">Каждый клиент уникален, поэтому программа менторинга разрабатывается специально под ваши цели и особенности.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>Персональный план развития</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>Учет ваших сильных и слабых сторон</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>Адаптация под ваш график</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">Проверенные стратегии</h3>
            <p className="mb-6">Используем только те методики, которые показали свою эффективность на практике у сотен наших клиентов.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>Основано на реальном опыте</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>Актуальные инструменты и подходы</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>Регулярное обновление методик</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">Гарантированный прогресс</h3>
            <p className="mb-6">Мы не просто даем знания — мы обеспечиваем измеримый результат и реальное продвижение к вашим целям.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>Отслеживание KPI вашего прогресса</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>Регулярная обратная связь</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>Прозрачный план достижения целей</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USP;
