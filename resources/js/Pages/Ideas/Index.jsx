import React from 'react';
import AppLayout from "@/Layouts/AppLayout";
import IdeaCard from "@/Components/IdeaCard";
import {usePage} from "@inertiajs/inertia-react";
import {Link} from '@inertiajs/inertia-react'

export default function Index() {
    const {ideas} = usePage().props

    return (
        <>
            <div className={"space-y-4"}>
                {/* render each idea with a card */}
                {ideas.data.map(idea => <IdeaCard key={idea.id} {...idea}/>)}
            </div>

            <div className={"mt-6 flex items-center space-x-4 justify-center text-lg"}>
                {ideas.links.map((link, index) => {
                    const classNames = [
                        link.active ? 'font-bold' : '',
                        !link.url ? 'text-gray-400 cursor-default' : '']

                    return <Link
                        className={classNames.join(' ')}
                        key={index}
                        href={link.url}
                    >
                        {link.label}
                    </Link>
                })}
            </div>
        </>
    )
}

Index.layout = page => <AppLayout children={page}/>
