import React from 'react'
import taskimg from '../assets/task.png'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>
            <div style={{height:"100vh"}} className='d-flex justify-content-center align-items-center'>
               <div  style={{width:"500px"}}>
                    <h1>Welcome to My Task Management, <span style={{fontSize:"20px"}}> Your productivity journey starts here </span> </h1>
                    <p>This is a task management app</p>
                    <span style={{fontSize:"20px",marginRight:"10px"}} >Click to</span> <Link to="/register"><button type="button" class="btn btn-primary">Get started</button></Link>
               </div>
               <div>
                <img src={taskimg} style={{width:"450px"}} alt="" />
               </div>
            </div>
        </>
    )
}

export default Home