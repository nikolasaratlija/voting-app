import React from 'react';
import {Link} from '@inertiajs/inertia-react'

const statusStyles = {
    'open': 'bg-green-500 text-white',
    'considering': 'bg-orange-400 text-white',
    'in progress': 'bg-purple-500 text-white',
    'implemented': 'bg-gray-200',
    'closed': 'bg-red-500 text-white'
}

export default function IdeaCard(props) {
    return (
        <div className={"shadow rounded-md bg-white h-60 p-8 flex space-x-4"}>
            <div className={"flex flex-col justify-between py-3 items-center"}>
                <div className={"flex flex-col items-center"}>
                    <span className={"block text-2xl font-bold"}>{props.votes_count}</span>
                    <span className={"block text-gray-400"}>Votes</span>
                </div>
                <button className={"uppercase font-bold text-white bg-blue-500 rounded-xl w-20 h-12 text-xs"}>Vote</button>
            </div>

            <div>
                <div className={"bg-gray-400 h-16 w-16 rounded-xl"}></div>
            </div>

            <div className={"flex w-full flex-col justify-between"}>
                <div>
                    <h3>
                        <Link href={route('ideas.show', props.slug)} className={"font-semibold underline text-xl"}>{props.title}</Link>
                    </h3>
                    <p className={"mt-3"}>{props.description}</p>
                </div>

                <div className={"flex items-center justify-between"}>
                    <div className={"space-x-2 text-gray-400 font-semibold"}>
                        <span>{props.created_at}</span>
                        <span>·</span>
                        <span>{props.category.name}</span>
                        <span>·</span>
                        <span className={"text-black"}>3 comments</span>
                    </div>

                    <div className={"flex items-center"}>
                        <button
                            className={`mr-2 uppercase font-bold text-xs h-8 w-28 rounded-xl ${statusStyles[props.status.name]}`}
                        >
                            {props.status.name}
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
