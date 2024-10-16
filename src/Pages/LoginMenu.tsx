import './Css/LoginPage.css'

import LoginForm from '../components/LoginMenu/LoginForm'
import { useNavigate } from 'react-router-dom'

const LoginMenu = () => {
  const navigate = useNavigate();

  return (
    <main>
      <div>
        <LoginForm></LoginForm>
        <ul>
          <li onClick={() => navigate('/FinancialWeb/')} className='loginLinks'>Forgot Password?</li>
          <li onClick={() => navigate('/FinancialWeb/register')} className='loginLinks'>Create new account</li>
        </ul>
      </div>

    </main>
  )
}

export default LoginMenu