import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from "./ArticleListItem"
import formatcss from './ArticleList.module.css'

const ArticleList = props => {
  return (
    <html>
    <div>
    <ul className={formatcss.darkerpart}>
      {props.articles.map(article => (
        <li key={props.slug} className={formatcss.lighterpart}>
          <ArticleListItem content = {article}></ArticleListItem>
        </li>
      ))}
    </ul>
    </div>
    </html>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
