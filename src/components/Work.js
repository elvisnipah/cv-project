import React from 'react'

function Work(props) {
  const work = props.work
  function handleChange(event) {
    props.setWork(prevWork=> {
      return {
        ...prevWork,
        [event.target.name]: event.target.value
      }
    })
  }
  return (
    <div className="work--details">
      <p>Work Experience</p>
      <input 
        type="text" 
        id='company' 
        name='companyName' 
        value={work.companyName} 
        onChange={handleChange}
        placeholder="Company Name"
      />
      <input 
        type="text" 
        id='job-title' 
        name='jobTitle' 
        value={work.jobTitle} 
        onChange={handleChange}
        placeholder="Job Title"
      />
      <div>
        <input
          type="date"
          id='company-start'
          name='companyStart'
          value={work.companyStart}
          onChange={handleChange}
        /> <span style={{color:'white'}}> to </span>
        <input
          type="date"
          id='company-end'
          name='companyEnd'
          value={work.companyEnd}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default Work