import React from 'react';
import { useState } from 'react';
import {Api} from '../Api'
import { useNavigate } from 'react-router-dom';



const Form = () => {

    const container = {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        
    }
    const formStyle = {
        display : 'flex',
        flexDirection : 'column',
        width: '50%',
        backgroundColor:'white',
        borderRadius: 5,
        paddingBottom: 30,
        justifyContent: 'center',
    }
    const input= {
        height: 20,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#ccc',
        margin: 5,
        padding: 10,
        borderRadius: 3,
    }
    const label={
        display:'flex',
        flexDirection:'column',
        padding: 10,
    }
    const title={
        fontSize:27,
        fontWeight:500,
        textAlign:'center',
        padding: 0,
    }

    const button = {
        backgroundColor:'grey',
        color:'white',
        padding:10,
        borderRadius:5,
        width: 120,
        margin: 'auto',
        border: 'none',
    }

    const parentBtn={
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:10,
        gap:8
        
        
    }

    const svg ={
        height: 27,
        width: 35,
        cursor: 'pointer',
    }
   

    const [form,setForm]=useState({
        username: '',email:'',password:''
    })
    const [isLogin,setLogin]=useState(true)
    
    const navigate=useNavigate()
    
    const handleChange=(e)=>{
        setForm(prev=>{
            return {
               ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    async function handleSubmit(e){
        e.preventDefault()
        try{
        if(isLogin && form.username.trim()!=='' && form.email.trim()!==''){
          
           const res=await Api.post('api/token',{username:form.username,email:form.email})
           localStorage.setItem('refresh',res.data.refresh)
           localStorage.setItem('access',res.data.access)
           navigate('/')
        }
        else if (!isLogin && form.username.trim()!=='' && form.email.trim()!=='' && form.password.trim()!=='') {
          // Handle registration logic
       
          const res = await Api.post('api/register', {
            username: form.username,
            email: form.email,
            password: form.password
          });
          localStorage.setItem('access', res.access);
          localStorage.setItem('refresh', res.refresh);
          navigate("/");
        
     
      }
    }catch(error){
        console.log(error)
  
      }
    }

    const toggleForm=()=>{
        setLogin(prev=>!prev)
    }
    return (
        <div style={container}>
        <div style={formStyle}>
            <p style={title}>{isLogin?'Login':'Sign-Up'}</p>

            <label style={label}>Username:
            <input style={input} placeholder='username' name="username" type='text' value={form.username} onChange={handleChange}/>
            </label>
            {!isLogin&&   
            <label style={label}>Email:
            <input style={input} placeholder='Email' name="email" type='email' value={form.email} onChange={handleChange}/>
            </label> 
            } 
             
            <label style={label}>Password:
            <input style={input} placeholder='Password' name="password" type='password' value={form.password} onChange={(e)=>handleChange(e)}/>
            </label>   
            
            
            
            <button style={button} onClick={handleSubmit}>Submit</button>
            <div style={parentBtn}>
            <h5>Already have an account? </h5><span>
             {isLogin ?   
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" style={svg} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" onClick={toggleForm}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

            :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" onClick={toggleForm} style={svg}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
</svg>



             }
          
            </span>
                
            </div>
            
        </div>
            
        </div>
    );
};

export default Form;

    
