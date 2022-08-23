import SideMenu from "./SideMenu";
import Content from "./Content";

const Page = (page) => {
    return ( 
        <div className="xl:px-auto relative mx-auto flex justify-center lg:justify-start xl:justify-center sm:px-2 lg:px-8">
            <SideMenu />
            <Content page={page.page}/>
        </div>
    );
}
 
export default Page;