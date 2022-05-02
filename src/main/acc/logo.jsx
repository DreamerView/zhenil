import {useState} from "react";
import {Link} from 'react-router-dom';
import './acc.css'

const LogoAcc = () => {
    const [logo,setLogo] = useState(process.env.PUBLIC_URL+"/img/logo_round.svg");
    const [ready,setReady] = useState(false);
    return(
        <>
            <div className="main__nav">
                <p><b className="b-color">Home /</b> Books</p>
            </div>
            <div className="main__block">
                <h3>[Этап 1/4] Конструктор бейджиков/аккредитации</h3>
                <p className="sub_content">Этап 1/4. Загрузите ваш логотип организации/компаний</p>
                <div className="main__block_interface_menu c-m">
                    <div className="main__block_interface_menu_c">
                        <h3>Загрузка логотипа</h3>
                    </div>
                    <div className="main__block_interface_menu_c">
                        <label htmlFor="logoPreview">
                            <img className="main__block_interface_menu_logo_icon_img" src={process.env.PUBLIC_URL+"/img/add_a_photo.svg" } alt="icon" />
                        </label>
                        <input style={{display:'none'}} name="logoPreview" id="logoPreview" accept="image/*" type='file' onChange={(event)=>{setLogo(URL.createObjectURL(event.target.files[0]));setReady(true)}} />
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