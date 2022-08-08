import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import {Link, usePage} from '@inertiajs/inertia-react';
import CreateIdea from "@/Components/Index/CreateIdea";

export default function AppLayout({children}) {
    const {auth} = usePage().props
    const {ideas} = usePage().props

    return (
        <>
            <header className={"flex items-center justify-between px-8 py-4"}>
                <Link href="/">
                    <ApplicationLogo className="h-12 fill-current text-gray-500"/>
                </Link>

                <div className={"flex items-center"}>
                    <div className="px-6 py-4 sm:block">
                        {auth.user ? (
                            <Link href={route('logout')} method="post" className="text-sm text-gray-700 underline"
                                  as="button">
                                Log out
                            </Link>
                        ) : (
                            <>
                                <Link href={route('login')} className="text-sm text-gray-700 underline" as="button">
                                    Log in
                                </Link>

                                <Link href={route('register')} className="ml-4 text-sm text-gray-700 underline"
                                      as="button">
                                    Register
                                </Link>
                            </>
                        )}
                    </div>

                    <a href="#">
                        <img className={"rounded-full"} src="https://i.pravatar.cc/50" alt="avatar"/>
                    </a>
                </div>
            </header>

            <div className="bg-gray-background py-10">
                <div className={"container max-w-7xl mx-auto flex"}>

                    {/*Section for adding ideas*/}
                    <div className={"w-1/4 mr-10 h-min shadow bg-white rounded-xl p-6 text-center"}>
                        <h2 className={"text-xl font-bold mb-2"}>Add an idea</h2>
                        {auth.user ? (
                            <CreateIdea/>
                        ) : (
                            <>
                                <p>Please login to create an idea.</p>
                                <Link
                                    href={route('login')}
                                    as={"button"}
                                    className={"mx-auto mt-4 font-bold bg-blue-500 text-white w-1/2 h-10 rounded-xl"}>
                                    Login
                                </Link>
                            </>
                        )}
                    </div>

                    <div className={"w-3/4"}>
                        {/*Navigation for idea status types*/}
                        <nav className="flex items-center text-gray-400 justify-between text xs mb-6">
                            <ul className="flex uppercase font-semibold space-x-10 pb-3 border-b-4">
                                <li>
                                    <Link className={"text-black border-b-4 pb-3 border-blue-500"}
                                          href={route('ideas.index')}>
                                        All Ideas ({ideas.length})
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={"pb-3 hover:text-gray-600 hover:border-b-4 hover:pb-3 hover:border-blue-300"}
                                        href="#">Considering</Link></li>
                                <li>
                                    <Link
                                        className={"pb-3 hover:text-gray-600 hover:border-b-4 hover:pb-3 hover:border-blue-300"}
                                        href="#">In Progress
                                    </Link>
                                </li>
                            </ul>

                            <ul className="flex uppercase font-semibold space-x-10 pb-3 border-b-4">
                                <li><a
                                    className={"pb-3 hover:text-gray-600 hover:border-b-4 hover:pb-3 hover:border-blue-300"}
                                    href="#">Implemented (10)</a></li>
                                <li><a
                                    className={"pb-3 hover:text-gray-600 hover:border-b-4 hover:pb-3 hover:border-blue-300"}
                                    href="#">Closed (55)</a></li>
                            </ul>
                        </nav>

                        {/*Idea filtering*/}
                        <div className={"flex space-x-6 mb-6"}>
                            <select
                                placeholder={"Category"}
                                className={"w-1/4 shadow bg-white font-semibold rounded-xl border-none"}
                                name="category"
                                defaultValue={"category"}
                                id="">

                                <option value={"category"} disabled={true}>Category</option>
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
                                    type="text"
                                    placeholder={"Find an idea"}
                                    className={"pl-10 w-full shadow bg-white font-semibold rounded-xl border-none placeholder-gray-900"}/>
                            </div>

                        </div>

                        <div className={""}>
                            {children}
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
