import {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import './acc.css'

const LogoAcc = () => {
    const [logo,setLogo] = useState(process.env.PUBLIC_URL+"/img/logo_round.svg");
    const [ready,setReady] = useState(false);
    const CheckLogo = (event) => {
        let reader = new FileReader();
        let baseString;
        reader.onloadend = function () {
            baseString = reader.result;
            console.log(baseString);
            localStorage.setItem('logo_acc',baseString);
        };
        reader.readAsDataURL(event);
    }
    useEffect(()=>{
        if(localStorage.getItem('logo_acc')) {
            setLogo(localStorage.getItem('logo_acc'));
            setReady(true);
        };
    },[])
    return(
        <>
            <div className="main__nav">
                <p className="nav"><b className="b-color">Главная  /</b>  <Link to="/">Конструктор бейджиков /</Link>  Логотип</p>
            </div>
            <div className="main__block">
                <h1>[Этап 1/4] Загрузка логотипа</h1>
                <p className="sub_content">Этап 1/4. Загрузите ваш логотип организации/компаний</p>
                <div className="main__block_interface_menu c-m">
                    <div className="main__block_interface_menu_c">
                        <h1>Загрузка логотипа</h1>
                    </div>
                    <div className="main__block_interface_menu_c">
                        <label htmlFor="logoPreview">
                            <img className="main__block_interface_menu_logo_icon_img" src={process.env.PUBLIC_URL+"/img/add_a_photo.svg" } alt="icon" />
                        </label>
                        <input style={{display:'none'}} name="logoPreview" id="logoPreview" accept="image/*" type='file' onChange={(event)=>{setLogo(URL.createObjectURL(event.target.files[0]));CheckLogo(event.target.files[0]);setReady(true)}} />
                        <img className="main__block_interface_menu_logo_img" src={logo} alt="logo" />
                    </div>
                    <div className="main__block_interface_menu_c_end flex">
                        <Link to="/size" className="main__block_interface_btn_back">Пропустить</Link>
                        {!ready ? <button className="main__block_interface_btn_forward">Продолжить</button>: <Link to="/size" className="main__block_interface_btn_forward">Продолжить</Link>}
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default LogoAcc;