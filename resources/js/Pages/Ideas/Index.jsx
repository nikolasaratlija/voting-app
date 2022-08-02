import React from 'react';
import AppLayout from "@/Layouts/AppLayout";
import IdeaCard from "@/Components/IdeaCard";

export default function Index({auth, ideas}) {
    return (
        <AppLayout auth={auth}>
            <div className={"space-y-4"}>
                {console.log(ideas)}
                {/* render each idea with a card */}
                {ideas.map(idea => <IdeaCard key={idea.id} {...idea}/>)}
            </div>
        </AppLayout>
    )
}
