// components/dashboard/AddInventoryModal.tsx
'use client';

import React, { useState } from 'react';
import { X, Upload, Loader2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function AddInventoryModal({ isOpen, onClose, onSuccess }: Props) {
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState<'Servicio' | 'Producto'>('Servicio');
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    // Agregamos el agency_id por defecto (ajustar cuando haya login)
    formData.append('agency_id', '1'); 

    const endpoint = type === 'Servicio' ? '/api/dashboard/services' : '/api/dashboard/products';

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
        method: 'POST',
        body: formData, // El navegador configura automáticamente el Content-Type multipart/form-data
      });

      if (response.ok) {
        onSuccess();
        onClose();
      } else {
        const error = await response.json();
        alert(`Error: ${error.message || 'No se pudo guardar'}`);
      }
    } catch (err) {
      console.error("Error al enviar:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl animate-in zoom-in duration-200 flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center flex-shrink-0">
          <h2 className="text-xl font-bold text-[#001F5C]">Agregar Nuevo {type}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200">
          {/* Selector de Tipo */}
          <div className="flex bg-gray-100 p-1 rounded-lg">
            {(['Servicio', 'Producto'] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setType(t)}
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                  type === t ? 'bg-white text-[#001F5C] shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {t}
              </button>
            ))}
            <input type="hidden" name="type" value={type} />
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
              <input name="title" required className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FFDB00] outline-none" placeholder="Ej. Show de Magia" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Precio (MXN)</label>
                <input name="price" type="number" required className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FFDB00] outline-none" placeholder="0.00" />
              </div>
              {type === 'Producto' ? (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                  <input name="stock" type="number" required className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FFDB00] outline-none" placeholder="0" />
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
                  <select name="category" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FFDB00] outline-none bg-white">
                    <option value="magia">Magos</option>
                    <option value="inflables">Inflables</option>
                    <option value="comida">Comida/Pasteles</option>
                    <option value="animacion">Animadores</option>
                  </select>
                </div>
              )}
            </div>

            {type === 'Producto' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
                <select name="category" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FFDB00] outline-none bg-white">
                  <option value="juguetes">Juguetes</option>
                  <option value="decoracion">Decoración</option>
                  <option value="disfraces">Disfraces</option>
                </select>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
              <textarea name="description" rows={3} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FFDB00] outline-none" placeholder="Describe brevemente lo que ofreces..."></textarea>
            </div>

            {/* Upload de Imagen */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Imagen del {type}</label>
              <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-4 hover:border-[#FFDB00] transition-colors group cursor-pointer">
                <input type="file" name="image" accept="image/*" onChange={handleImageChange} required className="absolute inset-0 opacity-0 cursor-pointer" />
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="h-32 w-full object-cover rounded-lg" />
                ) : (
                  <div className="text-center py-4">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto group-hover:text-[#FFDB00]" />
                    <p className="mt-2 text-xs text-gray-500">Click para subir (JPG, PNG máx 2MB)</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#001F5C] text-white font-bold py-3 rounded-xl hover:bg-[#001F5C]/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Guardar en Inventario'}
          </button>
        </form>
      </div>
    </div>
  );
}