<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class IdeaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'category' => ['name' => $this->category->name],
            'created_at' => $this->created_at,
            'description' => $this->description,
            'slug' => $this->slug,
            'status' => ['name' => $this->status->name],
            'title' => $this->title,
            'votes_count' => $this->votes_count,
            'voted_by_user' => Auth::check() && $this->isVotedByUser(Auth::user())
        ];
    }
}
