import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './RgisterForms.css'

const RegisterForms = () => {
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setconfirmPassword] = useState<string>('')
    const [api, setApi] = useState<string>('https://localhost:7083/api/Users')
    const Navigate = useNavigate();
        
    async function ConnectToServer(): Promise<any>{
        const response = await fetch(api);
        const data = await response.json();        
        console.log(data)        
    }

    async function CreateNewUser(): Promise<any>{
        let UserInformation : User = CreateUser();

        try{
            const response = await fetch(api,{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(UserInformation),
            })
            .then()
            .then(() => Navigate('/FinancialWeb/'))
        } catch{
            alert("Error with server connection");
        }

        ConnectToServer();
    }

    function CreateUser() : User{
        const user: User = {
            username: username.toLowerCase(),
            email: email,
            password: password,
            status: false          
        };
        return user;
    }
   
  
  return (
    <section className='RegisterForm'>
        <h1>Create new a user!</h1>
        <label htmlFor="username">Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <label htmlFor="email">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <label htmlFor="confirmPassword">Confrim Password</label>
        <input type="password" value={confirmPassword} onChange={(e)=>setconfirmPassword(e.target.value)}/>
        <button type="submit" onClick={CreateNewUser}>submit</button>
    </section>
  )
}

export default RegisterForms


interface User{
    username: string,
    email: string,
    password: string,
    status: boolean

}
