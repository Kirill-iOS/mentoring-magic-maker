
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">MentoringMagic</h3>
            <p className="mb-4">
              Ускоряем ваш путь к успеху через персональный менторинг и поддержку опытных профессионалов.
            </p>
            <p>© {new Date().getFullYear()} MentoringMagic. Все права защищены.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Услуги</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Бизнес-менторинг</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Карьерный рост</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Личная эффективность</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Групповой менторинг</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Компания</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Наша команда</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Правовая информация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Оферта</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>Разработано с ❤️ для амбициозных людей, которые хотят достичь большего</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
