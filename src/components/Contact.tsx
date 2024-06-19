import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const Contact:React.FC = () =>  {

    return (
        <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-xl font-light text-gray-600 mb-2">Ihre Nägel, unser Kunstwerk 🖼️ 👩‍🎨</h2>
              <h3 className="text-4xl font-bold mb-4"> Kontaktieren Sie uns 📞</h3>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>

            <div>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-600" />
                <span className="font-bold">Email</span>
                <a href="mailto:hello@relume.io" className="ml-2 text-blue-500 hover:underline">hello@relume.io</a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2 text-gray-600" />
                <span className="font-bold">Phone</span>
                <a href="tel:+15550000000" className="ml-2 text-blue-500 hover:underline">+1 (555) 000-0000</a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-gray-600" />
                <span className="font-bold">Office</span>
                <p className="ml-2">123 Sample St, Sydney NSW 2000 AU</p>
              </li>
            </ul>
          </div>

          </div>
          <div className="mt-12">
            <div className="w-full h-80 bg-gray-200 rounded-[25px] flex items-center justify-center">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155422.44499100716!2d13.259929640818399!3d52.50672963842889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin!5e0!3m2!1sen!2sde!4v1718748046193!5m2!1sen!2sde" 
                className="w-full h-full rounded-[25px]" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Contact;