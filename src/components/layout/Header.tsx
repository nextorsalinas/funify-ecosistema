'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    "Inicio", "Cumpleaños", "Ocasiones", "Pasteles y Botanas", 
    "Personalizados", "Regalos", "Dulces", "Inflables"
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col shadow-sm">
      {/* Top Header - Navy Blue */}
      <div className="bg-[#001F5C] w-full px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between md:gap-8">
          
          {/* Mobile: Left Action (Menu) | Desktop: Logo */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-1 -ml-1 text-white hover:bg-white/10 rounded-md transition-colors"
            >
              <Menu size={26} />
            </button>
          </div>

          <div className="hidden md:block flex-shrink-0">
            <Link href="/">
              <h1 className="text-3xl font-black text-white tracking-tighter">
                Funifay<span className="text-[#FFDB00]">.</span>
              </h1>
            </Link>
          </div>

          {/* Mobile: Center Logo */}
          <div className="md:hidden absolute left-1/2 -translate-x-1/2">
            <Link href="/">
              <h1 className="text-xl font-black text-white tracking-tighter">
                Funifay<span className="text-[#FFDB00]">.</span>
              </h1>
            </Link>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="flex-1 max-w-4xl hidden sm:block relative mx-4">
            <input 
              type="text" 
              placeholder="¿Fiesta? Encuentra aquí: dulces, taquiza, magos, payasos, inflables, regalos…" 
              className="w-full rounded-full pl-6 pr-14 py-2.5 text-[15px] font-medium text-[#001F5C] focus:outline-none focus:ring-4 focus:ring-[#FFDB00]/50 border-none placeholder:text-gray-400 shadow-inner"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gray-100 rounded-full text-[#001F5C] hover:bg-gray-200 transition-colors cursor-pointer">
              <Search size={18} />
            </button>
          </div>

          {/* Actions (Right) */}
          <div className="flex items-center gap-2 sm:gap-4 text-white flex-shrink-0">
            <div className="hidden lg:flex items-center gap-2 font-bold text-sm cursor-pointer hover:text-[#FFDB00] transition-colors pr-4 border-r border-white/20">
              <span className="font-semibold text-white/80">🌐 Español</span>
              <span>$MXN</span>
            </div>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors hidden sm:block">
              <User size={24} />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
              <ShoppingCart size={22} className="sm:w-6 sm:h-6" />
              <span className="absolute top-1 right-1 bg-[#FFDB00] text-[#001F5C] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-[#001F5C]">0</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation - White */}
      <nav className="bg-white w-full border-b border-gray-200 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-between py-3.5">
            {navLinks.map((link) => (
              <li key={link}>
                <Link 
                  href="#" 
                  className="text-[13px] lg:text-[14px] font-bold text-[#001F5C] hover:text-[#FFDB00] transition-colors capitalize whitespace-nowrap"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      
      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[60] md:hidden transition-opacity backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div className={`fixed top-0 left-0 bottom-0 w-[280px] bg-white z-[70] md:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} shadow-2xl`}>
        <div className="flex flex-col h-full">
          <div className="p-6 bg-[#001F5C] flex items-center justify-between">
            <h2 className="text-2xl font-black text-white tracking-tighter">
              Funifay<span className="text-[#FFDB00]">.</span>
            </h2>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-1 text-white/80 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto py-6">
            <ul className="px-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link}>
                  <Link 
                    href="#" 
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-bold text-[#001F5C] hover:text-[#FFDB00] transition-colors border-b border-gray-50 pb-2"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <button className="w-full flex items-center justify-center gap-2 bg-[#001F5C] text-white font-bold py-3 rounded-xl hover:bg-[#001540] transition-colors">
              <User size={20} />
              Mi Cuenta
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
