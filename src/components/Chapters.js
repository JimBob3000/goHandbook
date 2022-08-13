const Chapters = () => {
    return (
        // <div className="fixed 2xl:  z-20 inset-0 top-[96px] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto lg:block hidden ">
        // <div className="left-[max(0px,calc(50%-45rem))] fixed w-[300px] top-[96px] left-[max(0px,calc(50%-45rem))] inset-0 pb-10 px-8 overflow-y-auto lg:block hidden">
        //     <div className="lg:text-sm lg:leading-6 relative">
                <ul className="space-y-9">
                    <li>
                        <h5 className="lg:mb-3 font-semibold text-slate-800 dark:text-slate-200">Variables & Constants</h5>
                        <ul className="mt-4  border-l-2 border-slate-100">
                            <li className="leading-9"><a className="active" href="/docs/installation">Var Keyword</a></li>
                            <li className="leading-9"><a className="inactive" href="/docs/editor-setup">Short Variable Declaration</a></li>
                            <li className="leading-9"><a className="inactive" href="/docs/using-with-preprocessors">Const Keyword</a></li>
                            <li className="leading-9"><a className="inactive" href="/docs/using-with-preprocessors">Environment Variables</a></li>
                        </ul>
                    </li>
                    <li>
                        <h5 className="lg:mb-3 font-semibold text-slate-800 dark:text-slate-200">Conditional Statements</h5>
                        <ul className="mt-4  border-l-2 border-slate-100">
                            <li className="leading-9"><a className="inactive" href="/docs/installation">Logical Operators</a></li>
                            <li className="leading-9"><a className="inactive" href="/docs/installation">If</a></li>
                            <li className="leading-9"><a className="inactive" href="/docs/editor-setup">If Else</a></li>
                            <li className="leading-9"><a className="inactive" href="/docs/using-with-preprocessors">Switch</a></li>
                        </ul>
                    </li>
                    <li>
                        <h5 className="lg:mb-3 font-semibold text-slate-800 dark:text-slate-200">Loops</h5>
                        <ul className="mt-4  border-l-2 border-slate-100">
                            <li className="leading-9"><a className="inactive" href="/docs/installation">For Loop</a></li>
                            <li className="leading-9"><a className="inactive" href="/docs/installation">For Each Loop</a></li>
                            <li className="leading-9"><a className="inactive" href="/docs/editor-setup">While</a></li>
                        </ul>
                    </li>


                    <li>
                        <h5 className="lg:mb-3 font-semibold text-slate-800 dark:text-slate-200">MongoDB</h5>
                        <ul className="mt-4  border-l-2 border-slate-100">
                            <li className="leading-9"><a className="inactive" href="/docs/installation">Setup</a></li>
                            <li className="leading-9"><a className="inactive" href="/docs/installation">Create</a></li>
                            <li className="leading-9"><a className="inactive" href="/docs/installation">Read</a></li>
                            <li className="leading-9"><a className="inactive" href="/docs/editor-setup">Update</a></li>
                            <li className="leading-9"><a className="inactive" href="/docs/editor-setup">Delete</a></li>
                        </ul>
                    </li>
                    <li>
                        <h5 className="lg:mb-3 font-semibold text-slate-800 dark:text-slate-200">MySQL</h5>
                        <ul className="mt-4  border-l-2 border-slate-100">
                            <li className="leading-9"><a className="inactive" href="/docs/installation">Setup</a></li>
                            <li className="leading-9"><a className="inactive" href="/docs/installation">Create</a></li>
                            <li className="leading-9"><a className="inactive" href="/docs/installation">Read</a></li>
                            <li className="leading-9"><a className="inactive" href="/docs/editor-setup">Update</a></li>
                            <li className="leading-9"><a className="inactive" href="/docs/editor-setup">Delete</a></li>
                        </ul>
                    </li>

                    <li>
                        <h5 className="lg:mb-3 font-semibold text-slate-800 dark:text-slate-200">Misc.</h5>
                        <ul className="mt-4  border-l-2 border-slate-100">
                            <li className="leading-9"><a className="inactive" href="/docs/installation">Comments</a></li>
                        </ul>
                    </li>
                </ul>
        //     </div>
        // </div>
    );
}

export default Chapters;