import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TeamSection: React.FC = () => {
  const { scrollY } = useScroll();
  const ref = React.useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = React.useState(0);
  const [elementHeight, setElementHeight] = React.useState(0);

  React.useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setElementTop(rect.top + window.scrollY);
      setElementHeight(rect.height);
    }
  }, [ref]);

  const inputRange = [elementTop - window.innerHeight, elementTop + elementHeight];

  const rotateX = useTransform(scrollY, inputRange, [30, 0]);
  const translateZ = useTransform(scrollY, inputRange, [-200, 20]);

  return (
    <section  id="team-section" className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-xl font-light text-gray-600 mb-2">Schönheit in jedem Pinselstrich 🖌️✨</h2>
          <h3 className="text-4xl font-bold mb-4">Unser Team 🧑‍🤝‍🧑🏆</h3>
          <p className="text-gray-600 mb-8">
            Unser Team aus erfahrenen Nagelstylistinnen bietet Ihnen erstklassigen Service und individuelle Beratung. Lassen Sie sich von uns verwöhnen!
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2" ref={ref} style={{ perspective: 1000, willChange: 'transform' }}>
          
          {/* Team Member 1 */}
          <motion.div
            className="flex items-center border border-gray-700 p-6 rounded-[25px]"
            style={{ rotateX, translateZ, willChange: 'transform' }}
          >
            <div className="w-24 h-24 rounded-full bg-gray-200 mr-6 flex-shrink-0"></div>
            <div>
              <h4 className="text-xl font-bold">Anna Müller</h4>
              <p className="text-gray-600">Senior Nail Technician</p>
              <p className="text-gray-600 mt-2">
                Anna ist eine erfahrene Nageltechnikerin mit einer Leidenschaft für kreative Designs und Perfektion in jedem Detail.
              </p>
              <div className="flex mt-4 space-x-4">
                <a href="#" className="text-gray-600"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="text-gray-600"><i className="fas fa-times"></i></a>
                <a href="#" className="text-gray-600"><i className="fas fa-globe"></i></a>
              </div>
            </div>
          </motion.div>
          
          {/* Team Member 2 */}
          <motion.div
            className="flex items-center border border-gray-700 p-6 rounded-[25px]"
            style={{ rotateX, translateZ, willChange: 'transform' }}
          >
            <div className="w-24 h-24 rounded-full bg-gray-200 mr-6 flex-shrink-0"></div>
            <div>
              <h4 className="text-xl font-bold">Ben Schröder</h4>
              <p className="text-gray-600">Nail Artist</p>
              <p className="text-gray-600 mt-2">
                Ben bringt künstlerisches Flair in unser Studio und ist spezialisiert auf innovative und kreative Nageldesigns.
              </p>
              <div className="flex mt-4 space-x-4">
                <a href="#" className="text-gray-600"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="text-gray-600"><i className="fas fa-times"></i></a>
                <a href="#" className="text-gray-600"><i className="fas fa-globe"></i></a>
              </div>
            </div>
          </motion.div>
          
          {/* Team Member 3 */}
          <motion.div
            className="flex items-center border border-gray-700 p-6 rounded-[25px]"
            style={{ rotateX, translateZ, willChange: 'transform' }}
          >
            <div className="w-24 h-24 rounded-full bg-gray-200 mr-6 flex-shrink-0"></div>
            <div>
              <h4 className="text-xl font-bold">Clara Fischer</h4>
              <p className="text-gray-600">Junior Nail Technician</p>
              <p className="text-gray-600 mt-2">
                Clara ist bekannt für ihre sanfte Handhabung und ihre Fähigkeit, Nägel in wahre Kunstwerke zu verwandeln.
              </p>
              <div className="flex mt-4 space-x-4">
                <a href="#" className="text-gray-600"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="text-gray-600"><i className="fas fa-times"></i></a>
                <a href="#" className="text-gray-600"><i className="fas fa-globe"></i></a>
              </div>
            </div>
          </motion.div>
          
          {/* Team Member 4 */}
          <motion.div
            className="flex items-center border border-gray-700 p-6 rounded-[25px]"
            style={{ rotateX, translateZ, willChange: 'transform' }}
          >
            <div className="w-24 h-24 rounded-full bg-gray-200 mr-6 flex-shrink-0"></div>
            <div>
              <h4 className="text-xl font-bold">David Weber</h4>
              <p className="text-gray-600">Nail Specialist</p>
              <p className="text-gray-600 mt-2">
                David ist spezialisiert auf Nagelgesundheit und sorgt dafür, dass alle Kunden nicht nur schöne, sondern auch gesunde Nägel haben.
              </p>
              <div className="flex mt-4 space-x-4">
                <a href="#" className="text-gray-600"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="text-gray-600"><i className="fas fa-times"></i></a>
                <a href="#" className="text-gray-600"><i className="fas fa-globe"></i></a>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
