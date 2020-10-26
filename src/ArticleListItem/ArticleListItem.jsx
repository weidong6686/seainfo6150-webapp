import React, { useState } from "react";
import PropTypes from "prop-types";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton.jsx"
import styles from "./ArticleListItem.module.css"

const ArticleListItem = (props) => {
    const [display, setDisplay] = useState(false);
    console.log('display', display)

    return (
        <li className={styles.item}>
            <article>
                <h2 className={styles.title}>{props.article.title}</h2>
                {display ?
                    <div className={styles.content}>
                        <p>{props.article.shortText}</p>
                        <time className={styles.time} dateTime={props.article.timeStamp}>
                            {props.article.displayDate}
                        </time>
                    </div>
                    :
                    ""}
                
                <ArticleTextToggleButton buttonText={display ? 'Show less' : "Show more"} onClick={() => setDisplay(!display)}></ArticleTextToggleButton>
            </article>
        </li>
    );
};

ArticleListItem.propTypes = {
    article: PropTypes.object.isRequired,
};
export default ArticleListItem;
