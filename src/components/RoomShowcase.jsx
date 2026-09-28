import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { subtleFadeUp } from '../utils/animations';

export default function RoomShowcase({ rooms, onSelectRoom, onQuickInquire, onViewAllRooms }) {
  return (
    <section id="rooms" className="px-4 sm:px-8 max-w-7xl mx-auto py-12 sm:py-20 border-t border-[#EAE5DB]/60">
      {/* Section Header */}
      <motion.div 
        className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={subtleFadeUp}
      >
        <div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1F2421]">
            Our Rooms
          </h2>
        </div>

        <button 
          onClick={onViewAllRooms}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3A4B3D] hover:text-[#2D3B30] mt-3 sm:mt-0 group cursor-pointer"
        >
          <span>Explore all room details & specs</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
        </button>
      </motion.div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {rooms.map((room, index) => (
          <motion.div
            key={room.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1.0] }
              }
            }}
            className="flex flex-col bg-white rounded-3xl overflow-hidden border border-[#EAE5DB] shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer text-left"
            onClick={() => onSelectRoom(room)}
          >
            {/* Room Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#EAE5DB]/40">
              <img 
                src={room.image} 
                alt={room.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                loading="lazy"
              />
              {/* Availability badge */}
              <div className="absolute top-3.5 left-3.5">
                <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide backdrop-blur-xs shadow-xs ${
                  room.status === 'Available'
                    ? 'bg-emerald-600/90 text-white'
                    : room.status === 'Limited'
                    ? 'bg-amber-600/90 text-white'
                    : 'bg-stone-700/90 text-white'
                }`}>
                  {room.status}
                </span>
              </div>

              {/* View tag */}
              <div className="absolute bottom-3 right-3 glass-panel px-2.5 py-0.5 rounded-full text-[11px] font-medium text-[#1F2421]">
                {room.size || 'Spacious'}
              </div>
            </div>

            {/* Room Details */}
            <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-editorial text-2xl font-medium text-[#1F2421] mb-1">
                  {room.name}
                </h3>
                <p className="text-xs text-[#5D645E] font-medium tracking-wide">
                  {room.view} • {room.capacity} Guests
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAE5DB]/80 flex flex-col gap-3">
                <div className="flex items-baseline gap-1 text-[#1F2421]">
                  <span className="font-editorial text-2xl font-semibold">
                    ₹{room.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-[#5D645E]">/ night</span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onQuickInquire(room);
                  }}
                  className="w-full py-2.5 rounded-full bg-[#3A4B3D] text-[#FBF9F5] text-xs sm:text-sm font-medium hover:bg-[#2D3B30] active:scale-[0.98] transition-all duration-200 text-center shadow-xs"
                >
                  Quick Inquire
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
