import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/homestayData';

export default function MobileStickyBar({ onOpenWhatsAppBooking }) {
  const handleCall = () => {
    window.location.href = `tel:${CONTACT_INFO.phone1Raw}`;
  };

  const handleWhatsApp = () => {
    if (onOpenWhatsAppBooking) {
      onOpenWhatsAppBooking();
    } else {
      const msg = encodeURIComponent("Hi Zion Inn, I'd like to check room availability.");
      window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${msg}`, '_blank');
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-[#EAE5DB] shadow-lg">
      <div className="flex items-center gap-3 max-w-md mx-auto">
        <button
          onClick={handleCall}
          className="flex-1 py-3 px-4 rounded-full border border-[#EAE5DB] bg-[#F5F2EB] text-[#1F2421] text-xs font-semibold hover:bg-[#EAE5DB] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xs"
        >
          <Phone className="w-4 h-4 text-[#3A4B3D]" strokeWidth={1.5} />
          <span>Call Host</span>
        </button>

        <button
          onClick={handleWhatsApp}
          className="flex-1 py-3 px-4 rounded-full bg-[#3A4B3D] text-[#FBF9F5] text-xs font-semibold hover:bg-[#2D3B30] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" strokeWidth={1.5} />
          <span>WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
