import React from 'react';
import ArticleListItem from '../ArticleListItem/ArticleListItem'
import PropTypes from "prop-types";

const Articlelist = (props) => {
  const myList = props.list;

  const mappedList = myList.map((listItem) => (
    <li><ArticleListItem article={listItem}/></li>
  ));

  return (
    <div>
      <ul>{mappedList}</ul>
    </div>
  );
};

Articlelist.propTypes = {
  articlelist: PropTypes.arrayOf(
    PropTypes.shape({
      article: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Articlelist;