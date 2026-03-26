import React from 'react';
import { 
  Users, 
  Star, 
  Package, 
  ShoppingBag,
  Plus,
  Pencil,
  Trash2,
  MoreVertical
} from 'lucide-react';

// Mock data
const stats = [
  { name: 'Visitas a la Vitrina', value: '1,245', change: '+12%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
  { name: 'Calificación', value: '4.8', change: 'Estable', icon: Star, color: 'text-yellow-600', bg: 'bg-yellow-100' },
  { name: 'Servicios Activos', value: '12', change: '+2 nuevos', icon: Package, color: 'text-indigo-600', bg: 'bg-indigo-100' },
  { name: 'Productos Activos', value: '45', change: '-3 agotados', icon: ShoppingBag, color: 'text-emerald-600', bg: 'bg-emerald-100' },
];

const inventory = [
  { id: 1, name: 'Show de Magia Infantil', type: 'Servicio', price: '$2,500 MXN', status: 'Activo', sales: 14 },
  { id: 2, name: 'Castillo Inflable Mini', type: 'Producto', price: '$800 MXN', status: 'Activo', sales: 32 },
  { id: 3, name: 'Animadores Sorpresa', type: 'Servicio', price: '$1,200 MXN', status: 'Pausado', sales: 8 },
  { id: 4, name: 'Pastel Temático 3 Pisos', type: 'Producto', price: '$1,500 MXN', status: 'Activo', sales: 45 },
  { id: 5, name: 'Decoración con Globos', type: 'Servicio', price: '$900 MXN', status: 'Agotado', sales: 0 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Hola, Pispifiestas 👋</h1>
          <p className="text-gray-500 mt-1">Aquí tienes un resumen del desempeño de tu negocio hoy.</p>
        </div>
        <button className="flex items-center px-4 py-2.5 bg-[#FFDB00] text-[#001F5C] font-bold rounded-lg shadow hover:bg-[#FFDB00]/90 transition-colors transform hover:-translate-y-0.5">
          <Plus className="w-5 h-5 mr-2" />
          Agregar Nuevo
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className={`p-3 rounded-xl ${stat.bg}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.name}</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                  {stat.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Table Content */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-900">Inventario Activo</h2>
          <div className="flex gap-2 text-sm text-gray-500">
            <button className="hover:text-[#001F5C] font-medium transition-colors">Ver todos</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50/50 text-gray-500 text-xs uppercase tracking-wider">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium">Nombre / Artículo</th>
                <th scope="col" className="px-6 py-4 font-medium">Tipo</th>
                <th scope="col" className="px-6 py-4 font-medium">Precio</th>
                <th scope="col" className="px-6 py-4 font-medium">Estado</th>
                <th scope="col" className="px-6 py-4 font-medium text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {inventory.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/80 transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                      {item.type === 'Servicio' ? <Package className="w-3.5 h-3.5" /> : <ShoppingBag className="w-3.5 h-3.5" />}
                      {item.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium">
                    {item.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.status === 'Activo' ? 'bg-green-100 text-green-800' : 
                      item.status === 'Pausado' ? 'bg-orange-100 text-orange-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-gray-400 hover:text-[#001F5C] transition-colors" title="Editar">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-red-600 transition-colors" title="Eliminar">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-700 transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {inventory.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              No tienes inventario registrado aún.
            </div>
          )}
        </div>
        
        {/* Pagination placeholder */}
        <div className="p-4 border-t border-gray-100 bg-gray-50/50 flex justify-between items-center text-sm text-gray-500">
          <span>Mostrando 1 a 5 de 5 elementos</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-50">Anterior</button>
            <button className="px-3 py-1 rounded bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-50">Siguiente</button>
          </div>
        </div>

      </div>
    </div>
  );
}
