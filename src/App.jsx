import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MobileNavDrawer from './components/MobileNavDrawer';
import Hero from './components/Hero';
import AboutSpace from './components/AboutSpace';
import RoomShowcase from './components/RoomShowcase';
import RoomDetailDrawer from './components/RoomDetailDrawer';
import Amenities from './components/Amenities';
import SurroundingGuide from './components/SurroundingGuide';
import BookingContact from './components/BookingContact';
import MobileStickyBar from './components/MobileStickyBar';
import OwnerCMSModal from './components/OwnerCMSModal';
import StoryModal from './components/StoryModal';
import Footer from './components/Footer';
import RoomsPage from './pages/RoomsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

import { INITIAL_ROOMS } from './data/homestayData';

export default function App() {
  // Page routing state ('home' | 'rooms' | 'gallery' | 'contact')
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash === '#/rooms' || hash === '#rooms-page') return 'rooms';
      if (hash === '#/gallery' || hash === '#gallery-page') return 'gallery';
      if (hash === '#/contact' || hash === '#contact-page') return 'contact';
    }
    return 'home';
  });

  // Load room states with persistence (supports direct owner edits & CMS)
  const [rooms, setRooms] = useState(() => {
    const saved = localStorage.getItem('zion_inn_rooms');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_ROOMS;
      }
    }
    return INITIAL_ROOMS;
  });

  // Booking parameters
  const [checkInDate, setCheckInDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 7);
    return today.toISOString().split('T')[0];
  });
  const [checkOutDate, setCheckOutDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 9);
    return today.toISOString().split('T')[0];
  });
  const [guestCount, setGuestCount] = useState(2);

  // Modals & Drawers state
  const [selectedRoomForDrawer, setSelectedRoomForDrawer] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCMSOpen, setIsCMSOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  // Listen to browser hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/rooms' || hash === '#rooms-page') {
        setCurrentPage('rooms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/gallery' || hash === '#gallery-page') {
        setCurrentPage('gallery');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/contact' || hash === '#contact-page') {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/' || hash === '' || hash.startsWith('#home')) {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Navigation handler
  const handleNavigate = (page, targetSectionId = null) => {
    setCurrentPage(page);
    if (page === 'rooms') {
      window.location.hash = '#/rooms';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'gallery') {
      window.location.hash = '#/gallery';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'contact') {
      window.location.hash = '#/contact';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (targetSectionId) {
        window.location.hash = `#${targetSectionId}`;
        setTimeout(() => {
          handleScrollToSection(targetSectionId);
        }, 80);
      } else {
        window.location.hash = '#/';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // Persistence handler
  const handleUpdateRooms = (newRooms) => {
    setRooms(newRooms);
    localStorage.setItem('zion_inn_rooms', JSON.stringify(newRooms));
  };

  const handleResetRooms = () => {
    setRooms(INITIAL_ROOMS);
    localStorage.removeItem('zion_inn_rooms');
  };

  // Scroll to booking or rooms
  const handleScrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCheckAvailability = () => {
    handleNavigate('rooms');
  };

  const handleBookStayClick = () => {
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#222623] flex flex-col justify-between selection:bg-[#3A4B3D]/15 selection:text-[#1F2421]">
      {/* Top Navigation */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onBookStayClick={handleBookStayClick}
        onOpenCMS={() => setIsCMSOpen(true)}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {/* Mobile Drawer */}
      <MobileNavDrawer 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onBookStayClick={handleBookStayClick}
        onOpenCMS={() => setIsCMSOpen(true)}
      />

      {/* Main Content Sections: Conditionally render Rooms, Gallery, Contact, or Homepage */}
      <main className="flex-1 w-full">
        {currentPage === 'rooms' && (
          <RoomsPage 
            rooms={rooms}
            onSelectRoom={(room) => setSelectedRoomForDrawer(room)}
            onNavigateHome={() => handleNavigate('home')}
            checkInDate={checkInDate}
            setCheckInDate={setCheckInDate}
            checkOutDate={checkOutDate}
            setCheckOutDate={setCheckOutDate}
            guestCount={guestCount}
            setGuestCount={setGuestCount}
            onOpenCMS={() => setIsCMSOpen(true)}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage 
            onNavigateHome={() => handleNavigate('home')}
            onNavigateRooms={() => handleNavigate('rooms')}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage 
            onNavigateHome={() => handleNavigate('home')}
            onNavigateRooms={() => handleNavigate('rooms')}
            checkInDate={checkInDate}
            setCheckInDate={setCheckInDate}
            checkOutDate={checkOutDate}
            setCheckOutDate={setCheckOutDate}
            guestCount={guestCount}
            setGuestCount={setGuestCount}
          />
        )}

        {currentPage === 'home' && (
          <>
            {/* Hero Section */}
            <Hero 
              checkInDate={checkInDate}
              setCheckInDate={setCheckInDate}
              checkOutDate={checkOutDate}
              setCheckOutDate={setCheckOutDate}
              guestCount={guestCount}
              setGuestCount={setGuestCount}
              onCheckAvailability={handleCheckAvailability}
            />

            {/* 01. The Space Section */}
            <AboutSpace onOpenStory={() => setIsStoryOpen(true)} />

            {/* 04. Room Showcase Section */}
            <RoomShowcase 
              rooms={rooms}
              onSelectRoom={(room) => setSelectedRoomForDrawer(room)}
              onQuickInquire={(room) => setSelectedRoomForDrawer(room)}
              onViewAllRooms={() => handleNavigate('rooms')}
            />

            {/* 05. Amenities Section */}
            <Amenities />

            {/* 06. Surrounding Guide Section */}
            <SurroundingGuide />

            {/* 07. Booking & Contact Section */}
            <BookingContact 
              rooms={rooms}
              selectedRoom={selectedRoomForDrawer}
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
              guestCount={guestCount}
            />
          </>
        )}
      </main>

      {/* Room Detail Drawer */}
      <RoomDetailDrawer 
        room={selectedRoomForDrawer}
        isOpen={Boolean(selectedRoomForDrawer)}
        onClose={() => setSelectedRoomForDrawer(null)}
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
        guestCount={guestCount}
      />

      {/* Owner Rates & Availability CMS Modal */}
      <OwnerCMSModal 
        isOpen={isCMSOpen}
        onClose={() => setIsCMSOpen(false)}
        rooms={rooms}
        onUpdateRooms={handleUpdateRooms}
        onResetRooms={handleResetRooms}
      />

      {/* Homestay Story Modal */}
      <StoryModal 
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
      />

      {/* Mobile Sticky Action Bar (< 768px) */}
      <MobileStickyBar />

      {/* Footer */}
      <Footer onOpenCMS={() => setIsCMSOpen(true)} onNavigate={handleNavigate} />
    </div>
  );
}
