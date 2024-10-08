import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Signin from './pages/SigninPage';
import VerifyLogin from './pages/VerifyLogin'
import Dashboard from './pages/Dashboard';
// import Admin from './components/Admin';
import BridgeLoan from './components/BridgeLoan';
// import Collection from './components/Collection';
// import CustomerRelation from './components/CustomerRelation';
// import CustomerCentric from './components/CustomerCentric';
// import DebtManagement from './components/DebtManagement';
import LoanApplication from './components/LoanApplication';
import Declined from "../src/pages/Declined";
import Adjust from "../src/pages/Adjust";
import LoanRestructure from "../src/pages/LoanRestructuring";
import LoanStatus from "../src/pages/LoanRestructuring";
import LoanTopup from "../src/pages/LoanTopup";




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/verify-login" element={<VerifyLogin />} />
        <Route path='/login' element={<Signin />} />
        <Route path='/dashboard' element={<Dashboard />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route path='/bridge-loan' element={<BridgeLoan />} />
        <Route path='/loan-app/customer' element={<LoanApplication />} /> 
        <Route path='/loan-app/declined' element={<Declined />} /> 
        <Route path='/loan-app/adjust' element={<Adjust />} /> 
        <Route path='/loan-app/restructure' element={<LoanRestructure />} />
        <Route path='/loan-app/status' element={<LoanStatus />} /> 
        <Route path='/loan-app/top-up' element={<LoanTopup />} />  
      </Routes>
    </Router>
  )
}

export default App