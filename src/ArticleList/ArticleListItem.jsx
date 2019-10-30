import React from 'react'
import SlugButton from "./SlugButton"
import ArticleImage from"./ArticleImage"
import formatcss from "./ArticleListItem.module.css"

const ArticleListItem = ({content}) => {
    return (
        <html>
        <ul class = {formatcss.container}>
        <div>
            <div className={formatcss.image}>
                <ArticleImage url={content.image} title={content.title}></ArticleImage>
            </div>
            <h1 className={formatcss.title}>{content.title}</h1>
            <p className={formatcss.shorttext}>{content.shortText}</p>
            <time className={formatcss.pubDate} dateTime={content.pubDate}>{content.pubDate}</time>
            <SlugButton slug={content.slug} buttonText={content.author}></SlugButton>
            <div className={formatcss.clear}></div>
        </div>
        </ul>
        </html>
    );
};

export default ArticleListItem;