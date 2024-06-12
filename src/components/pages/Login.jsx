import React from 'react';
import Input from '../reusable/Input';
import Button from '../reusable/Button';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import {faEnvelope, faLock, faUser} from '@fortawesome/free-solid-svg-icons';
import {auth} from '../../Firebase';
import GoogleAuth from '../reusable/GoogleAuth';

function Login() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleChange(identifier,value){
    setError('');
    setFormData((prevFormData)=>({...prevFormData, [identifier]: value}));
  }

  function handleReset(){
    const email = prompt('Please enter your email');
    sendPasswordResetEmail(auth, email);
    alert('Email sent! Check your inbox for password reset instruction.');
  }

  async function handleSubmit(event){
    event.preventDefault();
    const {email, password} = formData;
    
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      const response = await fetch('https://auth-development-1f77e-default-rtdb.firebaseio.com/userData.json');

      if(response.ok){
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
    }
      
  
  }

  return (
    <div  className=' bg-opacity-50 rounded-3xl bg-gradient-to-r from-red-400 via-purple-400 to bg-pink-400 max-w-lg mx-auto '>
      <h1 className='text-3xl font-semibold text-center my-7 '>sign in</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center '>

        {/* <Input 
        placeholder='username'
        type='text'
        value={formData.username}
        onChange={(event)=>handleChange('username',event.target.value)}
        icon = {faUser}
        /> */}
        <Input 
        placeholder='email address'
        type='email'
        value={formData.email || ''}
        onChange={(event)=>handleChange('email', event.target.value)}
        icon={faEnvelope}
        />

        <Input 
        placeholder='password'
        type='password'
        value={formData.password || ''}
        onChange={(event)=>handleChange('password', event.target.value)}
        icon={faLock}
        />

        <Button buttonText='Login'/>


        <div className='flex gap-4'>
          <p className=' font-semibold'>Dont have an account? <Link to='/signup'><span className='text-blue-700 uppercase'>Sign Up</span></Link></p>
          <button onClick={handleReset} className='text-blue-900 underline font-semibold'>Forgot Password</button>
        </div>
        <div className='flex items-center flex-col '>
          <p >Or</p>
          <GoogleAuth/>         
        </div>

        {error && <p className='text-red-700 uppercase'>{error}</p>}
      
      </form>
      
    </div>
  )
}

export default Login