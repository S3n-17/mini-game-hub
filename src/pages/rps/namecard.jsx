import React from 'react'
import './rsp.css'
import './namecard.css'
const Namecard = ({ Player, text }) => {
    return (
        <div>
            <h2 >{Player}</h2>
            <div
                className='namecard'
            >{text}
            </div>
        </div>
    )
}

export default Namecard
