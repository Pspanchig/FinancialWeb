import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../components/Protected/Alert";

interface ProtectedProps {
  component: React.ComponentType;
}

const Protected: React.FC<ProtectedProps> = ({ component: Component }) => {
  
  const Navigate = useNavigate();
  const [access, setAcces] = useState<boolean>(false);
  const [url] = useState<string>(`https://localhost:7083/api/Users/${localStorage.getItem("CurrentUser")}`);

  async function UserFromDB(): Promise<any> {
    try{
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch(error){
      alert('There was a problem with the server connection:' + error);
    }
  }

  async function CheckUser(): Promise<any>{
    const promiseUser: {id: string, status: boolean} = await UserFromDB();
    const currentUser: string = localStorage.getItem("CurrentUser") ?? "";
    
    if((promiseUser.id === currentUser) && promiseUser.status === true){
        setTimeout(() => {
          console.log(promiseUser.status)
          setAcces(true)
        }, 50);
    } else{
      setTimeout(() => {
        setAcces(false)
        alert("Verification failed, try login again :c")
        Navigate('/FinancialWeb/')
      }, 2000);
    }
  }

  useEffect(() =>{
    CheckUser();
  })


  return (
    <>
      {
        access === true &&(
          <Component />
        )
      }
      {
        access === false &&(
          <Alert></Alert>
        )
      }
    </>
    
  );
};

export default Protected;
