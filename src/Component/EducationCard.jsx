import React from 'react'


function EducationCard(props) {
  return (
    <div className='educationcard'>
      <div style={{}}><img src={props.schoolimg}/></div>
        <h3>{props.when}</h3>
        <h3>{props.level}</h3>
        <h2>{props.school}</h2>
        <h2>{props.type}</h2>
        <h2>GPA {props.gpa}</h2>
    </div>
    
  )
}

export default EducationCard