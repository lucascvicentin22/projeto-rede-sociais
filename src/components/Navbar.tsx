import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Instagram className="h-8 w-8 text-pink-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">SocialPro</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-gray-600 hover:text-pink-500">Serviços</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-pink-500">Preços</Link>
            <Link to="/contact" className="text-gray-600 hover:text-pink-500">Contato</Link>
            <Link to="/pricing" className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">
              Começar Agora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-pink-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/services"
              className="block px-3 py-2 text-gray-600 hover:text-pink-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link
              to="/pricing"
              className="block px-3 py-2 text-gray-600 hover:text-pink-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Preços
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-600 hover:text-pink-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <Link
              to="/pricing"
              className="block px-3 py-2 bg-pink-500 text-white rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Começar Agora
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;