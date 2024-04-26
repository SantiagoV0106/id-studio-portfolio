// Eslint
/* eslint-disable react/prop-types */


// Style
import './tags.css'

export function Tags({id,bgColor,number,name}){

    const bgStyle = {
        backgroundColor : `var(${bgColor})`
    }

    return (
        <div className={`tag ${id}`} style={bgStyle}>
            <span>{number}</span><p>{name}</p>
        </div>
    )
}