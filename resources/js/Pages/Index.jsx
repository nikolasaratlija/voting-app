import React from 'react';
import AppLayout from "@/Layouts/AppLayout";

export default function Index(props) {
    return (
        <AppLayout
            auth={props.auth}
        >
            <h1>Hello World!</h1>
        </AppLayout>
    )
}
