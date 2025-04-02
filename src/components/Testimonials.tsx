
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Анна Петрова",
    role: "Предприниматель",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
    text: "Благодаря менторингу я смогла построить свой бизнес за 6 месяцев вместо 2 лет! Четкий план, постоянная поддержка и профессиональный взгляд со стороны — это именно то, что было мне нужно.",
    stars: 5
  },
  {
    name: "Максим Иванов",
    role: "Маркетолог",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
    text: "Я был на перепутье в своей карьере, и ментор помог мне найти верное направление. Через 3 месяца я получил повышение и увеличил свой доход на 40%. Это лучшая инвестиция в себя!",
    stars: 5
  },
  {
    name: "Елена Сидорова",
    role: "IT-специалист",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
    text: "Менторинг помог мне перейти от рядового программиста до тимлида за короткий срок. Мой ментор не только поделился техническими знаниями, но и развил мои лидерские качества. Результат превзошел все ожидания!",
    stars: 4
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Что говорят наши клиенты
          </h2>
          <p className="text-lg text-gray-700">
            Сотни людей уже изменили свою жизнь к лучшему благодаря нашему менторингу. Вот некоторые из их историй:
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
