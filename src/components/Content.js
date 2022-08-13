const Content = () => {
    return (
        <div className="px-6 md:px-6 lg:px-0 py-16 text-slate-800 md:w-[700px] lg:w-full lg:ml-[30px] 2xl:ml-[60px] lg:mr-[0px] xl:w-auto xl:max-w-[900px]   mx-auto">
                <p className="mb-2 text-sm leading-6 font-semibold text-sky-500">Section Title</p>
                <h1 className="text-3xl sm:text-3xl font-medium text-slate-800 pb-8">Subsection Title</h1>
                <p className="text-[#334155]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum.</p>
                
                <hr className="my-14"></hr>

                <h2 className="text-2xl font-medium pb-8 text-slate-800">Something else a bit smaller</h2>
                <p className="pb-4 text-[#334155]"> Interdum velit euismod in pellentesque massa placerat duis. At ultrices mi tempus imperdiet nulla malesuada pellentesque.</p>

                <div className="bg-[#0f172a] px-4 py-3 rounded-xl">
                    <code>
                        <p className="text-[#94a3b8]">
                            // This is a comment<br />
                            <span className="text-[#21618C]">package</span> <span className="text-[#F2F3F4]">main</span>
                        </p>
                    </code>
                </div>
                <hr className="my-14"></hr>
                <h2 className="text-2xl font-medium  text-slate-800 pb-8">Something else a bit smaller</h2>
                <p className=" pb-4"> Iaculis eu non diam phasellus vestibulum lorem sed risus. Lacinia at quis risus sed vulputate odio ut enim blandit. Convallis convallis tellus id interdum. Neque volutpat ac tincidunt vitae semper quis. Odio tempor orci dapibus ultrices in iaculis. Fermentum iaculis eu non diam phasellus vestibulum lorem. Vel pretium lectus quam id leo in vitae. A cras semper auctor neque vitae.</p>
                <p className=" pb-4"> Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Pulvinar etiam non quam lacus suspendisse faucibus. Augue neque gravida in fermentum. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. </p>
                <div className="bg-[#0f172a] px-4 py-3 rounded-xl">
                    <code>
                        <p className="text-[#94a3b8]">// This is a comment<br />
                        <span className="text-[#21618C]">package</span> <span className="text-[#F2F3F4]">main</span><br />
                        ;<br />
                        dsf</p>
                    </code>
                </div>

        </div>
    );
}

export default Content;