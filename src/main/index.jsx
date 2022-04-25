import { Routes,Route } from "react-router-dom";
import Acc from "./acc";
import Logo from "./acc/logo";


const Main = () => {
    return(
        <main>
            <Routes>
                <Route path={"/"} element={<Acc/>}/>
                <Route path={"/logo"} element={<Logo/>}/>
            </Routes>
        </main>
    );
}

export default Main;