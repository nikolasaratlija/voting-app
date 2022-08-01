import React from 'react';
import AppLayout from "@/Layouts/AppLayout";

export default function Index(props) {
    return (
        <AppLayout
            auth={props.auth}
        >
            <div className={"shadow rounded-md bg-white h-60 p-8 flex space-x-4"}>
                <div className={"flex flex-col justify-between py-3 items-center"}>
                    <div className={"flex flex-col items-center"}>
                        <span className={"block text-2xl font-bold"}>12</span>
                        <span className={"block text-gray-400"}>Votes</span>
                    </div>
                    <button className={"uppercase font-bold bg-gray-200 rounded-xl w-16 h-10 text-xs"}>Vote</button>
                </div>

                <div>
                    <div className={"bg-gray-400 h-16 w-16 rounded-xl"}></div>
                </div>

                <div className={"flex flex-col justify-between"}>
                    <div>
                        <span className={"font-semibold text-xl"}>A random title can go here</span>
                        <p className={"mt-3"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                            commodi corporis facere id in
                            natus nesciunt nobis quisquam tempora tenetur. Consectetur et impedit nemo quam?</p>
                    </div>

                    <div className={"flex items-center justify-between"}>
                        <div className={"space-x-4 text-gray-400"}>
                            <span>10 hours ago</span>
                            <span>Category</span>
                            <span>3 comments</span>
                        </div>
                        <div>
                            <button className={"mr-2 uppercase font-bold text-xs bg-gray-200 h-6 w-16 rounded-xl"}>Open</button>
                            <button className={"uppercase font-bold text-xs bg-gray-200 h-6 w-16 rounded-xl"}>...</button>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
