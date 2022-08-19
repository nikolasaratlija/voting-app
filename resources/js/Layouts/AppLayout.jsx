import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import {Link, usePage} from '@inertiajs/inertia-react';
import CreateIdea from "@/Components/Index/CreateIdea";
import StatusFilter from "@/Components/Index/StatusFilter";

export default function AppLayout({children}) {
    const {auth, status_count} = usePage().props

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
                        <StatusFilter status_count={status_count}/>

                        {children}
                    </div>
                </div>

            </div>
        </>
    );
}
