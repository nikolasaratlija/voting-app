<?php

namespace App\Http\Middleware;

use App\Models\Idea;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param \Illuminate\Http\Request $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'ideas' => Idea::latest()
                ->orderBy('id')
                ->paginate(5)
                ->through(fn($idea) => [
                    'id' => $idea->id,
                    'category' => ['name' => $idea->category->name],
                    'created_at' => $idea->created_at,
                    'description' => $idea->description,
                    'slug' => $idea->slug,
                    'status' => ['name' => $idea->status->name],
                    'title' => $idea->title,
                    'votes_count' => $idea->votes_count
                ])
        ]);
    }
}
