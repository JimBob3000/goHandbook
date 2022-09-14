import SideMenu from "../../components/SideMenu";
import Content from "./components/Content";

const Topics = (page) => {
    return ( 
        <div className="xl:px-auto relative mx-auto flex justify-center lg:justify-start xl:justify-center sm:px-2 lg:px-8">
            <SideMenu />
            <Content page={page.page}/>
        </div>
    );
}
 
export default Topics;