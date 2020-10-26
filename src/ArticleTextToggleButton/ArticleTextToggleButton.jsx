import React from "react";
import styles from "./ArticleTextToggleButton.module.css"

const ArticleTextToggleButton = (props) => {

    return (
        <div>
            <button className={styles.button} onClick={props.onClick}>{props.buttonText}</button>
        </div>
    );
};

export default ArticleTextToggleButton;
