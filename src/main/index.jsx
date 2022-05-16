import {lazy,Suspense,useState,useMemo} from 'react';
import { useMediaQuery } from 'react-responsive';
import { Routes,Route } from "react-router-dom";
const Acc = lazy(()=>import('./acc'));
const LogoAcc = lazy(()=>import('./acc/logo'));
const SizeAcc = lazy(()=>import('./acc/size'));
const InfoAcc = lazy(()=>import('./acc/info'));
const ResultAcc = lazy(()=>import('./acc/result'));

const Preloader = () => {
    const [result,setResult] = useState("#4634bc");
    const checkMode = useMediaQuery({query:'(prefers-color-scheme: dark)'});
    useMemo(()=>{
        checkMode===true?setResult("#7d7aff"):setResult("#4634bc");
    },[checkMode])
    return(
        <div className="main__preloader">
            <svg className="main__preloader_pic" xmlns="http://www.w3.org/2000/svg" style={{ margin: "auto" }} width="200" height="200" display="block" preserveAspectRatio="xMidYMid" viewBox="0 0 100 100">
                <path fill={result} d="M10 50a40 40 0 0080 0 40 42 0 01-80 0"><animateTransform attributeName="transform" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="rotate" values="0 50 51;360 50 51"/></path>
            </svg>
        </div>
    )
};


const Main = () => {
    return(
        <main>
            <Routes>
                <Route path={"/"} element={<Suspense fallback={Preloader()}><Acc/></Suspense>}/>
                <Route path={"/logo"} element={<Suspense fallback={Preloader()}><LogoAcc/></Suspense>}/>
                <Route path={"/size"} element={<Suspense fallback={Preloader()}><SizeAcc/></Suspense>}/>
                <Route path={"/info"} element={<Suspense fallback={Preloader()}><InfoAcc/></Suspense>}/>
                <Route path={"/result"} element={<Suspense fallback={Preloader()}><ResultAcc/></Suspense>}/>
            </Routes>
        </main>
    );
}

export default Main;