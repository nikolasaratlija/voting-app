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

    protected $with = ['category', 'status'];

    protected $appends = ['votes_count'];

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

    public function getVotesCountAttribute()
    {
        return $this->votes()->count();
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
        // cannot vote for idea unless idea is open
        if ($this->status_id !== 1)
            return;

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
}
