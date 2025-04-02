
import React from 'react';
import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';

const ContactTrust = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Связаться с нами
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Остались вопросы или готовы начать? Свяжитесь с нами любым удобным способом.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-mentor-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-mentor-primary" />
                </div>
                <div>
                  <p className="font-medium">Телефон</p>
                  <p className="text-gray-700">+7 (XXX) XXX-XX-XX</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-mentor-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-mentor-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-700">mentor@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-mentor-primary/10 p-3 rounded-full">
                  <Instagram className="h-6 w-6 text-mentor-primary" />
                </div>
                <div>
                  <p className="font-medium">Instagram</p>
                  <p className="text-gray-700">@mentoringmagic</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-mentor-primary/10 p-3 rounded-full">
                  <Linkedin className="h-6 w-6 text-mentor-primary" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-gray-700">MentoringMagic</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Почему нам доверяют
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Наша команда — это опытные профессионалы с подтвержденными результатами и сертификациями.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <h3 className="font-bold text-xl mb-4">Наши сертификаты и достижения</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="border p-4 rounded-lg text-center">
                  <p className="font-medium">ICF Certified</p>
                  <p className="text-sm text-gray-500">Международная федерация коучинга</p>
                </div>
                <div className="border p-4 rounded-lg text-center">
                  <p className="font-medium">EMCC Global</p>
                  <p className="text-sm text-gray-500">Европейский совет менторинга и коучинга</p>
                </div>
                <div className="border p-4 rounded-lg text-center">
                  <p className="font-medium">800+</p>
                  <p className="text-sm text-gray-500">Успешных клиентов</p>
                </div>
                <div className="border p-4 rounded-lg text-center">
                  <p className="font-medium">95%</p>
                  <p className="text-sm text-gray-500">Удовлетворенность клиентов</p>
                </div>
              </div>
            </div>
            
            <div className="bg-mentor-primary/5 p-6 rounded-xl border border-mentor-primary/20">
              <h3 className="font-bold text-xl mb-4">Гарантия качества</h3>
              <p className="text-gray-700">
                Мы уверены в качестве наших услуг. Если вы не довольны результатами после первого месяца работы, мы вернем вам деньги.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTrust;
