import React from 'react'

function Personal(props) {
  const personalInfo = props.personalInfo

  function handleChange(event) {
    props.setPersonalInfo(prevPersonalInfo=> {
      return {
        ...prevPersonalInfo,
        [event.target.name]: event.target.value
      }
    })
  }
  
  return (
      <div className="personal--details">
        <p>Personal Details</p>
        <input 
          type="text" 
          id='first-name' 
          name='firstName' 
          value={personalInfo.firstName} 
          onChange={handleChange}
          placeholder="First Name"
        />
        <input 
          type="text" 
          id='last-name' 
          name='lastName' 
          value={personalInfo.lastName} 
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input 
          type="email" 
          id='email' 
          name='email' 
          value={personalInfo.email} 
          onChange={handleChange}
          placeholder="johndoe@gmail.com"
        />
        <input 
          type="tel" 
          id='phone' 
          name='phone' 
          value={personalInfo.phone} 
          onChange={handleChange}
          placeholder="+233456789100"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />
      </div>
  )
}

export default Personal