function App() {
  return (
    <>
  <header>
    <div className="header__logo">
      <div className="header__logo_pic">
        <img loading="lazy" className="header__logo_img" src={process.env.PUBLIC_URL+"/img/logo.png"} alt="Logo" />
      </div>
    </div>
    <div className="header__action">
      <img loading="lazy" className="header__action_avatar" src={process.env.PUBLIC_URL+"/img/3600ABB7-7824-467A-BB26-6E86CDD1EC91.png"} alt="" />
      <div className="header__action_block">
        <span className="header__action_block_text">EN</span>
        <div className="header__search_menu_pic">
          <img className="header__search_menu_img" src={process.env.PUBLIC_URL+"/img/top.svg"} alt="icon" />
        </div>
      </div>
    </div>
    <div className="header__search">
      <input placeholder="Search over 30 million book titles" className="header__search_input" type="text" />

      <div className="header__search_menu">
        <div className="header__search_menu_pic" id="search_menu">
          <img loading="lazy" className="header__search_menu_img" src={process.env.PUBLIC_URL+"/img/menu.svg"} alt="icon" />
        </div>
        <span className="header__search_menu_text">Menu</span>
      </div>
    </div>
  </header>
  <main>
    <div className="main__nav">
      <span><b className="b-color">Home /</b> Books</span>
    </div>
    <div className="main__block">
      <h1>Конструктор бейджиков/аккредитации</h1>
      <p className="sub_content">Выберите на сколько людей нужно это сделать?</p>
      <div className="main__block_menu_select">
        <div className="main__block_menu_select_block green_back">
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
        </div>
        <div className="main__block_menu_select_block purple_back">
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
        </div>
        <div className="main__block_menu_select_block blue_back">
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
        </div>
      </div>
    </div>
  </main>
</>

  );
}

export default App;
