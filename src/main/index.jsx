import {lazy,Suspense} from 'react';
import { Routes,Route } from "react-router-dom";
const Acc = lazy(()=>import('./acc'));
const LogoAcc = lazy(()=>import('./acc/logo'));
const SizeAcc = lazy(()=>import('./acc/size'));


const Main = () => {
    return(
        <main>
            <Routes>
                <Route path={"/"} element={<Suspense fallback={<div>Загрузка</div>}><Acc/></Suspense>}/>
                <Route path={"/logo"} element={<Suspense fallback={<div>Загрузка</div>}><LogoAcc/></Suspense>}/>
                <Route path={"/size"} element={<Suspense fallback={<div>Загрузка</div>}><SizeAcc/></Suspense>}/>
            </Routes>
        </main>
    );
}

export default Main;