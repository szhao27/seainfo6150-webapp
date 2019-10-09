import React from 'react'
import SlugButton from "./SlugButton"
import formatcss from "./ArticleListItem.module.css"

const ArticleListItem = ({content}) => {
    return (
        <html>
        <div>
            <h1 className={formatcss.title}>{content.title}</h1>
            <p className={formatcss.shorttext}>{content.shortText}</p>
            <time className={formatcss.pubDate} dateTime={content.pubDate}>{content.pubDate}</time>
            <SlugButton slug={content.slug} buttonText={content.author}></SlugButton>
            <div className={formatcss.clear}></div>
        </div>
        </html>
    );
};

export default ArticleListItem;