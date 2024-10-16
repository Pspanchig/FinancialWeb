// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginMenu from './Pages/LoginMenu';
import RegisterPage from './Pages/RegisterPage';
import Protected from './Pages/Protected';
import AppRoutes from './Pages/AppRoutes';

function App() {  

  return (
    <Router>
      <Routes>
        <Route path="/FinancialWeb/" element={<LoginMenu />} />
        <Route path="/FinancialWeb/register" element={<RegisterPage />} />
        <Route path="/FinancialWeb/app/*" element={<Protected component ={AppRoutes}/>} />
      </Routes>
    </Router>
  )
}

export default App
