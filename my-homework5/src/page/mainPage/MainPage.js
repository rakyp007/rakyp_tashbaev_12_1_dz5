import React , {useState} from "react";
import News from "../../components/news/News";
import classes from "./Mainpage.module.css"


function MainPage () {
    const [news , setNews] = useState ([]);

    const getNews = (e) => {
        e.preventDefault();
        setNews (["about" ,"lorem","home","about"])


    }

    return (
        <div className={classes.MainCss}>
            <h1>MainPage</h1>
            <News propNews={news} getNewsProp = {getNews}/>

        </div>
    )

}
export default MainPage;