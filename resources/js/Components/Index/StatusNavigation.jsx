import React from 'react';
import {Link} from "@inertiajs/inertia-react";

function StatusNavigation({status_count}) {
    return (
        <nav className="flex items-center text-gray-400 justify-between text xs mb-6">
            <ul className="flex uppercase font-semibold space-x-10 pb-3 border-b-4">
                <li>
                    <Link className={"text-black border-b-4 pb-3 border-blue-500"}
                          href={route('ideas.index')}
                    >
                        All Ideas ({status_count.all_statuses})
                    </Link>
                </li>
                <li>
                    <Link
                        className={"pb-3 hover:text-gray-600 hover:border-b-4 hover:pb-3 hover:border-blue-300"}
                        href="#"
                    >
                        Considering ({status_count.considering})
                    </Link>
                </li>
                <li>
                    <Link
                        className={"pb-3 hover:text-gray-600 hover:border-b-4 hover:pb-3 hover:border-blue-300"}
                        href="#"
                    >
                        In Progress ({status_count.in_progress})
                    </Link>
                </li>
            </ul>

            <ul className="flex uppercase font-semibold space-x-10 pb-3 border-b-4">
                <li>
                    <Link
                        className={"pb-3 hover:text-gray-600 hover:border-b-4 hover:pb-3 hover:border-blue-300"}
                        href="#"
                    >
                        Implemented ({status_count.implemented})
                    </Link>
                </li>
                <li>
                    <Link
                        className={"pb-3 hover:text-gray-600 hover:border-b-4 hover:pb-3 hover:border-blue-300"}
                        href="#"
                    >
                        Closed ({status_count.closed})
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default StatusNavigation;
