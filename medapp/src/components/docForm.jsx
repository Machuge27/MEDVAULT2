import React from 'react';
import { useState } from 'react';
import {Api} from '../Api'
import { useNavigate } from 'react-router-dom';



const DocForm = () => {

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
        if( form.username.trim()!=='' && form.password.trim()!==''){
          
           const res=await Api.post('api/token',{username:form.username,email:form.email})
           localStorage.setItem('refresh',res.data.refresh)
           localStorage.setItem('access',res.data.access)
           navigate('/')
        }
      
    }catch(error){
        console.log(error)
  
      }
    }

    
    return (
        <div style={container}>
        <div style={formStyle}>
            <p style={title}>Doc Log-In</p>

            <label style={label}>Username:
            <input style={input} placeholder='username' name="username" type='text' value={form.username} onChange={handleChange}/>
            </label>
            {/* {!isLogin&&   
            <label style={label}>Email:
            <input style={input} placeholder='Email' name="email" type='email' value={form.email} onChange={handleChange}/>
            </label> 
            }  */}
             
            <label style={label}>Password:
            <input style={input} placeholder='Password' name="password" type='password' value={form.password} onChange={(e)=>handleChange(e)}/>
            </label>   
            
            
            
            <button style={button} onClick={handleSubmit}>Submit</button>
            <div style={parentBtn}>
            </div>
            
        </div>
            
        </div>
    );
};

export default DocForm;

    
