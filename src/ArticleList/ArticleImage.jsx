import React from 'react';
import formatcss from "./ArticleImage.module.css"


const ArticleImage = (props) => {
    return (
        <html>
           <img className={formatcss.image} src={props.url._url} alt={props.title}/>
        </html>
    );
};

export default ArticleImage;