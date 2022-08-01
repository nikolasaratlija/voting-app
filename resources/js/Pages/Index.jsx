import React from 'react';
import AppLayout from "@/Layouts/AppLayout";

export default function Index(props) {
    return (
        <AppLayout
            auth={props.auth}
        >
            <div className={"shadow rounded-md bg-white h-60"}>
            </div>
        </AppLayout>
    )
}
