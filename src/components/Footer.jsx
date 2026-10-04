import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/homestayData';

export default function Footer({ onNavigate }) {
  const handleFooterLink = (e, page, targetHash) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page, targetHash);
    }
  };

  return (
    <footer className="w-full bg-[#354336] text-[#FBF9F5] pt-12 pb-24 md:pb-12 mt-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3">
            <img 
              src="/images/logo.png" 
              alt="Zion Inn Homestay" 
              className="w-8 h-7 object-contain brightness-0 invert opacity-90"
            />
            <div className="text-left">
              <span className="font-editorial text-lg font-semibold tracking-wider block leading-none uppercase">
                Zion Inn
              </span>
              <span className="text-[9px] tracking-widest uppercase opacity-75">
                Homestay
              </span>
            </div>
          </div>

          {/* Center Editorial Quote */}
          <div className="text-center">
            <p className="font-editorial italic text-base sm:text-lg text-white/90">
              Stay. Relax. Feel at Home.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-6 text-xs sm:text-sm font-medium text-white/80">
            <button 
              type="button"
              onClick={(e) => handleFooterLink(e, 'home', null)} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <button 
              type="button"
              onClick={(e) => handleFooterLink(e, 'rooms', null)} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Rooms
            </button>
            <button 
              type="button"
              onClick={(e) => handleFooterLink(e, 'gallery', null)} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Gallery
            </button>
            <button 
              type="button"
              onClick={(e) => handleFooterLink(e, 'contact', null)} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} Zion Inn Homestay. All rights reserved. Neyyoor, Kanyakumari.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-white/75">
            {/* WhatsApp */}
            <a 
              href={`https://api.whatsapp.com/send?phone=${CONTACT_INFO.whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="WhatsApp"
              className="hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>

            {/* YouTube */}
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="YouTube"
              className="hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
