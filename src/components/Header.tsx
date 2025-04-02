
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold gradient-text">Авоська Менторинг</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#benefits" className="text-sm font-medium hover:text-mentor-primary">Преимущества</a>
          <a href="#process" className="text-sm font-medium hover:text-mentor-primary">Процесс</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-mentor-primary">Отзывы</a>
          <a href="#faq" className="text-sm font-medium hover:text-mentor-primary">FAQ</a>
        </nav>
        <div>
          <Button className="bg-mentor-primary hover:bg-mentor-primary/90">
            Начать обучение
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
