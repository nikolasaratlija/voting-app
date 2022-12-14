<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreIdeaRequest;
use App\Http\Requests\UpdateIdeaRequest;
use App\Http\Resources\IdeaResource;
use App\Models\Idea;
use App\Models\Status;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
            'ideas' => IdeaResource::collection(
                Idea::query()
                    ->when(request('search'), function ($query, $search) {
                        $query->where('title', 'LIKE', "%{$search}%");
                    })
                    ->when(request('status'), function ($query, $search) {
                        $query->whereHas('status', function ($query) use ($search) {
                            $query->where('name', '=', $search);
                        });
                    })
                    ->when(request('category_id'), function ($query, $search) {
                        $query->where('category_id', '=', $search);
                    })
                    ->latest()
                    ->paginate(5)
                    ->withQueryString()
            ),
            'filters' => request()->only(['search'])
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
            'idea' => new IdeaResource($idea)
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
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $attributes = $request->validate([
            'title' => 'required',
            'description' => 'required',
            'category_id' => 'required'
        ]);

        // initial status is 'open'
        $attributes['status_id'] = Status::where('name', '=', 'open')->first()->id;

        auth()->user()->ideas()->create($attributes);

        return redirect()->route('ideas.index');
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
