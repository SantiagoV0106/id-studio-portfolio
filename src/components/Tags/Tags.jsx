// Eslint
/* eslint-disable react/prop-types */


// Style
import './tags.css'

export function Tags({bgColor,number,name}){

    const bgStyle = {
        backgroundColor : `var(${bgColor})`
    }


    return (
        <div className="tag" style={bgStyle}>
            <span>{number}</span><p>{name}</p>
        </div>
    )
}