import React, { useState } from 'react'
import loginImg from '../assets/login.png'
import { Link } from 'react-router-dom'

const Auth = ({ insideRegister }) => {

    const [inputData, setInputData] = useState({
        username: "",
        email: "",
        password: ""
    })


    const handleRegister = () => {
        if(inputData.email && inputData.password && inputData.username ){
            
            alert("Make Api Call to register user")

        }else{
            alert("Please fill all the fields")
        }
    }

    const handleLogin = () => {
        if(inputData.email && inputData.password){

            alert("Make Api Call to login user")

        }else{
            
            alert("Please fill all the fields")
        }
    }

    console.log(inputData);

    return (
        <>
            <div style={{ height: "100vh" }} className=" d-flex justify-content-center align-items-center ">
                <div style={{ width: "500px" }} className='p-3 '>
                    <h5 className='my-3'> Sign {insideRegister ? "Up" : "In"} to Your Account</h5>
                    {insideRegister && <div className="form-floating mb-3">
                        <input value={inputData.username} onChange={(e) => setInputData({ ...inputData, username: e.target.value })}
                            type="text" className="form-control" id="floatingInput" placeholder="Username" autocomplete="off" />
                        <label for="floatingInput">Username</label>
                    </div>}
                    <div class="form-floating mb-3">
                        <input value={inputData.email} onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
                            type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email</label>
                    </div>
                    <div className="form-floating">
                        <input value={inputData.password} onChange={(e) => setInputData({ ...inputData, password: e.target.value })}
                            type="password" className="form-control" id="floatingPassword" placeholder="Password" autocomplete="off" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div style={{ width: "100%" }} className=" d-flex justify-content-between align-items-center " >

                        {insideRegister ? <p className='m-3'> Already a user ? <Link to="/login" > click to login </Link></p> : <p className='m-3'> Want to Sign Up ?<Link to="/register" > Click Here </Link></p>}
                        {
                            insideRegister ?

                            <button onClick={handleRegister} type="button" className="btn btn-primary mt-3"> Sign Up </button> 

                            :

                            <button onClick={handleLogin} type="button" className="btn btn-primary mt-3"> Sign In </button> 
                        }
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