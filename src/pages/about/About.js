const About = () => {
    return ( 
        <section id="about" className="flex-grow">
            <div className="text-center mx-auto pt-10">
                <h1 className="text-3xl text-gray-900 pb-12">About</h1>
                <p className="pb-4">Hi! My name is James and I built this website.</p>
                <p className="pb-4">I intend for it to serve as a quick lookup for the Go language.</p>
                <p className="pb-4">You can check out my GitHub profile by clicking my name in the header bar.</p>
                
                <h1 className="text-3xl text-gray-900 py-12">Nerdy bit</h1>
                <p className="pb-4">I made this site to give me a practical learning experience with <b>React</b> whilst also learning <b>GoLang</b>.</p>
                <p className="pb-4">Its contents will build up over time as my goMiniProjects repository grows.</p>
                <p className="pb-4"><b>GitHub</b> holds the goMiniProjects repositroy along with this sites repository.</p>
                <p className="pb-4">Finally, everything is presented on <b>dedicated hosting</b> secured with <b>SSL</b>.</p>
                
                <p className="py-12">Thanks for visiting!</p>
                
                <p className="pb-12">
                    <a href="/home" className="rounded-lg text-white bg-[#0ea5e9] hover:bg-[#1baff3] transition duration-500 mx-auto px-12 py-2 my-8 font-medium">Home</a>
                </p>
            </div>
        </section>
     );
}
 
export default About;