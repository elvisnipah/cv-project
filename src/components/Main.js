import React, { useState } from 'react'

function Main() {
  const [cv, setCv] = useState({
    
    
  })

  function handleChange(event) {
    setCv(prevCv=> {
      return {
        ...prevCv,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <div className="main">
      <div className='main--heading'>CV Program</div>
      <form action="">
        
        
        
      </form>
    </div>
  )
}

export default Main