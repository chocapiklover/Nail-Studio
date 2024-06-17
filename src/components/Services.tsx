import React from 'react';
import { Link } from 'react-router-dom';

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Perfekt poliert</h2>
        <h3 className="text-3xl font-semibold mb-8">Professionelle Nagelpflege und Design <span className="inline-block">💅🎨</span></h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:grid-rows-6 auto-rows-auto mx-2">
          
          {/* Box 1 with Box 4 inside */}
          <div className=" text-left md:col-span-2 md:row-span-2  border border-gray-700 w-full rounded-[25px] flex flex-col justify-between p-8">
            <div className='flex flex-col'>
              <h4 className="text-xl  font-bold mb-10">Perfektion bis ins kleinste Detail</h4>
              <h5 className="text-3xl xl:text-5xl lg:text-4xl font-bold mb-10">Unsere
                <br />  Hauptdienstleistungen</h5>
              <p className=" mb-4 font-light">Entdecken Sie unsere umfangreiche Auswahl an Maniküre,
                <br /> Pediküre und Nageldesign.</p>
              <div className="flex justify-between mb-2">
              <Link to="/contact" className="bg-pink-200 text-black py-3 px-8 rounded-full font-light text-lg md:text-xl">
                Mehr Erfahren
              </Link>
            </div>
            </div>
            <div className=" h-2/3 rounded-lg">
              <img src="src/assets/studio2.jpg" alt="Nail Studio" className="w-full h-full object-cover rounded-[25px] "/>
            </div>
          </div>
          

          {/* Box 3 with Box 2 inside */}
          <div className= " md:col-span-2 p-6 border border-gray-700  rounded-[25px] flex flex-row justify-between h-full">
            
            <div className=" rounded-[25px] overflow-hidden">
              <img src="src/assets/product.jpg" alt="Nail Polishes" className="w-full object-scale-down h-auto rounded-[25px] mb-4 "/>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Qualität und Service</h4>
              <h5 className="text-2xl font-bold mb-4">Warum Sie uns wählen sollten</h5>
              <p className="text-gray-600 mb-4">Wir bieten Ihnen erstklassige Qualität und exzellenten Service.</p>
            </div>

          </div>
          

            {/* Box 5 with Box 8 inside */}
          <div className="md:col-span-2 row-span-2 p-6 border border-gray-700  rounded-[25px]">
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold mb-2">Eleganz an Ihren Fingerspitzen</h4>
                <h5 className="text-2xl font-bold mb-4">Schöne Nägel, glückliches Leben</h5>
                <p className="text-gray-600 mb-4">Erleben Sie exklusive Nagelpflege und personalisierte Behandlungen in unserem Studio.</p>
              </div>
              <Link to="/" className="text-blue-500 hover:underline flex items-center mb-4">
                Jetzt Buchen <span className="ml-1">→</span>
              </Link>
            </div>
            <div className="p-6 border rounded-lg mt-4">
              <img src="src/assets/nails.jpg" alt="Nails" className="w-full h-auto rounded-lg mb-4"/>
            </div>
          </div>

          {/* Box 6 */}
          <div className="p-6 border border-gray-700  rounded-[25px] flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-bold mb-2">Unsere Spezialdienstleistungen</h4>
              <p className="text-gray-600 mb-4">Verwöhnen Sie sich mit unseren zusätzlichen Behandlungen.</p>
            </div>
            <Link to="/" className="text-blue-500 hover:underline flex items-center">
              Button <span className="ml-1">→</span>
            </Link>
          </div>
          
          {/* Box 7 */}
          <div className="p-6 border border-gray-700  rounded-[25px] flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-bold mb-2">Unsere Preise</h4>
              <p className="text-gray-600 mb-4">Erfahren Sie mehr über unsere Preisgestaltung.</p>
            </div>
            <Link to="/" className="text-blue-500 hover:underline flex items-center">
              Button <span className="ml-1">→</span>
            </Link>
          </div>
          
          
          
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
