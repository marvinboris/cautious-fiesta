<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Driver extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id', 'first_name', 'last_name', 'nid', 'driving_license', 'card', 'balance', 'photo'
    ];

    public function category()
    {
        return $this->belongsTo('App\Models\Category');
    }
}