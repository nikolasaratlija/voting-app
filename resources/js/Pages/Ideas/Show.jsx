import React from 'react';
import AppLayout from "@/Layouts/AppLayout";
import IdeaCard from "@/Components/IdeaCard";

export default function Show({idea, auth}) {
    return (
        <AppLayout auth={auth}>
            <div className={"space-y-4"}>
                <IdeaCard {...idea}/>
            </div>
        </AppLayout>
    )
}
