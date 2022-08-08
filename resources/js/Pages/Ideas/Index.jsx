import React from 'react';
import AppLayout from "@/Layouts/AppLayout";
import IdeaCard from "@/Components/IdeaCard";
import {usePage} from "@inertiajs/inertia-react";

export default function Index() {
    const {ideas} = usePage().props

    return (
        <div className={"space-y-4"}>
            {/* render each idea with a card */}
            {ideas.map(idea => <IdeaCard key={idea.id} {...idea}/>)}
        </div>
    )
}

Index.layout = page => <AppLayout children={page}/>
