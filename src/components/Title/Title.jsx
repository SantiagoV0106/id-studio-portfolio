// Eslint
/* eslint-disable react/prop-types */

// Data
import arrow from '../../assets/images/arrow.svg'
import leftBracket from '../../assets/images/left-bracket.svg'
import rightBracket from '../../assets/images/right-bracket.svg'

// Style
import './title.css'

export function Title({title}) {
    return(
        <div className="title-container">
            <img src={arrow} alt='arrow' />
            <div className="title-text-container">
                <img src={leftBracket} alt="leftBracket" />
                <h1>{title}</h1>
                <img src={rightBracket} alt="rightBracket" />
            </div>
        </div>
    )
}