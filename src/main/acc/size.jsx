import { useState } from "react";
import { Link } from "react-router-dom";
import './acc.css'

const SizeAcc = () => {
    const [select,setSelect] = useState(true);
    return(
    <>
        <>
            <div className="main__nav">
                <p><b className="b-color">Home /</b> Books</p>
            </div>
            <div className="main__block">
                <h3>[Этап 2/4] Выбор ориентации и размер бумаги</h3>
                <p className="sub_content">Этап 2/4. Выберите ориентацию и размер вашей бумаги</p>
                <div className="main__block_interface_menu c-m">
                    <div className="main__block_interface_menu_c">
                        <h3>Выбор ориентации бумаги</h3>
                    </div>

                    <div className="main__block_interface_menu_c flex">
                        <label className="main__block_i_l">
                            <input type="radio" name="choice" id="bookChoice" />
                            <div className="main__block_interface_menu_c_book choice_land">
                                <div className="main__block_interface_menu_c_book_block"></div>
                                <span>Книжная</span>
                            </div>
                        </label>
                        
                        <label className="main__block_i_l">
                            <input type="radio" name="choice" id="albumChoice" />
                            <div className="main__block_interface_menu_c_album choice_land">
                                <div className="main__block_interface_menu_c_album_block"></div>
                                <span>Альбомная</span>
                            </div>
                        </label>
                        
                    </div>

                    <div className="main__block_interface_menu_c">
                        <select defaultValue="Choose-origin" onChange={()=>setSelect(false)} className="main__block_interface_menu_c_select" name="" id="">
                            <option value="Choose-origin" disabled>Выберите единицу измерения</option>
                            <option value="sm">Сантиментр (см)</option>
                            <option value="dm">Дециметр (дм)</option>
                            <option value="pix">Пискель (pix)</option>
                        </select>
                        {!select?<>
                            <div className="main__block_interface_menu_c_s flex">
                                <input disabled={select} className="main__block_interface_menu_c_s_i" placeholder="Введите ширину" type="text" name="" id="" />
                                <span className="main__block_interface_menu_c_s_t">Ширина</span>
                            </div>
                            <div className="main__block_interface_menu_c_s flex">
                                <input disabled={select} className="main__block_interface_menu_c_s_i" placeholder="Введите высоту" type="text" name="" id="" />
                                <span className="main__block_interface_menu_c_s_t">Высота</span>
                            </div>
                        </>:''}

                    </div>
                    
                    <div className="main__block_interface_menu_c_end flex">
                        <Link to="/logo" className="main__block_interface_btn_back_red">Назад</Link>
                        {/* <button className="main__block_interface_btn_forward">Продолжить</button> */}
                        <Link to="/info" className="main__block_interface_btn_forward">Продолжить</Link>
                        
                    </div>
                </div>
            </div>
        </>
    </>
    );
}
export default SizeAcc;