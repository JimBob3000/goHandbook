import React from 'react';
import NotFound from './components/NotFound';
import SideMenu from "../../components/SideMenu";
import Home from "./components/Home";
import Loops from "./components/Loops";
import Structs from "./components/Structs";
import Searching from "./components/Searching";
import Sorting from "./components/Sorting";
import { useCallback } from 'react';

const Topics = ({ currentTopic, setCurrentTopic, currentSubTopic, setCurrentSubTopic }) => {
    // const topic = window.location.pathname.substring(1).toLowerCase()
    // const subTopic = new URLSearchParams(window.location.search).get("section")
    
    // const [currentTopic, setCurrentTopic] = useState(topic)
    // const [currentSubTopic, setCurrentSubTopic] = useState(subTopic)

    const ActiveTopic = useCallback(() => {
        switch (currentTopic) {
            case "":
                return ( <Home /> );
            case "home":
                return ( <Home /> );
            case "loops":
                return ( <Loops subTopic={currentSubTopic} /> );
            case "structs":
                return ( <Structs subTopic={currentSubTopic} /> );
            case "searching":
                return ( <Searching subTopic={currentSubTopic} /> );
            case "sorting":
                return ( <Sorting subTopic={currentSubTopic} /> );
            default:
                return ( <NotFound /> );
        }
    }, [currentTopic, currentSubTopic]);

    return (
        <div className="xl:px-auto relative mx-auto flex justify-center lg:justify-start xl:justify-center sm:px-2 lg:px-8">
            <SideMenu 
                currentTopic={currentTopic} 
                setCurrentTopic={setCurrentTopic}
                currentSubTopic={currentSubTopic} 
                setCurrentSubTopic={setCurrentSubTopic}
            />
            <div className="px-6 md:px-6 lg:px-0 py-16 text-slate-800 md:w-[700px] lg:w-full lg:ml-[30px] 2xl:ml-[60px] lg:mr-[0px] xl:max-w-[900px] mx-auto">
                <ActiveTopic />
            </div>
        </div>
    )
}
 
export default Topics;