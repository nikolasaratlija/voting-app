import React from 'react';
import AppLayout from "@/Layouts/AppLayout";
import IdeaCard from "@/Components/IdeaCard";

const idea = {
    'title': 'a random title can go here',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi consectetur cum esse fugit inventore ipsa nulla provident quas reprehenderit. Eaque, itaque, vel! Adipisci architecto consectetur illum ipsum magnam maxime nemo neque nobis numquam, odio officiis quod reiciendis temporibus ut vel. Corporis facere libero magni numquam quaerat repudiandae sapiente veniam!'
}

export default function Index(props) {
    return (
        <AppLayout
            auth={props.auth}
        >
            <div className={"space-y-4"}>
                <IdeaCard {...idea}/>
                <IdeaCard {...idea}/>
                <IdeaCard {...idea}/>
                <IdeaCard {...idea}/>
            </div>
        </AppLayout>
    )
}
