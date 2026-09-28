import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Save, 
  RotateCcw, 
  Database, 
  Check, 
  SlidersHorizontal, 
  KeyRound, 
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { modalTransition } from '../utils/animations';

export default function OwnerCMSModal({ 
  isOpen, 
  onClose, 
  rooms, 
  onUpdateRooms, 
  onResetRooms 
}) {
  const [editedRooms, setEditedRooms] = useState(rooms);
  const [showSupabaseInfo, setShowSupabaseInfo] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handlePriceChange = (roomId, newPrice) => {
    setEditedRooms(prev => prev.map(r => {
      if (r.id === roomId) {
        return { ...r, price: Number(newPrice) || 0 };
      }
      return r;
    }));
  };

  const handleStatusChange = (roomId, newStatus) => {
    setEditedRooms(prev => prev.map(r => {
      if (r.id === roomId) {
        return { ...r, status: newStatus };
      }
      return r;
    }));
  };

  const handleSave = () => {
    onUpdateRooms(editedRooms);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1000);
  };

  const handleReset = () => {
    onResetRooms();
    onClose();
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm p-4 sm:p-6"
        onClick={onClose}
      >
        <div className="min-h-full flex items-center justify-center py-6 sm:py-10">
          <motion.div
            variants={modalTransition}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FBF9F5] max-w-2xl w-full rounded-3xl overflow-hidden border border-[#EAE5DB] shadow-2xl p-5 sm:p-8 text-left my-auto"
          >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#EAE5DB]">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#3A4B3D]/10 text-[#3A4B3D]">
                <SlidersHorizontal className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#5D645E] font-semibold">
                  Owner Management CMS
                </span>
                <h3 className="font-editorial text-2xl font-medium text-[#1F2421]">
                  Room Rates & Availability
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#1F2421] hover:bg-[#3A4B3D]/10"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Subtext */}
          <p className="text-xs text-[#5D645E] mt-3">
            Easily adjust prices and room statuses for peak seasons, festivals, or weekends. Changes take effect instantly across the website and WhatsApp inquiries.
          </p>

          {/* Rooms Editor List */}
          <div className="mt-5 space-y-4">
            {editedRooms.map((room) => (
              <div 
                key={room.id}
                className="bg-white p-4 rounded-2xl border border-[#EAE5DB] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <img src={room.image} alt={room.name} className="w-14 h-14 rounded-xl object-cover shrink-0 border border-[#EAE5DB]" />
                  <div>
                    <h4 className="font-semibold text-sm text-[#1F2421]">{room.name}</h4>
                    <span className="text-xs text-[#5D645E]">{room.view} • {room.capacity} Guests</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Price input */}
                  <div>
                    <label className="text-[10px] uppercase font-semibold text-[#5D645E] block mb-0.5">
                      Rate / Night (₹)
                    </label>
                    <input
                      type="number"
                      step="100"
                      value={room.price}
                      onChange={(e) => handlePriceChange(room.id, e.target.value)}
                      className="w-28 px-3 py-1.5 rounded-lg border border-[#EAE5DB] text-sm font-semibold text-[#1F2421] focus:outline-none focus:border-[#3A4B3D]"
                    />
                  </div>

                  {/* Status select */}
                  <div>
                    <label className="text-[10px] uppercase font-semibold text-[#5D645E] block mb-0.5">
                      Availability
                    </label>
                    <select
                      value={room.status}
                      onChange={(e) => handleStatusChange(room.id, e.target.value)}
                      className="px-3 py-1.5 rounded-lg border border-[#EAE5DB] text-xs font-semibold text-[#1F2421] bg-white focus:outline-none focus:border-[#3A4B3D] cursor-pointer"
                    >
                      <option value="Available">Available</option>
                      <option value="Limited">Limited</option>
                      <option value="Booked">Booked</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Direct CMS: Supabase / Sanity Integration Option */}
          <div className="mt-5 p-4 rounded-2xl bg-[#F5F2EB] border border-[#EAE5DB] text-xs text-[#5D645E]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#1F2421] font-medium">
                <Database className="w-4 h-4 text-[#3A4B3D]" strokeWidth={1.5} />
                <span>Supabase / Sanity.io CMS Integration</span>
              </div>
              <button
                type="button"
                onClick={() => setShowSupabaseInfo(!showSupabaseInfo)}
                className="text-[11px] text-[#3A4B3D] font-semibold underline"
              >
                {showSupabaseInfo ? 'Hide Details' : 'View Config'}
              </button>
            </div>

            {showSupabaseInfo && (
              <div className="mt-3 pt-3 border-t border-[#EAE5DB] space-y-2 text-[11px]">
                <p>
                  To sync with a live <strong>Supabase</strong> or <strong>Sanity.io</strong> database, add your environment variables in <code className="bg-white px-1.5 py-0.5 rounded border border-[#EAE5DB]">.env</code>:
                </p>
                <pre className="bg-[#1F2421] text-emerald-300 p-2.5 rounded-xl font-mono text-[10px] overflow-x-auto">
{`VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUz...`}
                </pre>
                <p className="text-[#5D645E]">
                  Schema table <code className="bg-white px-1.5 py-0.5 rounded">rooms</code>: fields: <code className="text-stone-800">id, name, price, status, view, capacity</code>.
                </p>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="mt-6 pt-4 border-t border-[#EAE5DB] flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#EAE5DB] text-xs font-medium text-[#5D645E] hover:bg-stone-100 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-full text-xs font-medium text-[#5D645E] hover:text-[#1F2421]"
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                className="inline-flex items-center gap-1.5 px-6 py-2 rounded-full bg-[#3A4B3D] text-[#FBF9F5] text-xs font-medium hover:bg-[#2D3B30] transition-colors shadow-sm"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Changes</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
