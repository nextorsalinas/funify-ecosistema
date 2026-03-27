import React from 'react';
import Link from 'next/link';
import { Search, User, ShoppingCart } from 'lucide-react';

export default function Header() {
  const navLinks = [
    "Inicio", "Cumpleaños", "Ocasiones", "Pasteles y Botanas", 
    "Personalizados", "Regalos", "Dulces", "Inflables"
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col shadow-sm">
      {/* Top Header - Navy Blue */}
      <div className="bg-[#001F5C] w-full px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 md:gap-8">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-3xl font-black text-white tracking-tighter">
              Funifay<span className="text-[#FFDB00]">.</span>
            </h1>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-4xl hidden sm:block relative">
            <input 
              type="text" 
              placeholder="¿Fiesta? Encuentra aquí: dulces, taquiza, magos, payasos, inflables, regalos…" 
              className="w-full rounded-full pl-6 pr-14 py-3 text-[15px] font-medium text-[#001F5C] focus:outline-none focus:ring-4 focus:ring-[#FFDB00]/50 border-none placeholder:text-gray-400 shadow-inner"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gray-100 rounded-full text-[#001F5C] hover:bg-gray-200 transition-colors cursor-pointer">
              <Search size={18} />
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 text-white flex-shrink-0">
            <div className="hidden lg:flex items-center gap-2 font-bold text-sm cursor-pointer hover:text-[#FFDB00] transition-colors pr-4 border-r border-white/20">
              <span className="font-semibold text-white/80">🌐 Español</span>
              <span>$MXN</span>
            </div>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors hidden sm:block">
              <User size={24} />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
              <ShoppingCart size={24} />
              <span className="absolute top-0 right-0 bg-[#FFDB00] text-[#001F5C] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-[#001F5C]">0</span>
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
      
      {/* Mobile Search Bar - Visible only on small screens */}
      <div className="bg-[#001F5C] w-full px-4 pb-3 sm:hidden shadow-inner">
        <div className="relative">
          <input 
            type="text" 
            placeholder="¿Fiesta? Encuentra aquí..." 
            className="w-full rounded-full pl-5 pr-10 py-2.5 text-sm font-medium text-[#001F5C] focus:outline-none border-none placeholder:text-gray-400"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 text-[#001F5C] opacity-70">
            <Search size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
