'use client';

import React from 'react';

export default function HeroBanner() {
  return (
    <div className="relative w-full bg-[#FFDB00] pt-10 pb-40 sm:pb-48 px-4 sm:px-6 lg:px-8 flex justify-center items-center isolate">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-white/20 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full bg-[#001F5C]/10 blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 text-center flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#001F5C] leading-[1.05] mb-6 max-w-4xl tracking-tighter shadow-sm drop-shadow-sm">
          Toda la magia y diversión <br className="hidden sm:block" />
          <span className="text-white drop-shadow-md">para la fiesta de sus sueños</span>
        </h2>
        <p className="text-lg sm:text-2xl font-bold text-[#001F5C]/80 max-w-2xl px-4 drop-shadow-sm">
          Encuentra magos divertidísimos, pasteles deliciosos, inflables y regalos asombrosos en un solo lugar y al mejor precio.
        </p>
      </div>

      {/* Floating White Box */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[92%] sm:w-[85%] lg:w-[75%] max-w-5xl bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,31,92,0.15)] p-6 sm:p-8 translate-y-[50%] z-20 border border-gray-100">
        <h3 className="text-xl sm:text-2xl font-black text-[#001F5C] mb-5 sm:mb-6">
          ¿A dónde quieres enviar tu regalo o planear tu fiesta?
        </h3>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <select 
              defaultValue=""
              className="bg-white border border-gray-300 text-gray-800 text-lg rounded-xl focus:ring-4 focus:ring-[#FFDB00]/30 focus:border-[#FFDB00] block w-full px-5 py-4 font-semibold outline-none transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled hidden>Estado *</option>
              <option>Estado de México</option>
              <option>Ciudad de México</option>
              <option>Jalisco</option>
              <option>Nuevo León</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              ▼
            </div>
          </div>
          
          <div className="relative flex-1">
            <select 
              defaultValue=""
              className="bg-white border border-gray-300 text-gray-800 text-lg rounded-xl focus:ring-4 focus:ring-[#FFDB00]/30 focus:border-[#FFDB00] block w-full px-5 py-4 font-semibold outline-none transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled hidden>Ciudad *</option>
              <option>Toluca</option>
              <option>Metepec</option>
              <option>Guadalajara</option>
              <option>Monterrey</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              ▼
            </div>
          </div>

          <input 
            type="date" 
            className="flex-1 bg-white border border-gray-300 text-gray-500 text-lg rounded-xl focus:ring-4 focus:ring-[#FFDB00]/30 focus:border-[#FFDB00] block w-full px-5 py-4 font-semibold outline-none transition-all"
            placeholder="Fecha de entrega"
          />
          
          <button className="bg-[#e91e63] hover:bg-pink-700 text-white font-black text-lg rounded-xl px-8 py-4 flex-none md:min-w-[200px] shadow-lg transition-transform transform hover:-translate-y-1">
            Ver regalos
          </button>
        </div>
      </div>
    </div>
  );
}
