import React from 'react'
import Header from '../components/Header'

const Userhome = () => {
  return (
    <div>
        <Header/>
       <div style={{width:"500px"}}  className=' d-flex m-3 '> <h3 className='m-3'>Welcome User</h3> <button type="button" class="btn btn-primary">+ Add New Task</button>
       
       </div>
                    


    </div>
  )
}

export default Userhome