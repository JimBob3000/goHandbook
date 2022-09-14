import React from 'react';
import NotFound from '../notFound/NotFound';
import SideMenu from "../../components/SideMenu";
import Loops from "./components/Loops";
import Structs from "./components/Structs";
import Searching from "./components/Searching";
import Sorting from "./components/Sorting";

const Topics = (page) => {
    const topics = [
        "loops",
        "structs",
        "searching",
        "sorting",
    ]

    if (topics.includes(page.page)) {
        return ( 
            <div className="xl:px-auto relative mx-auto flex justify-center lg:justify-start xl:justify-center sm:px-2 lg:px-8">
                <SideMenu />
                <div className="px-6 md:px-6 lg:px-0 py-16 text-slate-800 md:w-[700px] lg:w-full lg:ml-[30px] 2xl:ml-[60px] lg:mr-[0px] xl:w-auto xl:max-w-[900px]   mx-auto">
                    {page.page === "loops" && <Loops />}
                    {page.page === "structs" && <Structs />}
                    {page.page === "searching" && <Searching />}
                    {page.page === "sorting" && <Sorting />}
                </div>
            </div>
        );
    } else {
        return <NotFound />
    }
}
 
export default Topics;