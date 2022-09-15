import SideMenu from "../../components/SideMenu";
const Home = () => {
    return ( 
        <div className="xl:px-auto relative mx-auto flex justify-center lg:justify-start xl:justify-center sm:px-2 lg:px-8">
            <SideMenu currentTopic="home" />
            <div className="px-6 md:px-6 lg:px-0 py-16 text-slate-800 md:w-[700px] lg:w-full lg:ml-[30px] 2xl:ml-[60px] lg:mr-[0px] xl:w-auto xl:max-w-[900px]   mx-auto">
                <div>
                    <p className="mb-2 text-sm leading-6 font-semibold text-sky-500">Home</p>
                    <h1 className="text-3xl sm:text-3xl font-medium text-slate-800 pb-8">Welcome</h1>
                    <p className="text-[#334155]">Welcome to the GoLang Handbook, the go to place for Go code examples.</p>
                    <p className="text-[#334155] pt-3">To begin, select a topic on the left.</p>
                </div>
            </div>

        </div>
    );
}
 
export default Home;