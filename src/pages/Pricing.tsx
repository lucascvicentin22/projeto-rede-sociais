import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const plans = [
  {
    id: 'basic',
    name: 'Básico',
    price: 'R$ 497',
    features: [
      'Gestão de 1 rede social',
      '3 posts por semana',
      'Relatório mensal',
      'Suporte por email'
    ]
  },
  {
    id: 'pro',
    name: 'Profissional',
    price: 'R$ 997',
    features: [
      'Gestão de 2 redes sociais',
      '5 posts por semana',
      'Relatórios semanais',
      'Suporte prioritário',
      'Estratégia personalizada'
    ]
  },
  {
    id: 'enterprise',
    name: 'Empresarial',
    price: 'R$ 1997',
    features: [
      'Gestão de 3 redes sociais',
      'Posts diários',
      'Relatórios em tempo real',
      'Suporte 24/7',
      'Estratégia personalizada',
      'Gestão de anúncios'
    ]
  }
];

const Pricing = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Escolha o Plano Ideal para Você
          </h2>
          <p className="text-xl text-gray-600">
            Preços transparentes, sem surpresas. Cancele quando quiser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold text-pink-500 mb-6">{plan.price}<span className="text-base font-normal text-gray-600">/mês</span></p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/checkout/${plan.id}`}
                  className="block w-full bg-pink-500 text-white text-center py-3 rounded-md hover:bg-pink-600 transition duration-300"
                >
                  Contratar Agora
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;