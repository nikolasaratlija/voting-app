import React from 'react';
import {Link, usePage} from "@inertiajs/inertia-react";

function StatusFilter({status_count}) {
    const {url} = usePage()

    const activeLinkCss = "text-black border-b-4 pb-3 border-blue-500"
    const inActiveLinkCss = "pb-3 hover:text-gray-600 hover:border-b-4 hover:pb-3 hover:border-blue-300"

    return (
        <nav className="flex items-center text-gray-400 justify-between text xs mb-6">
            <ul className="flex uppercase font-semibold space-x-10 pb-3 border-b-4">
                <li>
                    <Link
                        className={!url.includes('status') ? activeLinkCss : inActiveLinkCss}
                        href={route('ideas.index')}
                    >
                        All Ideas ({status_count.all_statuses})
                    </Link>
                </li>
                <li>
                    <Link
                        className={url.includes('considering') ? activeLinkCss : inActiveLinkCss}
                        href={route('ideas.index', {status: 'considering'})}
                    >
                        Considering ({status_count.considering})
                    </Link>
                </li>
                <li>
                    <Link
                        className={url.includes('in_progress') ? activeLinkCss : inActiveLinkCss}
                        href={route('ideas.index', {status: 'in_progress'})}
                    >
                        In Progress ({status_count.in_progress})
                    </Link>
                </li>
            </ul>

            <ul className="flex uppercase font-semibold space-x-10 pb-3 border-b-4">
                <li>
                    <Link
                        className={url.includes('implemented') ? activeLinkCss : inActiveLinkCss}
                        href={route('ideas.index', {status: 'implemented'})}
                    >
                        Implemented ({status_count.implemented})
                    </Link>
                </li>
                <li>
                    <Link
                        className={url.includes('closed') ? activeLinkCss : inActiveLinkCss}
                        href={route('ideas.index', {status: 'closed'})}
                    >
                        Closed ({status_count.closed})
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default StatusFilter;
