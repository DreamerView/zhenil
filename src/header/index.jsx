import { useState,useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const [result,setResult] = useState("");
  const checkMode = useMediaQuery({query:'(prefers-color-scheme: dark)'});
  useEffect(()=>{
        checkMode===true?setResult("-night"):setResult("");
  },[checkMode])
  useEffect(()=>{
    console.log('Rendered')
  },[])
    return(
        <header>
    <div className="header__logo">
      <div className="header__logo_pic">
        <img loading="lazy" className="header__logo_img" src={process.env.PUBLIC_URL+"/img/logo"+result+".webp"} alt="Logo" />
      </div>
    </div>
    <div className="header__action">
      <img loading="lazy" className="header__action_avatar" src={process.env.PUBLIC_URL+"/img/3600ABB7-7824-467A-BB26-6E86CDD1EC91.webp"} alt="" />
      <div className="header__action_block">
        <span className="header__action_block_text">EN</span>
        <div className="header__search_menu_pic">
          <img className="header__search_menu_img" src={process.env.PUBLIC_URL+"/img/top"+result+".svg"} alt="icon" />
        </div>
      </div>
    </div>
    <div className="header__search">
      <input placeholder="Search over 30 million book titles" className="header__search_input" type="text" />

      <div className="header__search_menu">
        <div className="header__search_menu_pic" id="search_menu">
          <img loading="lazy" className="header__search_menu_img" src={process.env.PUBLIC_URL+"/img/menu"+result+".svg"} alt="icon" />
        </div>
        <span className="header__search_menu_text">Menu</span>
      </div>
    </div>
  </header>
    );
}

export default Header;