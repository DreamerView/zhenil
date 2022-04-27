const Preloader = () => {
    return(
        <div className="main__preloader">
            <img className="main__preloader_pic" src={process.env.PUBLIC_URL+"/img/preloader-night.svg"} alt="preloader-icon"/>
        </div>
    )
};

export default Preloader