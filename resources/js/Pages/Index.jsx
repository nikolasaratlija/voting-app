import React from 'react';
import AppLayout from "@/Layouts/AppLayout";
import IdeaCard from "@/Components/IdeaCard";

export default function Index(props) {
    return (
        <AppLayout
            auth={props.auth}
        >
            <div className={"space-y-4"}>
                <IdeaCard/>
                <IdeaCard/>
                <IdeaCard/>
                <IdeaCard/>
            </div>
        </AppLayout>
    )
}
