import ItemCard from './ItemCard';

async function fetchItems() {
  try {
    const res = await fetch('http://127.0.0.1:8000/api/marketplace/items', { cache: 'no-store' });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error('Error fetching items from backend:', error);
    return [];
  }
}

export default async function GridShowcase() {
  const items = await fetchItems();

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
        {items.length > 0 ? items.map((item: any) => (
          <ItemCard 
            key={item.id} 
            id={item.id}
            type={item.type.toLowerCase() as 'service' | 'product'}
            title={item.name}
            price={item.price}
            imageSrc={item.image_url}
            agencyName={item.agency_name}
            rating={item.agency_rating}
          />
        )) : (
          <div className="col-span-full flex flex-col items-center justify-center py-10">
             <p className="text-[#001F5C] font-bold text-xl mb-2">Conectando al servidor mágico...</p>
             <p className="text-gray-500">Si esto tarda, asegúrate de que el Backend de Laravel esté corriendo (`php artisan serve`).</p>
          </div>
        )}
      </div>
      
      <button className="w-full mt-10 bg-white border-2 border-[#001F5C] text-[#001F5C] font-bold py-4 rounded-xl sm:hidden flex justify-center items-center gap-2">
        Ver todo el catálogo
      </button>
    </section>
  );
}
