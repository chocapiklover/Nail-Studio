import React from "react";

const Contact:React.FC = () =>  {

    return (
        <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-xl font-light text-gray-600 mb-2">Ihre Nägel, unser Kunstwerk</h2>
              <h3 className="text-4xl font-bold mb-4">Kontaktieren Sie uns</h3>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="mr-2"><i className="fas fa-envelope"></i></span>
                  <span className="font-bold">Email</span>
                  <a href="mailto:hello@relume.io" className="ml-2 text-blue-500 hover:underline">hello@relume.io</a>
                </li>
                <li className="flex items-center">
                  <span className="mr-2"><i className="fas fa-phone-alt"></i></span>
                  <span className="font-bold">Phone</span>
                  <a href="tel:+15550000000" className="ml-2 text-blue-500 hover:underline">+1 (555) 000-0000</a>
                </li>
                <li className="flex items-center">
                  <span className="mr-2"><i className="fas fa-map-marker-alt"></i></span>
                  <span className="font-bold">Office</span>
                  <p className="ml-2">123 Sample St, Sydney NSW 2000 AU</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12">
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <i className="fas fa-map-marker-alt text-gray-500 text-6xl"></i>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Contact;