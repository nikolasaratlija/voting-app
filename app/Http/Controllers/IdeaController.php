<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreIdeaRequest;
use App\Http\Requests\UpdateIdeaRequest;
use App\Models\Idea;
use App\Models\Status;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class IdeaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return Inertia::render('Ideas/Index', [
            'ideas' => Idea::all()
                ->transform(fn($idea) => [
                    'id' => $idea->id,
                    'category' => ['name' => $idea->category->name],
                    'created_at' => $idea->created_at,
                    'description' => $idea->description,
                    'slug' => $idea->slug,
                    'status' => ['name' => $idea->status->name],
                    'title' => $idea->title,
                ])
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param Idea $idea
     * @return Response
     */
    public function show(Idea $idea)
    {
        return Inertia::render('Ideas/Show', [
            'idea' => $idea
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $attributes = $request->validate([
            'title' => 'required',
            'description' => 'required',
            'category_id' => 'required'
        ]);

        $attributes['status_id'] = Status::where('name', '=', 'open')->first()->id;

        auth()->user()->ideas()->create($attributes);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Idea $idea
     * @return \Illuminate\Http\Response
     */
    public function edit(Idea $idea)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateIdeaRequest $request
     * @param Idea $idea
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateIdeaRequest $request, Idea $idea)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Idea $idea
     * @return \Illuminate\Http\Response
     */
    public function destroy(Idea $idea)
    {
        //
    }
}
