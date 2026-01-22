import React from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Copyright Section */}
          <div className="order-3 md:order-1">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 text-center md:text-left">
              © 2026 Cinema<span className="text-red-600">Vault</span>. All Rights Reserved.
            </p>
          </div>

          {/* Social Links Section */}
          <div className="order-1 md:order-2 flex items-center gap-4">
            <a 
              href="https://github.com/sabbirShaikh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-red-600/50 transition-all duration-300"
            >
              <Github className="h-4 w-4" />
              <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">GitHub</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/sk-sabbir-ali/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-red-600/50 transition-all duration-300"
            >
              <Linkedin className="h-4 w-4" />
              <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">LinkedIn</span>
            </a>
          </div>

          {/* Creator Section */}
          <div className="order-2 md:order-3 flex items-center gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">Created by</span>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600/10 border border-red-600/20">
              <span className="text-[10px] font-black uppercase tracking-widest text-white">
                Sk Sabbir Ali
              </span>
              <ExternalLink className="h-3 w-3 text-red-600" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;