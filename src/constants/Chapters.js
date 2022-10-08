import { useNavigate } from 'react-router-dom';

const Chapters = ({ currentTopic, setCurrentTopic, currentSubTopic, setCurrentSubTopic }) => {
    const navigate = useNavigate();

    const handleNavigation = (topic, subTopic) => {
        setCurrentSubTopic(subTopic)
        setCurrentTopic(topic)

        if (subTopic === "") {
            navigate("/" + topic);
        } else {
            navigate("/" + topic + "?section=" + subTopic);
        }
    }
    
    return (
        <ul className="space-y-9">
            <li>
                <h5 className="lg:mb-3 font-semibold text-slate-800 dark:text-slate-200">Loops</h5>
                <ul className="mt-4  border-l-2 border-slate-100">
                    <li className="leading-9"><a className={currentSubTopic === "for" ? "active" : "inactive"}  onClick={() => handleNavigation("loops", "for")}>For Loop</a></li>
                    <li className="leading-9"><a className={currentSubTopic === "forEach" ? "active" : "inactive"}  onClick={() => handleNavigation("loops", "forEach")}>For Each Loop</a></li>
                    <li className="leading-9"><a className={currentSubTopic === "while" ? "active" : "inactive"}  onClick={() => handleNavigation("loops", "while")}>While Loop</a></li>
                    <li className="leading-9"><a className={currentSubTopic === "infinite" ? "active" : "inactive"}  onClick={() => handleNavigation("loops", "infinite")}>Infinite Loop</a></li>
                </ul>
            </li>
            <li>
                <h5 className="lg:mb-3 font-semibold text-slate-800 dark:text-slate-200">Structs</h5>
                <ul className="mt-4  border-l-2 border-slate-100">
                    <li className="leading-9"><a className={currentSubTopic === "struct" ? "active" : "inactive"} onClick={() => handleNavigation("structs", "struct")}>Struct</a></li>
                    <li className="leading-9"><a className={currentSubTopic === "embeddedStruct" ? "active" : "inactive"} onClick={() => handleNavigation("structs", "embeddedStruct")}>Embedded Struct</a></li>
                </ul>
            </li>
            <li>
                <h5 className="lg:mb-3 font-semibold text-slate-800 dark:text-slate-200">Concurrency</h5>
                <ul className="mt-4  border-l-2 border-slate-100">
                    <li className="leading-9"><a className={currentSubTopic === "goroutine" ? "active" : "inactive"} onClick={() => handleNavigation("concurrency", "goroutine")}>Goroutine</a></li>
                    <li className="leading-9"><a className={currentSubTopic === "anonymousGoroutine" ? "active" : "inactive"} onClick={() => handleNavigation("concurrency", "anonymousGoroutine")}>Anonymous Goroutine</a></li>
                    <li className="leading-9"><a className={currentSubTopic === "waitGroup" ? "active" : "inactive"} onClick={() => handleNavigation("concurrency", "waitGroup")}>WaitGroups</a></li>
                </ul>
            </li>
            <li>
                <h5 className="lg:mb-3 font-semibold text-slate-800 dark:text-slate-200">Sorting</h5>
                <ul className="mt-4  border-l-2 border-slate-100">
                    <li className="leading-9"><a className={currentSubTopic === "bubble" ? "active" : "inactive"} onClick={() => handleNavigation("sorting", "bubble")}>Bubble Sort</a></li>
                    <li className="leading-9"><a className={currentSubTopic === "insertion" ? "active" : "inactive"} onClick={() => handleNavigation("sorting", "insertion")}>Insertion Sort</a></li>
                    <li className="leading-9"><a className={currentSubTopic === "cocktail" ? "active" : "inactive"} onClick={() => handleNavigation("sorting", "cocktail")}>Cocktail Sort</a></li>
                </ul>
            </li>
            <li>
                <h5 className="lg:mb-3 font-semibold text-slate-800 dark:text-slate-200">Searching</h5>
                <ul className="mt-4  border-l-2 border-slate-100">
                    <li className="leading-9"><a className={currentSubTopic === "linear" ? "active" : "inactive"} onClick={() => handleNavigation("searching", "linear")}>Linear Search</a></li>
                    <li className="leading-9"><a className={currentSubTopic === "jump" ? "active" : "inactive"} onClick={() => handleNavigation("searching", "jump")}>Jump Search</a></li>
                    <li className="leading-9"><a className={currentSubTopic === "binary" ? "active" : "inactive"} onClick={() => handleNavigation("searching", "binary")}>Binary Search</a></li>
                </ul>
            </li>
            <hr />
            <li>
                <ul className="mt-4  border-l-2 border-slate-100">
                    <h5 className="lg:mb-3 font-semibold text-slate-800 dark:text-slate-200">Other Pages</h5>
                    <li className="leading-9"><a className={currentTopic === "home" ? "active" : "inactive"} onClick={() => handleNavigation("home", "")}>Home</a></li>
                    <li className="leading-9"><a className="inactive" onClick={() => handleNavigation("about", "")}>About</a></li>
                </ul>
            </li>
        </ul>
    );
}

export default Chapters;