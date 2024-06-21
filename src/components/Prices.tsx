import React, { useRef, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {  motion, useAnimation, useInView } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(3px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

const contentVariants = {
  hidden: { opacity: 0, y: 50, filter: 'blur(2px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.3, ease: 'easeOut', delay: 0.4, delayChildren: 0.4, staggerChildren: 0.4,},
  },
};

interface ContentBlockProps {
  children: ReactNode;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={contentVariants}>
      {children}
    </motion.div>
  );
};

const Prices: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  return (
    <section className="bg-white py-12">
      <motion.div
        className="container mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        <motion.h2 className="text-4xl font-bold mb-4" variants={itemVariants}>Perfekt poliert</motion.h2>
        <motion.h3 className="text-3xl font-light mb-8 text-gray-600" variants={itemVariants}>
          Professionelle Nagelpflege und Design <span className="inline-block">💅🎨</span>
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:grid-rows-3 mx-2">
          
          <motion.div
            className="text-left md:col-span-2 md:row-span-2 border border-gray-700 w-full rounded-[25px] flex flex-col justify-between p-8"
            variants={itemVariants}
          >
            <ContentBlock>
              <div className='flex flex-col'>
                <h4 className="text-xl font-bold mb-10">Perfektion bis ins kleinste Detail</h4>
                <h5 className="text-2xl sm:text-3xl xl:text-5xl lg:text-4xl font-bold mb-10">Unsere<br /> Hauptdienstleistungen</h5>
                <p className="mb-4 font-light">Entdecken Sie unsere umfangreiche Auswahl an Maniküre,<br /> Pediküre und Nageldesign.</p>
                <div className="flex justify-between mb-2">
                  <Link to="/contact" className="bg-pink-200 text-black py-3 px-8 rounded-full font-light text-lg md:text-xl transform hover:scale-125 transition-transform duration-300">
                    Jetzt Buchen
                  </Link>
                </div>
              
            <div className="h-2/3 rounded-lg">
              <img src="/assets/studio2.jpg" alt="Nail Studio" className="w-full h-full object-cover rounded-[25px]" />
            </div>
            </div>
            </ContentBlock>
          </motion.div>

          <motion.div
            className="md:col-span-2 p-6 border border-gray-700 rounded-[25px] flex lg:flex-row-reverse flex-col justify-between h-full"
            variants={itemVariants}
          >
            <ContentBlock>
              <div className="lg:pl-6 flex flex-col text-left lg:w-3/5 w-full">
                <h4 className="text-4xl font-bold mb-4">Manicures</h4>
                <ul className="font-light mb-4 space-y-9">
                  <li>Basic manicure  <br /> <span className="text-pink-300 font-bold mt-10">€20</span></li>
                  <li>French manicure  <br /> <span className="text-pink-300 font-bold mt-10">€25</span></li>
                  <li>Gel manicure  <br /> <span className="text-pink-300 font-bold mt-10">€30</span></li>
                  <li>Paraffin manicure  <br /> <span className="text-pink-300 font-bold mt-10">€35</span></li>
                  <li>Spa manicure  <br /> <span className="text-pink-300 font-bold mt-10">€40</span></li>
                </ul>
              
            <div className="rounded-[25px] overflow-hidden lg:w-2/3 w-full">
              <img src="/assets/manicure.jpg" alt="Manicure" className="w-full object-cover h-full rounded-[25px] mb-4 shadow-md" />
            </div>
            </div>
            </ContentBlock>
          </motion.div>

          <motion.div
            className="md:col-span-2 p-6 border border-gray-700 rounded-[25px] flex lg:flex-row-reverse flex-col justify-between h-full"
            variants={itemVariants}
          >
            <ContentBlock>
              <div className="lg:pl-6 flex flex-col text-left lg:w-3/5 w-full">
                <h4 className="text-4xl font-bold mb-4">Pedicures</h4>
                <ul className="font-light mb-4 space-y-9">
                  <li>Basic pedicure  <br /> <span className="text-pink-300 font-bold mt-10">€25</span></li>
                  <li>French pedicure  <br /> <span className="text-pink-300 font-bold mt-10">€30</span></li>
                  <li>Gel pedicure  <br /> <span className="text-pink-300 font-bold mt-10">€35</span></li>
                  <li>Paraffin pedicure  <br /> <span className="text-pink-300 font-bold mt-10">€40</span></li>
                  <li>Spa pedicure  <br /> <span className="text-pink-300 font-bold mt-10">€45</span></li>
                </ul>
              
            <div className="rounded-[25px] overflow-hidden lg:w-2/3 w-full">
              <img src="/assets/pedicure.jpg" alt="Pedicure" className="w-full object-cover h-full rounded-[25px] mb-4 shadow-md" />
            </div>
            </div>
            </ContentBlock>
          </motion.div>

          <motion.div
            className="md:col-span-2 p-6 border border-gray-700 rounded-[25px] flex lg:flex-row-reverse flex-col justify-between h-full"
            variants={itemVariants}
          >
            <ContentBlock>
              <div className="lg:pl-6 flex flex-col text-left lg:w-3/5 w-full">
                <h4 className="text-4xl font-bold mb-4">Nail Enhancements</h4>
                <ul className="font-light mb-4 space-y-9">
                  <li>Acrylic nails  <br /> <span className="text-pink-300 font-bold mt-10">€40</span></li>
                  <li>Gel nails  <br /> <span className="text-pink-300 font-bold mt-10">€45</span></li>
                  <li>Dip powder nails  <br /> <span className="text-pink-300 font-bold mt-10">€50</span></li>
                  <li>Nail extensions  <br /> <span className="text-pink-300 font-bold mt-10">€55</span></li>
                  <li>Nail overlays  <br /> <span className="text-pink-300 font-bold mt-10">€35</span></li>
                </ul>
              
            <div className="rounded-[25px] overflow-hidden lg:w-2/3 w-full">
              <img src="/assets/nail-enhancements.jpg" alt="Nail Enhancements" className="w-full object-cover h-full rounded-[25px] mb-4 shadow-md" />
            </div>
            </div>
            </ContentBlock>
          </motion.div>

          <motion.div
            className="md:col-span-2 p-6 border border-gray-700 rounded-[25px] flex lg:flex-row-reverse flex-col justify-between h-full"
            variants={itemVariants}
          >
            <ContentBlock>
              <div className="lg:pl-6 flex flex-col text-left lg:w-3/5 w-full">
                <h4 className="text-4xl font-bold mb-4">Nail Art</h4>
                <ul className="font-light mb-4 space-y-9">
                  <li>Hand-painted designs  <br /> <span className="text-pink-300 font-bold mt-10">€10+</span></li>
                  <li>Stamping  <br /> <span className="text-pink-300 font-bold mt-10">€5+</span></li>
                  <li>Stickers and decals  <br /> <span className="text-pink-300 font-bold mt-10">€5+</span></li>
                  <li>Rhinestones and embellishments  <br /> <span className="text-pink-300 font-bold mt-10">€5+</span></li>
                  <li>3D nail art  <br /> <span className="text-pink-300 font-bold mt-10">€10+</span></li>
                </ul>
              
            <div className="rounded-[25px] overflow-hidden lg:w-2/3 w-full">
              <img src="/assets/nail-art.jpg" alt="Nail Art" className="w-full object-cover h-full rounded-[25px] mb-4 shadow-md" />
            </div>
            </div>
            </ContentBlock>
          </motion.div>

          <motion.div
            className="md:col-span-2 p-6 border border-gray-700 rounded-[25px] flex lg:flex-row-reverse flex-col justify-between h-full"
            variants={itemVariants}
          >
            <ContentBlock>
              <div className="lg:pl-6 flex flex-col text-left lg:w-3/5 w-full">
                <h4 className="text-4xl font-bold mb-4">Nail Repair and Maintenance</h4>
                <ul className="font-light mb-4 space-y-9">
                  <li>Nail repair  <br /> <span className="text-pink-300 font-bold mt-10">€10+</span></li>
                  <li>Cuticle care  <br /> <span className="text-pink-300 font-bold mt-10">€15</span></li>
                  <li>Nail trimming and shaping  <br /> <span className="text-pink-300 font-bold mt-10">€15</span></li>
                  <li>Callus removal  <br /> <span className="text-pink-300 font-bold mt-10">€20</span></li>
                  <li>Nail buffing and polishing  <br /> <span className="text-pink-300 font-bold mt-10">€10</span></li>
                </ul>
              
            <div className="rounded-[25px] overflow-hidden lg:w-2/3 w-full">
              <img src="/assets/nail-repair.jpg" alt="Nail Repair and Maintenance" className="w-full object-cover h-full rounded-[25px] mb-4 shadow-md" />
            </div>
            </div>
            </ContentBlock>
          </motion.div>

        

        </div>
      </motion.div>
    </section>
  );
};

export default Prices;
