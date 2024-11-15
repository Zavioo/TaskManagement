import React from 'react'
import loginImg from '../assets/login.png'
import { Link } from 'react-router-dom'

const Auth = ({ insideRegister }) => {
    return (
        <>
            <div style={{ height: "100vh" }} className=" d-flex justify-content-center align-items-center ">
                <div style={{ width: "500px" }} className='p-3 '>
                    <h5 className='my-3'> Sign {insideRegister ? "Up" : "In"} to Your Account</h5>
                    {insideRegister && <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" autocomplete="off" />
                        <label for="floatingPassword">Username</label>
                    </div>}
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" autocomplete="off" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div style={{width:"100%"}} className=" d-flex justify-content-between align-items-center " >

                    {insideRegister ? <p className='m-3'> Already a user <Link to="/login" > click to login </Link></p> : <p className='m-3'> Want to Sign Up <Link to="/register" > Click Here </Link></p>} 
                    <Link to="/userhome"><button type="button" className="btn btn-primary mt-3"> {insideRegister ? "Sign Up" : "Sign In"}</button> </Link>
                    </div>
                </div>
                <div>
                    <img style={{ width: "400px" }} src={loginImg} alt="" />
                </div>
            </div>
        </>

    )
}

export default Auth                                   