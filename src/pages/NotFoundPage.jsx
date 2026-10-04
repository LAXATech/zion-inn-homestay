import React from 'react';
import { Home, BedDouble, Camera, Phone, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFoundPage({ onNavigateHome, onNavigateRooms, onNavigateGallery, onNavigateContact }) {
  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#222623] pt-28 pb-24 px-4 sm:px-8 flex items-center justify-center">
      <SEO 
        title="Page Not Found | Zion Inn Homestay Neyyoor"
        description="The page you are looking for does not exist. Explore our rooms, gallery, or contact Zion Inn Homestay in Neyyoor."
        path="/404"
        noindex={true}
      />

      <div className="max-w-xl w-full text-center bg-white p-8 sm:p-12 rounded-3xl border border-[#EAE5DB] shadow-sm">
        <span className="font-editorial italic text-6xl sm:text-7xl text-[#3A4B3D] block mb-3">
          404
        </span>
        <h1 className="font-editorial text-3xl sm:text-4xl text-[#1F2421] font-medium mb-3">
          Sanctuary Not Found
        </h1>
        <p className="text-sm text-[#5D645E] leading-relaxed mb-8 max-w-md mx-auto">
          The page or path you followed doesn’t exist or has moved. Let’s guide you back to peaceful grounds.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-left">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F5F2EB] hover:bg-[#EAE5DB] text-[#1F2421] text-xs font-semibold transition-all cursor-pointer"
          >
            <Home className="w-4 h-4 text-[#3A4B3D]" />
            <span>Return to Homepage</span>
          </button>

          <button
            onClick={onNavigateRooms}
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F5F2EB] hover:bg-[#EAE5DB] text-[#1F2421] text-xs font-semibold transition-all cursor-pointer"
          >
            <BedDouble className="w-4 h-4 text-[#3A4B3D]" />
            <span>View Rooms & Rates</span>
          </button>

          <button
            onClick={onNavigateGallery}
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F5F2EB] hover:bg-[#EAE5DB] text-[#1F2421] text-xs font-semibold transition-all cursor-pointer"
          >
            <Camera className="w-4 h-4 text-[#3A4B3D]" />
            <span>Photo Gallery</span>
          </button>

          <button
            onClick={onNavigateContact}
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F5F2EB] hover:bg-[#EAE5DB] text-[#1F2421] text-xs font-semibold transition-all cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#3A4B3D]" />
            <span>Contact & Location</span>
          </button>
        </div>

        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3A4B3D] text-[#FBF9F5] text-xs font-semibold hover:bg-[#2D3B30] transition-colors cursor-pointer shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  );
}
