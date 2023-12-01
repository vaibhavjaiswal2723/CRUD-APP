import React from 'react'

const BodyHeading = ({inCompleteTask}) => {
  return (
    <div> 
        <h2>
            {inCompleteTask} {inCompleteTask>1?"tasks":"task"} left
        </h2>
    </div>
  )
}

export default BodyHeading