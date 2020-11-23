import React from 'react'
import './ArticleImage.css'

const ArticleImage = (props) => {
    return (
        <div className="image_body">
            <img className="image" src={props.url} alt={props.title} />
        </div>
    )
}

export default ArticleImage