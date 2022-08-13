import Chapters from './Chapters';

const Menu = ({open, onClick}) => {
    return ( 
        <div>
            <div id="blur" onClick={onClick} className={`lg:hidden fixed z-10 top-[80px] left-0 w-full h-[calc(100%-80px)] backdrop-blur ${open ? "" : "hidden"}`}>
                <div id="menu" className={`fixed z-20 left-0 h-full w-[300px] overflow-y-scroll pl-6 pt-3 pb-12 bg-white  ${open ? "" : "hidden"}`}>
                    <Chapters />
                </div>
            </div>
            
        </div>
    );
}
 
export default Menu;