import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, TrendingUp, Users, Award } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Impulsione sua Presença nas Redes Sociais
            </h1>
            <p className="text-xl mb-8">
              Aumente seu alcance e engajamento com nossa gestão profissional de mídias sociais
            </p>
            <Link
              to="/pricing"
              className="bg-white text-pink-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Começar Agora
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <TrendingUp className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Crescimento Orgânico</h3>
              <p className="text-gray-600">
                Estratégias comprovadas para aumentar seu alcance de forma natural e sustentável
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Engajamento Real</h3>
              <p className="text-gray-600">
                Construa uma comunidade engajada com seguidores genuínos e interessados
              </p>
            </div>
            <div className="text-center p-6">
              <Award className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Resultados Garantidos</h3>
              <p className="text-gray-600">
                Acompanhamento detalhado e relatórios mensais de performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Redes Sociais que Gerenciamos</h2>
          <div className="flex justify-center space-x-12">
            <Instagram className="h-16 w-16 text-pink-500" />
            <Facebook className="h-16 w-16 text-blue-600" />
            <Twitter className="h-16 w-16 text-blue-400" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;