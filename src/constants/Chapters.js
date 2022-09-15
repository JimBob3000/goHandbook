const Chapters = ({ currentTopic, setCurrentTopic, currentSubTopic, setCurrentSubTopic }) => {
    return (
        <ul className="space-y-9">
            <li>
                <h5 className="lg:mb-3 font-semibold text-slate-800 dark:text-slate-200">Loops</h5>
                <ul className="mt-4  border-l-2 border-slate-100">
                    <li className="leading-9"><a className={currentSubTopic === "for" ? "active" : "inactive"} href="/loops?section=for">For Loop</a></li>
                    <li className="leading-9"><a className={currentSubTopic === "forEach" ? "active" : "inactive"} href="/loops?section=forEach">For Each Loop</a></li>
                    <li className="leading-9"><a className={currentSubTopic === "while" ? "active" : "inactive"} href="/loops?section=while">While Loop</a></li>
                    <li className="leading-9"><a className={currentSubTopic === "infinite" ? "active" : "inactive"} href="/loops?section=infinite">Infinite Loop</a></li>
                </ul>
            </li>
            <li>
                <h5 className="lg:mb-3 font-semibold text-slate-800 dark:text-slate-200">Structs</h5>
                <ul className="mt-4  border-l-2 border-slate-100">
                    <li className="leading-9"><a className={currentSubTopic === "struct" ? "active" : "inactive"} href="/structs?section=struct">Struct</a></li>
                    <li className="leading-9"><a className={currentSubTopic === "embeddedStruct" ? "active" : "inactive"} href="/structs?section=embeddedStruct">Embedded Struct</a></li>
                </ul>
            </li>
            <li>
                <h5 className="lg:mb-3 font-semibold text-slate-800 dark:text-slate-200">Sorting</h5>
                <ul className="mt-4  border-l-2 border-slate-100">
                    <li className="leading-9"><a className={currentSubTopic === "bubble" ? "active" : "inactive"} href="/sorting?section=bubble">Bubble Sort</a></li>
                    <li className="leading-9"><a className={currentSubTopic === "insertion" ? "active" : "inactive"} href="/sorting?section=insertion">Insertion Sort</a></li>
                    <li className="leading-9"><a className={currentSubTopic === "cocktail" ? "active" : "inactive"} href="/sorting?section=cocktail">Cocktail Sort</a></li>
                </ul>
            </li>
            <li>
                <h5 className="lg:mb-3 font-semibold text-slate-800 dark:text-slate-200">Searching</h5>
                <ul className="mt-4  border-l-2 border-slate-100">
                    <li className="leading-9"><a className={currentSubTopic === "linear" ? "active" : "inactive"} href="/searching?section=linear">Linear Search</a></li>
                    <li className="leading-9"><a className={currentSubTopic === "jump" ? "active" : "inactive"} href="/searching?section=jump">Jump Search</a></li>
                    <li className="leading-9"><a className={currentSubTopic === "binary" ? "active" : "inactive"} href="/searching?section=binary">Binary Search</a></li>
                </ul>
            </li>
            <hr />
            <li>
                <ul className="mt-4  border-l-2 border-slate-100">
                    <h5 className="lg:mb-3 font-semibold text-slate-800 dark:text-slate-200">Other Pages</h5>
                    <li className="leading-9"><a className={currentTopic === "home" ? "active" : "inactive"} href="/home">Home</a></li>
                    <li className="leading-9"><a className="inactive" href="/about">About</a></li>
                </ul>
            </li>
        </ul>
    );
}

export default Chapters;