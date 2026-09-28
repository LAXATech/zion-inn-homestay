import React from 'react';
import { motion } from 'framer-motion';
import { subtleFadeUp } from '../utils/animations';

export default function AboutSpace({ onOpenStory }) {
  return (
    <section id="about" className="px-4 sm:px-8 max-w-7xl mx-auto py-12 sm:py-20 border-t border-[#EAE5DB]/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Description */}
        <motion.div 
          className="lg:col-span-6 flex flex-col items-start text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={subtleFadeUp}
        >

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1F2421] leading-[1.15] mb-6">
            More than just a stay, it's a feeling.
          </h2>

          <p className="text-base sm:text-lg text-[#5D645E] leading-relaxed mb-8">
            Zion Inn is a peaceful homestay in Neyyoor, crafted for travelers who love calm, comfort and a personal touch. Located close to Eraniel, it's the perfect stop for families, friends and explorers looking for a home away from home.
          </p>

          <button
            onClick={onOpenStory}
            className="px-6 py-2.5 rounded-full border border-[#3A4B3D] text-[#3A4B3D] text-sm font-medium hover:bg-[#3A4B3D] hover:text-[#FBF9F5] active:scale-[0.98] transition-all duration-200"
          >
            Our Story
          </button>
        </motion.div>

        {/* Right Column: Image with Typography Overlay */}
        <motion.div 
          className="lg:col-span-6 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={subtleFadeUp}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#EAE5DB] bg-[#EAE5DB]/30 aspect-[4/3] group">
            <img 
              src="/images/the-space.jpg" 
              alt="Zion Inn veranda and garden courtyard" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              loading="lazy"
            />
            {/* Subtle Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/20 pointer-events-none" />

            {/* Typography Overlay: Peaceful / Comfortable / Personal */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 glass-panel px-5 py-4 rounded-2xl shadow-md border border-[#EAE5DB] text-right pointer-events-none">
              <span className="font-editorial italic text-lg sm:text-xl text-[#1F2421] block leading-tight">
                Peaceful
              </span>
              <span className="font-editorial italic text-lg sm:text-xl text-[#1F2421] block leading-tight mt-1">
                Comfortable
              </span>
              <span className="font-editorial italic text-lg sm:text-xl text-[#1F2421] block leading-tight mt-1">
                Personal
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
