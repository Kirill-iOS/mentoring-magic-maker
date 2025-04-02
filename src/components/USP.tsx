
import React from 'react';
import { Check } from 'lucide-react';

const USP = () => {
  return (
    <section className="bg-gradient-primary text-white section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Почему выбирают "Авоська Менторинг"?
          </h2>
          <p className="text-xl">
            Индивидуальный подход, практические знания и фокус на результат. Вместе мы создадим ваше первое iOS-приложение и подготовим вас к профессиональной карьере.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">Практические проекты</h3>
            <p className="mb-6">Не просто теория, а реальные приложения для вашего портфолио, которые вы можете показать работодателям.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>Создание полноценных приложений</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>Работа с реальными API</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>Публикация в App Store</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">Индивидуальный подход</h3>
            <p className="mb-6">Программа обучения адаптируется под ваши знания, темп и цели в iOS-разработке.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>Персональный план обучения</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>Фокус на ваших слабых местах</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>Гибкий график занятий</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">Опыт работы в индустрии</h3>
            <p className="mb-6">Получите знания от разработчика с реальным опытом в крупных компаниях и множеством успешных проектов.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>Актуальные практики и технологии</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>Инсайты из индустрии</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>Связи в сообществе разработчиков</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USP;
