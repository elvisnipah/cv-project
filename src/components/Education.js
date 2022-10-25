import React from 'react'

function Education(props) {
  
  const education = props.education

  function handleChange(event) {
    props.setEducation(prevEducation=> {
      return {
        ...prevEducation,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <div className="education--details">
      <p>Education Details</p>
      <input 
        type="text" 
        id='school' 
        name='school' 
        value={education.school} 
        onChange={handleChange}
        placeholder="School"
      />
      <input 
        type="text" 
        id='course' 
        name='course' 
        value={education.course} 
        onChange={handleChange}
        placeholder="Course"
      />
      <div>
        <input
          type="date"
          id='school-start'
          name='schoolStart'
          value={education.schoolStart}
          onChange={handleChange}
          placeholder="Start Date"
        /> <span style={{color:'white'}}> to </span>
        <input
          type="date"
          id='school-end'
          name='schoolEnd'
          value={education.schoolEnd}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default Education