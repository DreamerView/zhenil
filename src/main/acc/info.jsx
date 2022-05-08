import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './acc.css'

const InfoAcc = () => {
    const [logo,setLogo] = useState(process.env.PUBLIC_URL+"/img/logo_round.svg");
    const [ready,setReady] = useState(false);
    const [name,setName] = useState('Введите имя');
    const [surname,setSurname] = useState('Введите фамилию');
    const [status,setStatus] = useState('Необзязательное поле')
    const CheckAvatar = (event) => {
        let reader = new FileReader();
        let baseString;
        reader.onloadend = function () {
            baseString = reader.result;
            console.log(baseString);
            localStorage.setItem('avatar_acc',baseString);
        };
        reader.readAsDataURL(event);
    }
    useEffect(()=>{
        if(localStorage.getItem('avatar_acc')) {
            setLogo(localStorage.getItem('avatar_acc'));
            setReady(true);
        };
        if(localStorage.getItem('person_name_acc')) setName(localStorage.getItem('person_name_acc'));
        if(localStorage.getItem('person_surname_acc')) setSurname(localStorage.getItem('person_surname_acc'));
        if(localStorage.getItem('person_status_acc')) setStatus(localStorage.getItem('person_status_acc'));
    },[])
    return(
        <div>
            <div className="main__nav">
            <p className="nav"><b className="b-color">Главная  /</b>  <Link to="/">Конструктор бейджиков /</Link>  <Link to="/logo">Логотип /</Link>  <Link to="/size">Размер /</Link>  Информация</p>
            </div>
            <div className="main__block">
                <h1>[Этап 3/4] Заполнение информации</h1>
                <p className="sub_content">Этап 3/4. Заполните все необходимые информации о пользователе</p>
                <div className="main__block_interface_menu c-m">
                    <div className="main__block_interface_menu_c">
                        <h1>Заполнение информации</h1>
                    </div>
                    <div className="main__block_interface_menu_c_info_block">
                        <div className="main__block_interface_menu_c_info_block_avatar">
                            <label htmlFor="logoPreview">
                                <img className="main__block_interface_menu_logo_icon_img" src={process.env.PUBLIC_URL+"/img/add_a_photo.svg" } alt="icon" />
                            </label>
                            <input style={{display:'none'}} name="logoPreview" id="logoPreview" accept="image/*" type='file' onChange={(event)=>{setLogo(URL.createObjectURL(event.target.files[0]));setReady(true);CheckAvatar(event.target.files[0]);}} />
                            <img className="main__block_interface_menu_logo_img" src={logo} alt="logo" />
                            <p className="sub_content">Выберите фото</p>
                        </div>
                        <div className="main__block_interface_menu_c_info_block_text">
                            <div className="main__block_interface_menu_c_s flex">
                                <input className="main__block_interface_menu_c_s_i" placeholder={name} onChange={(e)=>{localStorage.setItem('person_name_acc',e.target.value)}} type="text" name="" id="" />
                                <span className="main__block_interface_menu_c_s_t">Имя</span>
                            </div>
                            <div className="main__block_interface_menu_c_s flex">
                                <input className="main__block_interface_menu_c_s_i" placeholder={surname} onChange={(e)=>{localStorage.setItem('person_surname_acc',e.target.value)}} type="text" name="" id="" />
                                <span className="main__block_interface_menu_c_s_t">Фамилия</span>
                            </div>
                            <div className="main__block_interface_menu_c_s flex">
                                <input className="main__block_interface_menu_c_s_i" placeholder={status} onChange={(e)=>{localStorage.setItem('person_status_acc',e.target.value)}} type="text" name="" id="" />
                                <span className="main__block_interface_menu_c_s_t">Должность</span>
                            </div>
                        </div>
                    </div>
                    <div className="main__block_interface_menu_c_end flex">
                        <Link to="/size" className="main__block_interface_btn_back_red">Назад</Link>
                        {!ready ? <button className="main__block_interface_btn_forward">Продолжить</button>: <Link to="/result" className="main__block_interface_btn_forward">Продолжить</Link>}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoAcc;