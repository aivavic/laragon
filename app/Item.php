<?php
/**
 * Created by PhpStorm.
 * User: viktor
 * Date: 30.05.2017
 * Time: 13:43
 */
namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{

    public $fillable = ['title', 'description'];

}