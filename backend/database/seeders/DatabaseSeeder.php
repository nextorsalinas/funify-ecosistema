<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $agencyId = DB::table('agencies')->insertGetId([
            'name' => 'Producciones PispiFiestas',
            'description' => 'La mejor agencia de entretenimiento infantil en la ciudad.',
            'rating' => 4.90,
            'logo_url' => 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=200&auto=format&fit=crop',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $agencyId2 = DB::table('agencies')->insertGetId([
            'name' => 'Pastelería Arcoíris',
            'description' => 'Pasteles temáticos y mesas de dulces inolvidables.',
            'rating' => 4.85,
            'logo_url' => 'https://images.unsplash.com/photo-1558231908-417169f4eaac?q=80&w=200&auto=format&fit=crop',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('services')->insert([
            [
                'agency_id' => $agencyId,
                'name' => 'Show de Magia Espectacular',
                'description' => 'Un show mágico familiar con increíbles ilusiones. Duración 1 hora.',
                'price' => 2500.00,
                'category' => 'magician',
                'image_url' => '/images/magician.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'agency_id' => $agencyId,
                'name' => 'Pinta Caritas y Animación',
                'description' => 'Maquillaje de fantasía y juegos interactivos para todos.',
                'price' => 1200.00,
                'category' => 'animator',
                'image_url' => 'https://images.unsplash.com/photo-1530103862676-de8892bc2ea6?q=80&w=800&auto=format&fit=crop',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        DB::table('physical_products')->insert([
            [
                'agency_id' => $agencyId2,
                'name' => 'Pastel de Cumpleaños 3 Pisos',
                'description' => 'Sabor chocolate con fresa, diseño personalizado.',
                'price' => 850.00,
                'stock' => 15,
                'category' => 'cake',
                'image_url' => '/images/cake.png', 
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'agency_id' => $agencyId,
                'name' => 'Castillo Inflable',
                'description' => 'Inflable gigante 5x5m. Instalación en todo el estado.',
                'price' => 1500.00,
                'stock' => 3,
                'category' => 'inflatable',
                'image_url' => '/images/castle.png',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
    }
}
