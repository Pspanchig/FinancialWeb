import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './LoginForms.css'

const LoginForm = () => {

  const [url, setUrl] = useState<string>('https://localhost:7083/api/Users');
  const Navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function UsersFromDB(): Promise<any> {
    try{
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch{
      alert('There was a problem with the server connection');
    }
  }

  async function AllowLoggin(): Promise<void>{
    const users = await UsersFromDB();    
    const findUser = users.find((u: { username: string , password: string}) => u.username === username && u.password === password); 
    localStorage.setItem("CurrentUser", findUser.id);        
    
    const updateState: User = {
      username: findUser.username,
      email: findUser.email,
      password: findUser.password,
      status: true          
    };

    const putUrl : string = `${url}/${findUser.id}`

    fetch(putUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateState),
    })
    .then()
    .then(() => Navigate('/dashboard'))
  }

  return (
    <section className='LoginForms'>
        
        <h1>Login with your account!</h1>
        <label htmlFor="">Username</label>
        <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
        <label htmlFor="">Password</label>
        <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" onClick={AllowLoggin} value="Login"/>        
    </section>
  )
}

interface User{
  username: string,
  email: string,
  password: string,
  status: boolean
}
export default LoginForm