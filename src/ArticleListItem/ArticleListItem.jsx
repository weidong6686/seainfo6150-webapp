
import React from 'react';
import PropTypes from "prop-types";

const ArticleListItem = props => {
    return (
        <article>
            <h2>{props.article.title}</h2>
            <time datetime={props.article.timeStamp}>{props.article.displayDate}</time>
            <p>{props.article.shortText}</p>
        </article>
    );
};

ArticleListItem.propTypes = {
    article: PropTypes.object.isRequired
};

export default ArticleListItem;