<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Idea extends Model
{
    use HasFactory, HasSlug;

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function status()
    {
        return $this->belongsTo(Status::class);
    }

    /**
     * returns created_at attribute in human readable format
     *
     * @return Attribute
     */
    public function createdAt(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => Carbon::parse($value)->diffForHumans()
        );
    }

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug');
    }

    public function votes()
    {
        return $this->hasMany(Vote::class);
    }

    public function isVotedByUser(User $user)
    {
        return Vote::where('user_id', $user->id)
            ->where('idea_id', $this->id)
            ->exists();
    }

    public function addVote(User $user)
    {
        Vote::create([
            'user_id' => $user->id,
            'idea_id' => $this->id
        ]);
    }

    public function removeVote(User $user)
    {
        Vote::where('user_id', $user->id)
            ->where('idea_id', $this->id)
            ->delete();
    }

    public function path()
    {

    }
}
