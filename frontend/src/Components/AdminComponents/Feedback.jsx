import React from 'react'

export const Feedback = (props) => {
    const feedback = props.feedback;
    return (
        <div className={'feedback-card'}>
            <h2>{feedback.name}</h2>
            <h3>{feedback.email}</h3>
            <p>{feedback.feedback}</p>
        </div>
    )
}
