import React from 'react'

export default function Button(props) {
    return (
        <div className={`column-${props.cols}`}>
            <button className='calc-button' onClick={() => { props.action(props.symbol) }}>{props.symbol}</button>
        </div >
    )
}