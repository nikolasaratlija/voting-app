import React from 'react';
import AppLayout from "@/Layouts/AppLayout";
import IdeaCard from "@/Components/Index/IdeaCard";

export default function Show({idea}) {
    return (
        <div className={"space-y-4"}>
            <IdeaCard {...idea.data}/>
        </div>
    )
}

Show.layout = page => <AppLayout children={page}/>
