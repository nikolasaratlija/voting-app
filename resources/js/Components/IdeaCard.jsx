import React from 'react';

export default function IdeaCard({id, title, description, slug}) {
    return (
        <div className={"shadow rounded-md bg-white h-60 p-8 flex space-x-4"}>
            <div className={"flex flex-col justify-between py-3 items-center"}>
                <div className={"flex flex-col items-center"}>
                    <span className={"block text-2xl font-bold"}>12</span>
                    <span className={"block text-gray-400"}>Votes</span>
                </div>
                <button className={"uppercase font-bold bg-gray-200 rounded-xl w-20 h-12 text-xs"}>Vote</button>
            </div>

            <div>
                <div className={"bg-gray-400 h-16 w-16 rounded-xl"}></div>
            </div>

            <div className={"flex flex-col justify-between"}>
                <div>
                    <h3>
                        <a href={route('ideas.show', slug)} className={"font-semibold underline text-xl"}>{title}</a>
                    </h3>
                    <p className={"mt-3"}>{description}</p>
                </div>

                <div className={"flex items-center justify-between"}>
                    <div className={"space-x-2 text-gray-400 font-semibold"}>
                        <span>10 hours ago</span>
                        <span>·</span>
                        <span>Category</span>
                        <span>·</span>
                        <span className={"text-black"}>3 comments</span>
                    </div>
                    <div className={"flex items-center"}>
                        <button className={"mr-2 uppercase font-bold text-xs bg-gray-200 h-8 w-28 rounded-xl"}>Open
                        </button>
                        <button className={"uppercase font-bold text-xs bg-gray-200 h-8 w-16 rounded-xl"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
