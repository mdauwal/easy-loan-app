import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Signin from './pages/SigninPage';
import VerifyLogin from './pages/VerifyLogin'
import Dashboard from './pages/Dashboard';
import Admin from './components/Admin';
import BridgeLoan from './components/BridgeLoan';
// import Collection from './components/Collection';
// import CustomerRelation from './components/CustomerRelation';
// import CustomerCentric from './components/CustomerCentric';
// import DebtManagement from './components/DebtManagement';
// import LoanApp from './components/LoanApp';
// import LoanUnderwriter from './components/LoanUnderwriter';
// import Report from './components/Report';
// import Setup from './components/Setup'
// import Staff from './components/Staff'



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/verify-login" element={<VerifyLogin />} />
        <Route path='/login' element={<Signin />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path='/bridge-loan' element={<BridgeLoan />} />
        {/* <Route path='/collection' element={<Collection />} />         */}
      </Routes>
    </Router>
  )
}

export default App