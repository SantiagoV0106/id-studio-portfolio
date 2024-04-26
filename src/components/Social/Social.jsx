// Eslint
/* eslint-disable react/prop-types */


// Style
import './social.css'

    export function Social({link, icon}) {
    return(
        <a
        target='_blank' 
        href={link}
        className="social">
        {icon}
        </a>
    )
}