import React from 'react';

const ArticleListItem = ({content}) => {
    return (
        <html>
        <div>
            <h1>{content.title}></h1>
            <p>{content.shortText}</p>
            <time dateTime={content.pubDate}>{content.pubDate}</time>
            <button onClick={
                ()=>alert(`${content.slug}`)
            }>show article slug</button>
        </div>
        </html>
    );
};

export default ArticleListItem;