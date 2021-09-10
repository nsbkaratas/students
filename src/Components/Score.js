import React from 'react'

const Score = (props) => {
    
    console.log(props)
    return (
        <div>
            {props.score}
            {props.date}
        </div>
    )
}

export default Score
