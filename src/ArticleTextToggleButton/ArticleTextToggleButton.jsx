import React, {useState} from "react";
import styles from "./ArticleTextToggleButton.module.css"

const ArticleTextToggleButton = (props) => {
    const [display, setDisplay] = useState();

    console.log('display', display)
    return (
        <div onClick = {() => setDisplay(!display)}>
        {display ? 
            
            <div>
                <p>{props.article.shortText}</p>
                <time className={styles.time}>{props.article.displayDate}</time>
                <br /><br />
                <button className={styles.button}>Show less</button>
            </div>
            : 
            <div><button className={styles.button}>Show more</button></div>

        }
        </div>
    );
};

export default ArticleTextToggleButton;
