import ItemCard from './ItemCard';

const mockItems = [
  {
    id: 1,
    type: 'service' as const,
    title: 'Show de Magia Espectacular',
    price: 2500,
    imageSrc: '/images/magician.png',
    agencyName: 'Agencia Pispifiestas',
    rating: 4.9
  },
  {
    id: 2,
    type: 'product' as const,
    title: 'Pastel Temático 3 Pisos',
    price: 1200,
    imageSrc: '/images/cake.png',
    agencyName: 'Dulces Momentos',
    rating: 4.8
  },
  {
    id: 3,
    type: 'service' as const,
    title: 'Castillo Inflable Gigante',
    price: 1800,
    imageSrc: '/images/castle.png',
    agencyName: 'Aventuras Extremas',
    rating: 5.0
  },
  {
    id: 4,
    type: 'service' as const,
    title: 'Animación con Payasos',
    price: 1500,
    imageSrc: 'https://images.unsplash.com/photo-1533222533923-a5a41dc563e4?auto=format&fit=crop&w=800&q=80',
    agencyName: 'Agencia Pispifiestas',
    rating: 4.7
  },
];

export default function GridShowcase() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-[#001F5C] tracking-tight">Descubre lo Mejor</h2>
          <p className="text-gray-500 mt-2 text-lg font-medium">Servicios y productos increíbles para tu evento infantil</p>
        </div>
        <button className="hidden sm:flex items-center gap-2 text-[#001F5C] font-bold hover:bg-[#FFDB00]/20 px-5 py-2.5 rounded-full transition-colors">
          Ver todo 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {mockItems.map((item) => (
          <ItemCard key={item.id} {...item} />
        ))}
      </div>
      
      <button className="w-full mt-10 bg-white border-2 border-[#001F5C] text-[#001F5C] font-bold py-4 rounded-xl sm:hidden flex justify-center items-center gap-2">
        Ver todo el catálogo
      </button>
    </section>
  );
}
