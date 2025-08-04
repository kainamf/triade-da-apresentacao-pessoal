import React from 'react';
import { Clock, Coffee, Users, Lightbulb, Heart } from 'lucide-react';

export default function Schedule() {
  const day1Schedule = [
    { time: "8h30", activity: "Credenciamento", icon: <Users className="w-5 h-5" /> },
    { time: "10h", activity: "Início das Palestras", icon: <Lightbulb className="w-5 h-5" /> },
    { time: "12h", activity: "Almoço", icon: <Coffee className="w-5 h-5" /> },
    { time: "14h", activity: "Rodadas de Negócios", icon: <Users className="w-5 h-5" /> },
    { time: "16h30", activity: "Coffee", icon: <Coffee className="w-5 h-5" /> },
    { time: "17h", activity: "Ateliê de Mesa Posta", icon: <Heart className="w-5 h-5" /> },
    { time: "19h", activity: "Jantar até 21h", icon: <Coffee className="w-5 h-5" /> }
  ];

  const day2Schedule = [
    { time: "9h30", activity: "Welcome Coffee", icon: <Coffee className="w-5 h-5" /> },
    { time: "10h", activity: "Início das Palestras", icon: <Lightbulb className="w-5 h-5" /> },
    { time: "13h", activity: "Almoço", icon: <Coffee className="w-5 h-5" /> },
    { time: "14h", activity: "Oficina Sensorial", icon: <Heart className="w-5 h-5" /> },
    { time: "15:30", activity: "Oficina Criativa", icon: <Lightbulb className="w-5 h-5" /> },
    { time: "16h", activity: "Montagem e decorações", icon: <Heart className="w-5 h-5" /> },
    { time: "", activity: "Técnicas de balões", icon: <Heart className="w-5 h-5" /> },
    { time: "19h", activity: "Encerramento", icon: <Users className="w-5 h-5" /> }
  ];

  return (
    <section id="agenda" className="py-20 bg-secondary-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-primary-300" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-tertiary-500 text-secondary-100 px-8 py-4 rounded-2xl shadow-lg mb-8">
            <h2 className="text-4xl md:text-5xl font-script">Agenda</h2>
          </div>
          
          {/* Calendar */}
          <div className="bg-background rounded-lg shadow-lg p-4 max-w-xs mx-auto mb-12">
            <div className="bg-tertiary-900 text-secondary-100 text-center py-2 rounded mb-2">
              <span className="font-bold">AUGUST 2025</span>
            </div>
            <div className="grid grid-cols-7 gap-1 text-sm">
              <div className="text-center p-1"></div>
              <div className="text-center p-1">1</div>
              <div className="text-center p-1">2</div>
              <div className="text-center p-1">3</div>
              <div className="text-center p-1">4</div>
              <div className="text-center p-1 bg-tertiary-500 text-secondary-100 rounded">5</div>
              <div className="text-center p-1 bg-tertiary-500 text-secondary-100 rounded">6</div>
              <div className="text-center p-1">7</div>
              <div className="text-center p-1">8</div>
              <div className="text-center p-1">9</div>
              <div className="text-center p-1">10</div>
              <div className="text-center p-1">11</div>
              <div className="text-center p-1">12</div>
              <div className="text-center p-1">13</div>
              <div className="text-center p-1">14</div>
              <div className="text-center p-1">15</div>
              <div className="text-center p-1">16</div>
              <div className="text-center p-1">17</div>
              <div className="text-center p-1">18</div>
              <div className="text-center p-1">19</div>
              <div className="text-center p-1">20</div>
              <div className="text-center p-1">21</div>
              <div className="text-center p-1">22</div>
              <div className="text-center p-1">23</div>
              <div className="text-center p-1">24</div>
              <div className="text-center p-1">25</div>
              <div className="text-center p-1">26</div>
              <div className="text-center p-1">27</div>
              <div className="text-center p-1">28</div>
              <div className="text-center p-1">29</div>
              <div className="text-center p-1">30</div>
              <div className="text-center p-1">31</div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Day 1 */}
          <div className="bg-primary-100 backdrop-blur-sm rounded-3xl p-8 shadow-xl relative">
            <div className="absolute top-4 left-4 w-6 h-6 bg-tertiary-500 rounded-full"></div>
            <div className="absolute top-4 right-4 w-12 h-12 bg-primary-300 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-tertiary-700" />
            </div>
            
            <h3 className="text-3xl font-bold text-font mb-6 text-center">Dia 1</h3>
            
            <div className="space-y-4">
              {day1Schedule.map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-background rounded-lg p-3">
                  <div className="w-12 h-12 bg-tertiary-500 rounded-full flex items-center justify-center text-secondary-100 font-bold flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-font">{item.time}</span>
                      <span className="text-neutral-700">{item.activity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Day 2 */}
          <div className="bg-primary-100 backdrop-blur-sm rounded-3xl p-8 shadow-xl relative">
            <div className="absolute top-4 left-4 w-6 h-6 bg-tertiary-500 rounded-full"></div>
            <div className="absolute top-4 right-4 w-12 h-12 bg-primary-300 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-tertiary-700" />
            </div>
            
            <h3 className="text-3xl font-bold text-font mb-6 text-center">Dia 2</h3>
            
            <div className="space-y-4">
              {day2Schedule.map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-background rounded-lg p-3">
                  <div className="w-12 h-12 bg-tertiary-500 rounded-full flex items-center justify-center text-secondary-100 font-bold flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-font">{item.time}</span>
                      <span className="text-neutral-700">{item.activity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-tertiary-500 text-secondary-100 px-8 py-4 rounded-full text-lg font-semibold hover:bg-tertiary-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Quero Participar
          </button>
        </div>
      </div>
    </section>
  );
}