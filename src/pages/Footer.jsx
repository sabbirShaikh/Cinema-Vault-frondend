import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
          © 2025 CinemaVault. All Rights Reserved.
        </p>
        
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">Created by</span>
          <span className="px-3 py-1 rounded-lg bg-white/5 text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
            Sk Sabbir Ali
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;