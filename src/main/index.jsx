import {lazy,Suspense} from 'react';
import { Routes,Route } from "react-router-dom";
import Preloader from './preloader';
const Acc = lazy(()=>import('./acc'));
const LogoAcc = lazy(()=>import('./acc/logo'));
const SizeAcc = lazy(()=>import('./acc/size'));


const Main = () => {
    return(
        <main>
            <Routes>
                <Route path={"/"} element={<Suspense fallback={<Preloader/>}><Acc/></Suspense>}/>
                <Route path={"/logo"} element={<Suspense fallback={<Preloader/>}><LogoAcc/></Suspense>}/>
                <Route path={"/size"} element={<Suspense fallback={<Preloader/>}><SizeAcc/></Suspense>}/>
            </Routes>
        </main>
    );
}

export default Main;