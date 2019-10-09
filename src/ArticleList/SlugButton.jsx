import React from 'react';
import formatcss from "./SlugButton.module.css"


const SlugButton = (props) => {
    return (
        <html>
        <div className={formatcss.line}>
            <button className={formatcss.button} onClick={
                ()=>alert(`${props.slug}`)
            }>{props.buttonText}</button>
            }
        </div>
        </html>
    );
};

export default SlugButton;