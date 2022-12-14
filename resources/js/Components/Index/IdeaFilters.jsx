import React, {useState} from "react";
import {Inertia} from "@inertiajs/inertia";
import {useForm, usePage} from "@inertiajs/inertia-react";
import {mergeQueryString} from "@/util/mergeQueryString";

export default function IdeaFilters() {
    const {filters, categories} = usePage().props

    const {data, setData} = useForm({
        search: filters.search || '',
        category_id: ''
    })

    function handleChange(e, parameter) {
        setData(parameter, e.target.value)
        let parameters = mergeQueryString(parameter, e.target.value)

        Inertia.get(route('ideas.index'), parameters, {
            replace: true,
            preserveState: true,
        })
    }

    return (
        <div className={"flex space-x-6 mb-6"}>
            <select
                placeholder={"Category"}
                className={"w-1/4 shadow bg-white font-semibold rounded-xl border-none"}
                name="category"
                value={data.category_id}
                onChange={e => handleChange(e, 'category_id')}
            >
                <option value={""}>Filter by Category</option>

                {categories.map(category =>
                    <option key={category.id} value={category.id}>{category.name}</option>
                )}
            </select>

            <select
                placeholder={"Category"}
                className={"w-1/4 shadow bg-white font-semibold rounded-xl border-none"}
                name="category"
                defaultValue={"Category"}
                id="">

                <option value={"Category"} disabled={true}>Other Filters</option>
            </select>

            <div className={"w-2/4 relative"}>
                <div className={"flex absolute left-0 items-center h-full ml-2"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                         fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                </div>
                <input
                    type="search"
                    id="search"
                    placeholder={"Find an idea"}
                    onChange={e => handleChange(e, 'search')}
                    name="search"
                    value={data.search}
                    className={"pl-10 w-full shadow bg-white font-semibold rounded-xl border-none placeholder-gray-900"}/>
            </div>
        </div>
    )
}
