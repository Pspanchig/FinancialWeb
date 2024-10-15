// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginMenu from './Pages/LoginMenu';
import RegisterPage from './Pages/RegisterPage';

function App() {  

  return (
    <Router>
      <Routes>
        <Route path="/FinancialWeb/" element={<LoginMenu />} />
        <Route path="/FinancialWeb/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  )
}

export default App
