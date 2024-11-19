import React, { useState } from 'react'
import Header from '../components/Header'
import '../cssStyle/userhome.css'



const Userhome = () => {
  const [active, setActive] = useState('dashboard')

  const handleItemChange = (itemChange) => {
    setActive(itemChange)
  }

  return (
    <div className=' grid-container'>
      <div className='grid-item1 d-flex flex-column justify-content-between '>
        <div>
          <h5 style={{ marginTop: "20px" }}>My Task Manager </h5>

          {/* dashboard section */}
          
          <button  className={active === 'dashboard' ? ' btn btn-primary ' : 'btn btn-light'} onClick={() => handleItemChange('dashboard')}  >Dashboard </button>

          <button  className={active === 'mytasks' ? ' btn btn-primary ' : 'btn btn-light'} onClick={() => handleItemChange('mytasks')}>My Tasks</button>

        </div>
        <button style={{borderTop: '4px solid rgb(243, 243, 243)'}} className=' btn btn-light logout'>Logout</button>
      </div>

      <div className='grid-item2'>

        <div  className=" d-flex mx-3 align-items-center " style={{width:'350px', height:'100%'}}> 

          <input style={{width:'250px', height:'40px'}} type="text" className="form-control rounded " placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />

          <button style={{height:'40px',width:'40px',color:'white',backgroundColor:'black'}} className=" searchBtn rounded d-flex justify-content-center align-items-center"> 
            
            <svg style={{height:'30px'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
 </button>

        </div>
      </div>
      < div className='grid-item3'>
        3
      </div>
    </div>
  )
}

export default Userhome