import { useState } from 'react';
import { Link } from 'react-router-dom';
import './acc.css'

const InfoAcc = () => {
    const [logo,setLogo] = useState(process.env.PUBLIC_URL+"/img/logo_round.svg");
    const [ready,setReady] = useState(false);
    return(
        <div>
            <div className="main__nav">
                <p><b className="b-color">Home /</b> Books</p>
            </div>
            <div className="main__block">
                <h3>[Этап 3/4] Заполнение информации</h3>
                <p className="sub_content">Этап 3/4. Заполните все необходимые информации о пользователе</p>
                <div className="main__block_interface_menu c-m">
                    <div className="main__block_interface_menu_c">
                        <h3>Заполнение информации</h3>
                    </div>
                    <div className="main__block_interface_menu_c_info_block">
                        <div className="main__block_interface_menu_c_info_block_avatar">
                            <label htmlFor="logoPreview">
                                <img className="main__block_interface_menu_logo_icon_img" src={process.env.PUBLIC_URL+"/img/add_a_photo.svg" } alt="icon" />
                            </label>
                            <input style={{display:'none'}} name="logoPreview" id="logoPreview" accept="image/*" type='file' onChange={(event)=>{setLogo(URL.createObjectURL(event.target.files[0]));setReady(true);}} />
                            <img className="main__block_interface_menu_logo_img" src={logo} alt="logo" />
                        </div>
                        <div className="main__block_interface_menu_c_info_block_text">
                            <div className="main__block_interface_menu_c_s flex">
                                <input className="main__block_interface_menu_c_s_i" placeholder="Введите имя" type="text" name="" id="" />
                                <span className="main__block_interface_menu_c_s_t">Имя</span>
                            </div>
                            <div className="main__block_interface_menu_c_s flex">
                                <input className="main__block_interface_menu_c_s_i" placeholder="Введите фамилию" type="text" name="" id="" />
                                <span className="main__block_interface_menu_c_s_t">Фамилия</span>
                            </div>
                            <div className="main__block_interface_menu_c_s flex">
                                <input className="main__block_interface_menu_c_s_i" placeholder="Необзязательное поле" type="text" name="" id="" />
                                <span className="main__block_interface_menu_c_s_t">Должность</span>
                            </div>
                        </div>
                    </div>
                    <div className="main__block_interface_menu_c flex">
                        <button className="main__block_interface_btn_back">Пропустить</button>
                        {!ready ? <button className="main__block_interface_btn_forward">Продолжить</button>: <Link to="/size" className="main__block_interface_btn_forward">Продолжить</Link>}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoAcc;