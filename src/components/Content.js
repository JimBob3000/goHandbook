const Content = (page) => {
    return (
        <div className="px-6 md:px-6 lg:px-0 py-16 text-slate-800 md:w-[700px] lg:w-full lg:ml-[30px] 2xl:ml-[60px] lg:mr-[0px] xl:w-auto xl:max-w-[900px]   mx-auto">

            {page.page === "Home" &&
                <div>
                    <p className="mb-2 text-sm leading-6 font-semibold text-sky-500">Home</p>
                    <h1 className="text-3xl sm:text-3xl font-medium text-slate-800 pb-8">Welcome</h1>
                    <p className="text-[#334155]">Welcome to the GoLang Handbook, the go to place for Go code examples and explanations. To begin, select a topic on the left.</p>
                    
                </div>
            }   

            {page.page === "Sorting" &&
                <div>
                    <p className="mb-2 text-sm leading-6 font-semibold text-sky-500">Sorting</p>
                    <h1 className="text-3xl sm:text-3xl font-medium text-slate-800 pb-8">Sorting Algorithms In Go</h1>
                    <p className="text-[#334155]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum.</p>
                    
                    <hr className="my-14"></hr>

                    <h2 className="text-2xl font-medium pb-8 text-slate-800">Bubble Sort</h2>
                    <p className="pb-4 text-[#334155]"> Interdum velit euismod in pellentesque massa placerat duis. At ultrices mi tempus imperdiet nulla malesuada pellentesque.</p>

                    <hr className="my-14"></hr>

                    <h2 className="text-2xl font-medium pb-8 text-slate-800">Insertion Sort</h2>
                    <p className="pb-4 text-[#334155]"> Interdum velit euismod in pellentesque massa placerat duis. At ultrices mi tempus imperdiet nulla malesuada pellentesque.</p>
                    
                    <hr className="my-14"></hr>
                    
                    <h2 className="text-2xl font-medium pb-8 text-slate-800">Cocktail Sort</h2>
                    <p className="pb-4 text-[#334155]"> Interdum velit euismod in pellentesque massa placerat duis. At ultrices mi tempus imperdiet nulla malesuada pellentesque.</p>
                    
                    {/* <div className="bg-[#0f172a] px-4 py-3 rounded-xl">
                        <code>
                            <p className="text-[#94a3b8]">// This is a comment<br />
                            <span className="text-[#21618C]">package</span> <span className="text-[#F2F3F4]">main</span><br />
                            ;<br />
                            dsf</p>
                        </code>
                    </div> */}
                </div>
            }   
        </div>
    );
}

export default Content;