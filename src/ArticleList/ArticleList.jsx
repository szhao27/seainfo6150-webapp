import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from "./ArticleListItem"

const ArticleList = props => {
  return (
    <ul>
      {props.articles.map(article => (
        <li key={props.slug}>
          <ArticleListItem content = {article}></ArticleListItem>
        </li>
      ))}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
