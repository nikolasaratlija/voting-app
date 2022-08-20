import React from 'react';
import {useForm, usePage} from "@inertiajs/inertia-react";

function CreateIdea() {
    const {categories} = usePage().props

    const {data, setData, post, recentlySuccessful, reset, errors} = useForm({
        title: '',
        category_id: '1',
        description: ''
    })

    function submit(e) {
        e.preventDefault()
        post(route('ideas.store'), {
            onSuccess: () => reset()
        })
    }

    return (
        <>
            {recentlySuccessful ? <p className={"text-green-400 mb-4"}>Thank you for submitting an idea!</p> : ''}

            <form onSubmit={submit}>
                <p>Let us know what you would like and we'll take a look over!</p>

                <div className={"mt-5"}>
                    <input
                        placeholder={"Your Idea"}
                        className={"w-full bg-gray-100 font-semibold rounded-xl border-none placeholder-gray-900"}
                        type="text"
                        value={data.title}
                        onChange={e => setData('title', e.target.value)}
                    />
                    {errors.title && <p className={"text-red-500 mt-1 text-xs text-start"}>{errors.title}</p>}

                    <select
                        placeholder={"Category"}
                        className={"w-full mt-4 bg-gray-100 font-semibold rounded-xl border-none placeholder-gray-900"}
                        name="category_id"
                        defaultValue={"Category"}
                        value={data.category_id}
                        onChange={e => setData('category_id', e.target.value)}
                    >

                        <option disabled={true}>Select a Category</option>

                        {categories.map(category =>
                            <option key={category.id} value={category.id}>{category.name}</option>
                        )}
                    </select>

                    <textarea
                        className={"w-full mt-4 bg-gray-100 font-semibold rounded-xl border-none placeholder-gray-900"}
                        placeholder={"Describe your idea"}
                        name=""
                        id=""
                        value={data.description}
                        onChange={e => setData('description', e.target.value)}
                    ></textarea>
                    {errors.description && <p className={"text-red-500 mt-1 text-xs text-start"}>{errors.description}</p>}

                </div>

                <div className={"space-x-4 flex mt-5"}>
                    <button className={"font-bold bg-gray-200 w-1/2 h-10 rounded-xl relative"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute ml-5"
                             fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/>
                        </svg>

                        <span className={"ml-2"}>Attach</span>
                    </button>
                    <button
                        className={"font-bold bg-blue-500 text-white w-1/2 h-10 rounded-xl"}
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
}

export default CreateIdea;
