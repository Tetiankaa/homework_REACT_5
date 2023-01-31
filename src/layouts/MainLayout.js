import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";

const MainLayout = () => {
    return (
        <div>

            <Header/>
           <Outlet/>
            <h1 style={{color:'purple'}}>Hello</h1>
        </div>
    );
};

export {MainLayout};