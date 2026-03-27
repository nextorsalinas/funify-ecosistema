import React from 'react';
import Link from 'next/link';
import { Mail, Lock, LogIn } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full flex bg-white font-sans">
      
      {/* Lado Izquierdo - Branding (Amarillo) */}
      <div className="hidden lg:flex w-1/2 bg-[#FFDB00] flex-col justify-center items-center p-12 text-center">
        <h1 className="text-6xl font-black text-[#001F5C] mb-6 tracking-tight">
          Funifay <br /> para Negocios
        </h1>
        <p className="text-xl text-[#001F5C]/80 font-medium max-w-md">
          El panel de control definitivo para gestionar tu agencia, servicios y productos en el mejor marketplace de eventos infantiles.
        </p>
        
        {/* Gráfico / Decoración Simple */}
        <div className="mt-16 relative w-64 h-64 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white/30">
          <div className="w-48 h-48 bg-white/40 rounded-full flex items-center justify-center animate-pulse">
            <LogIn className="w-20 h-20 text-[#001F5C]" />
          </div>
        </div>
      </div>

      {/* Lado Derecho - Formulario de Login */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-white">
        <div className="w-full max-w-md space-y-8">
          
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-[#001F5C]">Bienvenido de nuevo</h2>
            <p className="mt-2 text-sm text-gray-500">
              Ingresa a tu panel de administración
            </p>
          </div>

          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="space-y-4">
              
              <div>
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="focus:ring-[#001F5C] focus:border-[#001F5C] block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-3 border bg-gray-50 outline-none transition-colors"
                    placeholder="agencia@ejemplo.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="focus:ring-[#001F5C] focus:border-[#001F5C] block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-3 border bg-gray-50 outline-none transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>

            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#001F5C] focus:ring-[#001F5C] border-gray-300 rounded cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                  Recordarme
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-semibold text-[#001F5C] hover:text-[#FFDB00] transition-colors">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-[#001F5C] hover:bg-[#001F5C]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#001F5C] transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                Ingresar al Panel
              </button>
            </div>
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">¿No tienes cuenta?</span>
                </div>
              </div>

              <div className="mt-6">
                <Link 
                  href="/register" 
                  className="w-full flex justify-center py-3 px-4 border-2 border-gray-200 rounded-lg shadow-sm text-sm font-bold text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#001F5C] transition-all duration-200"
                >
                  Regístrate como Proveedor
                </Link>
              </div>
            </div>
          </form>

          {/* Botón para regresar al inicio temporalmente */}
          <div className="pt-8 text-center text-sm text-gray-500">
            <Link href="/" className="hover:text-[#001F5C] underline transition-colors">
              &larr; Volver al Marketplace
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
