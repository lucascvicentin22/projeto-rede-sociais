import React from 'react';
import { Instagram, Facebook, Twitter, Camera, Video, BarChart } from 'lucide-react';

const Services = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600">
            Soluções completas para sua presença digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-pink-500 mb-4">
              <Camera className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Produção de Conteúdo</h3>
            <p className="text-gray-600">
              Criação de conteúdo original e envolvente para suas redes sociais,
              incluindo fotos, textos e designs personalizados.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-pink-500 mb-4">
              <Video className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Gestão de Redes Sociais</h3>
            <p className="text-gray-600">
              Administração completa das suas redes sociais, incluindo postagens,
              interação com seguidores e monitoramento.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-pink-500 mb-4">
              <BarChart className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Análise e Relatórios</h3>
            <p className="text-gray-600">
              Acompanhamento detalhado de métricas e resultados, com relatórios
              periódicos sobre o desempenho das suas redes.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">
            Plataformas que Trabalhamos
          </h3>
          <div className="flex justify-center space-x-12">
            <div className="text-center">
              <Instagram className="h-16 w-16 text-pink-500 mb-2" />
              <p className="text-gray-600">Instagram</p>
            </div>
            <div className="text-center">
              <Facebook className="h-16 w-16 text-blue-600 mb-2" />
              <p className="text-gray-600">Facebook</p>
            </div>
            <div className="text-center">
              <Twitter className="h-16 w-16 text-blue-400 mb-2" />
              <p className="text-gray-600">Twitter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;