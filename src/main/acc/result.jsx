const ResultAcc = () => {
    return(
        <>
             <iframe id="frame" title="converter result" src={process.env.PUBLIC_URL+"/convert.html"} width={842} height={595} align="left">
                Ваш браузер не поддерживает плавающие фреймы!
            </iframe>
        </>
    );
};

export default ResultAcc;