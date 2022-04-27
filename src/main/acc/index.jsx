import { Link } from "react-router-dom";
import './acc.css'

const Acc = () => {
    return(
      <>
        <div className="main__nav">
            <span><b className="b-color">Home /</b> Books</span>
        </div>
        <div className="main__block">
            <h3>Конструктор бейджиков/аккредитации</h3>
            <p className="sub_content">Выберите на сколько людей нужно это сделать?</p>
            <div className="main__block_menu_select p-m">
            <div className="main__block_menu_select_block green_back">
            <Link to="logo">
            <div className="main__block_menu_select_block_icon green_temp">
                <img className="main__block_menu_select_block_icon_img" loading="lazy" src={process.env.PUBLIC_URL+"/img/person.svg"} alt="icon"/>
            </div>
            <div className="main__block_menu_select_main">
                <h5>Для одного человека</h5>
            </div>
            <div className="main__block_menu_select_main">
                <p className="main__block_menu_select_main_p">Нужно для одного человека? Не беда, просто используйте наш удобный конструктор и создавайте</p>
            </div>
            <div className="main__block_menu_select_main">
                <button className="main__block_menu_select_main_button green_border">Начать</button>
            </div>
            </Link>
            </div>

            <div className="main__block_menu_select_block purple_back">
            <Link to="logo">
            <div className="main__block_menu_select_block_icon purple_temp">
                <img className="main__block_menu_select_block_icon_img" loading="lazy" src={process.env.PUBLIC_URL+"/img/group.svg"} alt="icon"/>
            </div>
            <div className="main__block_menu_select_main">
                <h5>Для несколько людей</h5>
            </div>
            <div className="main__block_menu_select_main">
                <p className="main__block_menu_select_main_p">Нужно для несколько людей? Не беда, просто используйте наш удобный конструктор и создавайте</p>
            </div>
            <div className="main__block_menu_select_main">
                <button className="main__block_menu_select_main_button purple_border">Начать</button>
            </div>
            </Link>
            </div>

            <div className="main__block_menu_select_block blue_back">
            <Link to="logo">
            <div className="main__block_menu_select_block_icon blue_temp">
                <img className="main__block_menu_select_block_icon_img" loading="lazy" src={process.env.PUBLIC_URL+"/img/help.svg"} alt="icon"/>
            </div>
            <div className="main__block_menu_select_main">
                <h5>Инфографика</h5>
            </div>
            <div className="main__block_menu_select_main">
                <p className="main__block_menu_select_main_p">Хотите подробно узнать как можно использовать конструктор?</p>
            </div>
            <div className="main__block_menu_select_main">
                <button className="main__block_menu_select_main_button blue_border">Начать</button>
            </div>
            </Link>
            </div>

            </div>
        </div>
      </>  
    );
}

export default Acc;