import React from 'react';
import Input from '../reusable/Input';
import Button from '../reusable/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {auth} from '../../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {faEnvelope, faLock, faUser} from '@fortawesome/free-solid-svg-icons';
import { userActions} from '../store/userslice';
import { useDispatch, useSelector } from 'react-redux';
import GoogleAuth from '../reusable/GoogleAuth';

function Signup() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const dispatch= useDispatch();

  function handleChange(identifier,value){
    setFormData((prevFormData)=>({...prevFormData, [identifier]: value}));
  }
   
  
  async function handleSubmit(event){
    event.preventDefault();
    setFormData("");
    setError('');
    const {email, password} = formData;
    
     try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      const user_Data = {
        id:user.user.uid,
        email: user.user.email,
        firstname: formData.firstname,
        lastname: formData.lastname, 
      }

      dispatch(userActions.userData(user_Data));
      console.log(useSelector(state=>state.user.currentUser));

      const response = await fetch('https://auth-development-1f77e-default-rtdb.firebaseio.com/userData.json',{
        method: 'POST',
        headers:{
          'Content-Type': 'application.json'
        },
        body: JSON.stringify(user_Data),
      });

      if(response.ok){
        navigate('/signin');
      }else{
        setError('Please enter valid details')
      }
     } catch (error) {
      setError(error.message)
     }

     console.log(error);
     
  }
  
  return (
    <div className='p-3 rounded-3xl bg-gradient-to-r from-red-400 via-purple-400 to bg-pink-400 max-w-lg mx-auto '>
      <h1 className='text-3xl font-semibold text-center my-7'>Sign Up</h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center '>
        {error && <p className='text-red-700 uppercase'>{error}</p>}

        <Input type='text' placeholder='first name' onChange={(event)=>handleChange('firstname', event.target.value)} value={formData.firstname || ''} icon={faUser}/>
        <Input type='text' placeholder='last name'  onChange={(event)=>handleChange('lastname', event.target.value)} value={formData.lastname || ''} icon={faUser}/>
        <Input type='email' placeholder='email' onChange={(event)=>handleChange('email', event.target.value)} value={formData.email || ''} icon={faEnvelope}/>
        <Input type='password' placeholder='password' value={formData.password || ''} onChange={(event)=>handleChange('password',event.target.value)} icon={faLock}/>
        <Input type='password' placeholder='confirm password' value={formData.confirm_password || ''} onChange={(event)=>handleChange('confirm_password',event.target.value)} icon={faLock}/>      
        <Button buttonText={loading? 'Loading...': 'SignUp'}/>
        <p className='font-semibold'>Already have an account? <Link to='/signin'><span className='text-blue-600'>SIGN IN</span></Link> </p>
        <p>Or</p>
        <GoogleAuth/>
        
      </form>
    </div>
  )
}

export default Signup