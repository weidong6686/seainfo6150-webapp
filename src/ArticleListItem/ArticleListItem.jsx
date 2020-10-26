import React from "react";
import PropTypes from "prop-types";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton.jsx"
import styles from "./ArticleListItem.module.css"

const ArticleListItem = (props) => {
  return (
    <li className={styles.item}>
      <article>
        <h2 className={styles.title}>{props.article.title}</h2>
        <ArticleTextToggleButton article={props.article}></ArticleTextToggleButton>
      </article>
    </li>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired,
};
export default ArticleListItem;
