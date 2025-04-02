
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Иван Петров",
    role: "Junior iOS Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
    text: "Благодаря менторингу я освоил Swift и SwiftUI за 3 месяца и создал свое первое приложение. На собеседовании все были впечатлены моим портфолио, и я получил оффер в первой же компании!",
    stars: 5
  },
  {
    name: "Анна Сидорова",
    role: "Студентка",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
    text: "Я пыталась изучать iOS-разработку самостоятельно, но застревала на сложных темах. С ментором процесс пошел гораздо быстрее. Теперь у меня два приложения в App Store и предложения о стажировке.",
    stars: 5
  },
  {
    name: "Максим Иванов",
    role: "Web-разработчик, сменивший профиль",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
    text: "Я уже имел опыт веб-разработки, но переход на iOS казался непростым. Ментор помог мне перенести мои навыки в новую область и освоить особенности мобильной разработки. Спустя 4 месяца я уже работаю iOS-разработчиком.",
    stars: 4
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Истории успеха наших студентов
          </h2>
          <p className="text-lg text-gray-700">
            Десятки начинающих разработчиков уже начали карьеру в iOS-разработке благодаря нашему менторингу. Вот некоторые из их историй:
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md card-hover">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
                {[...Array(5-testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gray-300" />
                ))}
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
