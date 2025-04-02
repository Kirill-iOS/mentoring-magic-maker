
import React from 'react';
import { Clock, Award, X } from 'lucide-react';

const problemPoints = [
  {
    icon: <Clock className="h-8 w-8 text-mentor-accent" />,
    title: "Потраченное время",
    description: "Вы тратите годы на пробу разных методов, теряете время и энергию."
  },
  {
    icon: <X className="h-8 w-8 text-mentor-accent" />,
    title: "Неудачи и сомнения",
    description: "Вы сталкиваетесь с неудачами и сомнениями, которые могли бы избежать."
  },
  {
    icon: <Award className="h-8 w-8 text-mentor-accent" />,
    title: "Недостижимый успех",
    description: "Вам кажется, что успех недостижим, и вы не знаете, как к нему прийти."
  }
];

const Problem = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Вы узнаете себя в этом?
          </h2>
          <p className="text-lg text-gray-700">
            Многие талантливые люди сталкиваются с одинаковыми препятствиями на пути к успеху. Без правильного руководства этот путь может быть долгим и разочаровывающим.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problemPoints.map((point, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md card-hover">
              <div className="mb-6">{point.icon}</div>
              <h3 className="text-xl font-bold mb-4">{point.title}</h3>
              <p className="text-gray-700">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
