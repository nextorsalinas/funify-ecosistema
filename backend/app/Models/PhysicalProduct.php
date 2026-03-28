<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PhysicalProduct extends Model
{
    protected $fillable = ['agency_id', 'title', 'description', 'price', 'stock', 'image_url', 'category', 'is_active'];

    public function agency() {
        return $this->belongsTo(Agency::class);
    }
}
