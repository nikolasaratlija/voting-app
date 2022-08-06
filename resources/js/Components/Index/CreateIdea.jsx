import React from 'react';

function CreateIdea(props) {
    return (
        <>
            <p>Let us know what you would like and we'll take a look over!</p>

            <div className={"space-y-4 mt-5"}>
                <input
                    placeholder={"Your Idea"}
                    className={"w-full bg-gray-100 font-semibold rounded-xl border-none placeholder-gray-900"}
                    type="text"/>

                <select
                    placeholder={"Category"}
                    className={"w-full bg-gray-100 font-semibold rounded-xl border-none placeholder-gray-900"}
                    name="category"
                    defaultValue={"Category"}
                    id="">

                    <option value="Category" disabled={true}>Category</option>
                </select>

                <textarea
                    className={"w-full bg-gray-100 font-semibold rounded-xl border-none placeholder-gray-900"}
                    placeholder={"Describe your idea"}
                    name=""
                    id=""></textarea>
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
                    className={"font-bold bg-blue-500 text-white w-1/2 h-10 rounded-xl"}>Submit
                </button>
            </div>
        </>
    );
}

export default CreateIdea;
