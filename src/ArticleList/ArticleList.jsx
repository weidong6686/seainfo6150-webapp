import React from 'react';
import ArticleListItem from '../ArticleListItem/ArticleListItem'
import PropTypes from "prop-types";

const ArticleList = (props) => {
  const myList = props.list;

  const mappedList = myList.map((listItem) => (
    <li key={listItem.slug}><ArticleListItem article={listItem}/></li>
  ));

  return (
    <div>
      <ul>{mappedList}</ul>
    </div>
  );
};

ArticleList.propTypes = {
  list: PropTypes.array.isRequired
};

export default ArticleList;