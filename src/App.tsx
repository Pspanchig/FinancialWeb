// import { useState } from 'react'
import { BrowserRouter as Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginMenu from './Pages/LoginMenu';
import RegisterPage from './Pages/RegisterPage';

function App() {  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/FinancialWeb/" element={<LoginMenu />} />
        <Route path="/FinancialWeb/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
