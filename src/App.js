function App() {
  return (
    <div>
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
      <div className="header__search_menu">
        <div className="header__search_menu_pic">
          <img loading="lazy" className="header__search_menu_img" src={process.env.PUBLIC_URL+"/img/menu.svg"} alt="icon" />
        </div>
        <span className="header__search_menu_text">Menu</span>
        <div className="header__search_menu_pic" id="search_top">
          <img loading="lazy" className="header__search_menu_img" src={process.env.PUBLIC_URL+"/img/top.svg"} alt="icon" />
        </div>
      </div>
      <input placeholder="Search over 30 million book titles" className="header__search_input" type="text" />
      <button className="header__search_button">
        <img loading="lazy" src={process.env.PUBLIC_URL+"/img/search.svg"} alt="icon" />
      </button>
    </div>
  </header>
  <main>
    <div className="main__nav">
      <span><b className="b-color">Home /</b> Books</span>
    </div>
  </main>
</div>

  );
}

export default App;
