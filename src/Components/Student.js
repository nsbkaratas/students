import React from 'react'
import Score from './Score'

const Student = (props) => {
    const scores= props.scores

    const scoreComponent=scores.map(score=>{
        return <Score score={score.score} date={score.date}/>
    })
    console.log(props)    
    return (
        <div>
            <h3>Name:{props.name}</h3>
            <h3>Bio:{props.bio}</h3>   
            {scoreComponent}
        </div>
    )
}

export default Student
