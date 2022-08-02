import React from 'react';
import AppLayout from "@/Layouts/AppLayout";
import IdeaCard from "@/Components/IdeaCard";

export default function Show(props) {
    return (
        <AppLayout
            auth={props.auth}
        >
            <div className={"space-y-4"}>
                <IdeaCard/>
            </div>
        </AppLayout>
    )
}
