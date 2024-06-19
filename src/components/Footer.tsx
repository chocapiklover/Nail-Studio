import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <div className="text-lg font-bold">Logo</div>
        </div>
        <div className="mb-4 flex justify-center space-x-6">
          <Link to="/" className="text-black">Facebook</Link>
          <Link to="/" className="text-black">Instagram</Link>
          <Link to="/" className="text-black">Twitter</Link>
        </div>
        <div className="border-t border-gray-300 py-4">
          <div className="flex justify-between items-center text-sm text-gray-600">
            
            <div className="flex space-x-4">
              <Link to="/" className="hover:underline">AGB</Link>
              <Link to="/" className="hover:underline">Daten Schutz</Link>
              <Link to="/" className="hover:underline">Impressum</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;