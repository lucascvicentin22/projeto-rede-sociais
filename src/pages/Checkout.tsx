import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

// For development, we'll use a test publishable key
const stripePromise = loadStripe('pk_test_51O4YgYBRZFykTz0QGiXWPe9KHFWPAEqQw6Rj5N4S8jxUNqx5vQqzXB2LhUwPTEJKqxRUzxkwJTJbq5JYQ5JYw00X2Z0qxRU');

const PLAN_PRICES = {
  basic: 'price_H5ggYwtDq4fX9m',
  pro: 'price_H5ggYwtDq4fX9n',
  enterprise: 'price_H5ggYwtDq4fX9o'
};

const Checkout = () => {
  const { planId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!planId || !PLAN_PRICES[planId as keyof typeof PLAN_PRICES]) {
      setError('Plano inválido selecionado');
      setLoading(false);
      return;
    }

    try {
      // In a real application, this would be your backend API endpoint
      // For now, we'll redirect to the pricing page if there's an error
      const stripe = await stripePromise;
      
      if (!stripe) {
        throw new Error('Não foi possível inicializar o Stripe');
      }

      // Redirect to pricing page for now
      // In production, you would create a checkout session with your backend
      navigate('/pricing');
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocorreu um erro ao processar o pagamento');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!planId || !PLAN_PRICES[planId as keyof typeof PLAN_PRICES]) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Plano não encontrado</h2>
          <p className="text-gray-600 mb-6">
            O plano selecionado não está disponível. Por favor, escolha um plano válido.
          </p>
          <button
            onClick={() => navigate('/pricing')}
            className="w-full bg-pink-500 text-white py-3 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          >
            Voltar para Planos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Finalizar Contratação</h2>
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-pink-500 text-white py-3 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {loading ? 'Processando...' : 'Prosseguir para Pagamento'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;