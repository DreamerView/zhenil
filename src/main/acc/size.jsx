import { useState } from "react";
import { Link } from "react-router-dom";

const SizeAcc = () => {
    const [ready] = useState();
    return(
    <>
        <>
            <div className="main__nav">
                <span><b className="b-color">Home /</b> Books</span>
            </div>
            <div className="main__block">
                <h1>[Этап 2/4] Конструктор бейджиков/аккредитации</h1>
                <p className="sub_content">Этап 2/4. Выберите ориентацию и размер вашей бумаги</p>
                <div className="main__block_interface_menu c-m">
                    <div className="main__block_interface_menu_c">
                        <h1>Выбор ориентации бумаги</h1>
                    </div>

                    <div className="main__block_interface_menu_c flex">
                        <div className="main__block_interface_menu_c_book">
                            <div className="main__block_interface_menu_c_book_block">

                            </div>
                            <span className="main__block_interface_menu_cmain__block_interface_menu_c_book_block_text">Книжная</span>
                            
                        </div>
                        
                        <div className="main__block_interface_menu_c_album">
                            <div className="main__block_interface_menu_c_album_block">
                                
                            </div>
                            <span>Альбомная</span>
                        </div>
                        
                    </div>

                    <div className="main__block_interface_menu_c">
                        <div className="main__block_interface_menu_c_s flex">
                            <span className="main__block_interface_menu_c_s_t">Ширина</span>
                            <input className="main__block_interface_menu_c_s_i" placeholder="Введите ширину" type="text" name="" id="" />
                        </div>
                        <div className="main__block_interface_menu_c_s flex">
                            <span className="main__block_interface_menu_c_s_t">Высота</span>
                            <input className="main__block_interface_menu_c_s_i" placeholder="Введите высоту" type="text" name="" id="" />
                        </div>

                    </div>
                    
                    <div className="main__block_interface_menu_c flex">
                        <button className="main__block_interface_btn_back">Пропустить</button>
                        {!ready ? <button className="main__block_interface_btn_forward">Продолжить</button>: <Link to="s" className="main__block_interface_btn_forward">Продолжить</Link>}
                        
                    </div>
                </div>
            </div>
        </>
    </>
    );
}
export default SizeAcc;