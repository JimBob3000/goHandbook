import Chapters from '../constants/Chapters';

const SideMenu = ({ currentTopic, setCurrentTopic, currentSubTopic, setCurrentSubTopic }) => {
    return ( 
        <div className="hidden lg:block w-[300px] min-w-[300px]">
            <div id="menu" className="xl:fixed xl:min-w-[300px] fixed left:0 hidden lg:block w-[300px] top-[80px] xl:top-[80px] h-[calc(100%-80px)] xl:h-[calc(100vh-80px)] overflow-y-scroll py-16">
                <Chapters 
                    currentTopic={currentTopic} 
                    setCurrentTopic={setCurrentTopic}
                    currentSubTopic={currentSubTopic} 
                    setCurrentSubTopic={setCurrentSubTopic}
                />
            </div>
        </div>
    );
}
 
export default SideMenu;