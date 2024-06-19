import React from 'react';
import { Link } from 'react-router-dom';

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Perfekt poliert</h2>
        <h3 className="text-3xl font-light mb-8 text-gray-600 ">Professionelle Nagelpflege und Design <span className="inline-block">💅🎨</span></h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:grid-rows-3 mx-2">
          
          {/* Box 1 with Box 4 inside */}
          <div className=" text-left md:col-span-2 md:row-span-2  border border-gray-700 w-full rounded-[25px] flex flex-col justify-between p-8">
            <div className='flex flex-col'>
              <h4 className="text-xl  font-bold mb-10">Perfektion bis ins kleinste Detail</h4>
              <h5 className="text-2xl sm:text-3xl xl:text-5xl lg:text-4xl font-bold mb-10">Unsere
                <br />  Hauptdienstleistungen</h5>
              <p className=" mb-4 font-light">Entdecken Sie unsere umfangreiche Auswahl an Maniküre,
                <br /> Pediküre und Nageldesign.</p>
              <div className="flex justify-between mb-2">
              <Link to="/contact" className="bg-pink-200 text-black py-3 px-8 rounded-full font-light text-lg md:text-xl transform hover:scale-125 transition-transform duration-300">
                Mehr Erfahren
              </Link>
            </div>
            </div>
            <div className=" h-2/3 rounded-lg">
              <img src="src/assets/studio2.jpg" alt="Nail Studio" className="w-full h-full object-cover rounded-[25px] "/>
            </div>
          </div>
          

          {/* Box 3 with Box 2 inside */}
          <div className="md:col-span-2 p-6 border border-gray-700 rounded-[25px] flex lg:flex-row-reverse flex-col justify-between h-full">
          <div className="lg:pl-6 flex flex-col justify-center text-left lg:w-3/5 w-full">
              <h4 className="text-xl font-bold mb-4">Qualität und Service</h4>
              <h5 className="text-3xl xl:text-5xl lg:text-4xl font-bold mb-4">Warum Sie uns wählen sollten</h5>
              <p className="font-light mb-4">Wir bieten Ihnen erstklassige Qualität und exzellenten Service.</p>
            </div>
            <div className="rounded-[25px] overflow-hidden lg:w-2/3 w-full">
              <img src="src/assets/polish.jpg" alt="Nail Polishes" className="w-full object-cover h-full rounded-[25px] mb-4"/>
            </div>
            
          </div>
          

            {/* Box 5 with Box 8 inside */}
            <div className=" text-left md:col-span-2 md:row-span-2  border border-gray-700 w-full rounded-[25px] flex flex-col justify-between p-8">
            <div className='flex flex-col'>
              <h4 className="text-xl  font-bold mb-10">Eleganz an Ihren Fingerspitzen</h4>
              <h5 className="text-3xl xl:text-5xl lg:text-4xl font-bold mb-10">Schöne Nägel,
                <br /> glückliches Leben</h5>
              <p className=" mb-4 font-light">Erleben Sie exklusive Nagelpflege und personalisierte 
                <br /> Behandlungen in unserem Studio.</p>
              <div className="flex justify-between mb-2">
              <Link to="/contact" className="bg-pink-200 text-black py-3 px-8 rounded-full font-light text-lg md:text-xl transform hover:scale-125 transition-transform duration-300">
                Jetzt Buchen
              </Link>
            </div>
            </div>
            <div className=" h-2/3 rounded-lg">
              <img src="src/assets/studio2.jpg" alt="Nail Studio" className="w-full h-full object-cover rounded-[25px] "/>
            </div>
          </div>

          {/* Box 6 */}
          <div className="md:col-span-2 p-6 border border-gray-700 rounded-[25px] flex flex-col h-full justify-between">
            <div>
              <h4 className="text-3xl xl:text-5xl lg:text-4xl text-left font-bold mb-2 2xl:pt-10">Unsere
                <br /> Preise</h4>
              <p className="mb-4 font-light mt-10 text-left">Verwöhnen Sie sich mit unseren zusätzlichen Behandlungen.</p>
            </div>
            <div className="flex justify-between mt-11">
              <Link to="/contact" className="bg-pink-200 text-black py-3 px-8 rounded-full font-light text-lg md:text-xl transform hover:scale-125 transition-transform duration-300">
                Mehr Erfahren
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
