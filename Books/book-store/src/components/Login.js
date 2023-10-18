

import { Button } from '@mui/material';
import axios from 'axios';
import React, {  useState } from 'react';

const Login = ()=>{

    const [login,setLogin] = useState("")
    const [password,setPassword] = useState("")


    const handleSubmit = async(e)=>{
        e.preventDefault()
        const response = await axios.post('http://localhost:5000/users/login',{login,password}) 
        if(response.status ===200){
            sessionStorage.setItem('user', response.data);
            window.location.href = "/"
        }
    }
    return (
       

        <div className="container h-100 mt-5">
             <div className="row h-100 justify-content-center align-items-center">
                <form className="col-12">
        <div className='form-group'>
            <label className='col-12' for="email">Username</label>
            <input className='col-5' type="email" id="email" onChange={(e)=>setLogin(e.target.value)}></input>
        </div>
            <div className="form-group">
                <label className='col-12' for="password">Password</label>
                <input  className='col-5' type="password" id="password" onChange={(e)=>setPassword(e.target.value)}></input>    
            </div>
            <div className='form-group'>
                <button className='btn btn-primary' onClick={handleSubmit}>Login</button>
            </div>
    </form>   
  </div>
</div>
        
    )

}


export default Login