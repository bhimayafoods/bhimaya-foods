import React from 'react';

const TopNotice = ({ message, isVisible }) => {
  if (!isVisible || !message) return null;

  return (
    <div className="bg-[#fb641b] text-white text-center py-2 px-4 font-bold text-sm md:text-base w-full relative z-[70] shadow-md border-b border-white/20">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <span className="animate-pulse">📢</span>
        <span className="tracking-wide uppercase text-[12px] md:text-sm">{message}</span>
      </div>
    </div>
  );
};

export default TopNotice;
