import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const WelcomeSection: React.FC = () => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: false });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50, filter: 'blur(1px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="md:w-1/2 p-6 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Willkommen in unserem
            <br />
            Nagelstudio, wo Schönheit <span className="inline-block">🌸</span> und Pflege <span className="inline-block">💆</span> im Mittelpunkt stehen.
          </h2>
          <p className="text-gray-700 font-light md:text-lg">
            Unser Nagelstudio bietet Ihnen professionelle Behandlungen und eine entspannte Atmosphäre, um Ihre Nägel zu verwöhnen und zu verschönern.
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="md:w-1/2 p-6 md:p-12"
        >
          <img src="/assets/studio.jpg" alt="Nail Studio" className="rounded-lg shadow-lg w-full h-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
