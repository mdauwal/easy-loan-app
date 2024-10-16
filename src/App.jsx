import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Signin from './pages/SigninPage';
import VerifyLogin from './pages/VerifyLogin'
import Dashboard from './pages/Dashboard';
import BridgeLoan from './components/BridgeLoan';
import LoanApplication from './components/LoanApplication';
import Declined from "../src/pages/Declined";
import Adjust from "../src/pages/Adjust";
import LoanRestructure from "../src/pages/LoanRestructuring";
import LoanStatus from "../src/pages/LoanRestructuring";
import LoanTopup from "../src/pages/LoanTopup";
import CustomerDetails from './pages/CustomerDetails';
import Signup from './pages/Signup';
import ViewProfile from './pages/ViewProfile';
import SeeMorePage from './components/SeeMore';
import ContactSupport from './pages/ContactSupport';
import LoanUnderwriting from './components/LoanUnderwriting';





const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Signin />} />
        <Route path="/verify-login" element={<VerifyLogin />} />
        <Route path='/login' element={<Signin />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/bridge-loan' element={<BridgeLoan />} />
        <Route path='/loan-app/customer' element={<LoanApplication />} /> 
        <Route path='/loan-app/declined' element={<Declined />} /> 
        <Route path='/loan-app/adjust' element={<Adjust />} /> 
        <Route path='/loan-app/restructure' element={<LoanRestructure />} />
        <Route path='/loan-app/status' element={<LoanStatus />} /> 
        <Route path='/loan-app/top-up' element={<LoanTopup />} />
        <Route path="/customer-details/:id" element={<CustomerDetails />} />
        <Route path='/view-profile' element={<ViewProfile />} />
        <Route path='/see-more' element={<SeeMorePage />} />
        <Route path='/contact-support' element={<ContactSupport />} />
        <Route path='/underwriter/review' element={<LoanUnderwriting />} />
        <Route path='/underwriter/approval' element={<LoanUnderwriting />} />
      </Routes>
    </Router>
  )
}

export default App