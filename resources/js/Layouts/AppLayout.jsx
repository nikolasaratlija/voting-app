import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import {Link} from '@inertiajs/inertia-react';

export default function AppLayout({auth, children}) {
    return (
        <>
            <header className={"flex items-center justify-between px-8 py-4"}>
                <Link href="/">
                    <ApplicationLogo className="h-12 fill-current text-gray-500"/>
                </Link>

                <div className={"flex items-center"}>
                    <div className="px-6 py-4 sm:block">
                        {auth.user ? (
                            <Link href={route('logout')} className="text-sm text-gray-700 underline">
                                Log out
                            </Link>
                        ) : (
                            <>
                                <Link href={route('login')} className="text-sm text-gray-700 underline">
                                    Log in
                                </Link>

                                <Link href={route('register')} className="ml-4 text-sm text-gray-700 underline">
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
                    <div className={"w-1/4 mr-10"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi autem, commodi
                        consequatur eaque facere fuga fugit illo non pariatur possimus, quam quos rem, reprehenderit
                        similique sit tenetur vero voluptatum? Animi aspernatur at consequatur consequuntur, cumque
                        distinctio eligendi ex facilis fugit, hic maxime minus nam nihil nisi nulla quas quasi
                        reprehenderit
                        repudiandae sequi similique soluta ullam vel. Aperiam necessitatibus perferendis quaerat sit
                        voluptatibus! Aliquam expedita impedit inventore perspiciatis praesentium qui similique sit.
                        Amet
                        error fugiat in ipsum iusto nulla rerum voluptate! Deleniti excepturi illo nihil qui quia unde
                        velit. Ea earum error esse exercitationem ipsum nisi, optio possimus sapiente. Aperiam.
                    </div>

                    <div className={"w-3/4"}>
                        <nav className="flex items-center text-gray-400 justify-between text xs mb-6">
                            <ul className="flex uppercase font-semibold space-x-10 pb-3 border-b-4">
                                <li><a className={"text-black border-b-4 pb-3 border-sky-500"} href="#">All Ideas
                                    (87)</a></li>
                                <li><a href="#">Considering</a></li>
                                <li><a href="#">In Progress</a></li>
                            </ul>

                            <ul className="flex uppercase font-semibold space-x-10 pb-3 border-b-4">
                                <li><a href="#">Implemented (10)</a></li>
                                <li><a href="#">Closed (55)</a></li>
                            </ul>
                        </nav>

                        <div className={""}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
