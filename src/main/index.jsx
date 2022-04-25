import { Routes,Route } from "react-router-dom";
import Acc from "./acc";
import LogoAcc from "./acc/logo";
import SizeAcc from "./acc/size";


const Main = () => {
    return(
        <main>
            <Routes>
                <Route path={"/"} element={<Acc/>}/>
                <Route path={"/logo"} element={<LogoAcc/>}/>
                <Route path={"/size"} element={<SizeAcc/>}/>
            </Routes>
        </main>
    );
}

export default Main;