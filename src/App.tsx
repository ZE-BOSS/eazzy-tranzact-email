import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WelcomeEmail from './components/WelcomeEmail';
import LoginEmail from './components/LoginEmail';
import VerifyEmail from './components/VerifyEmail';
import DepositEmail from './components/DepositEmail';
import TranferEmail from './components/TranferEmail';
import KYCConfirmationEmail from './components/KYCConfirmationEmail';
import KYCRejectionEmail from './components/KYCRejectionEmail';

const EmailSidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg p-4">
      <h2 className="text-lg font-bold mb-4">Email Templates</h2>
      <nav className="space-y-2">
        <Link to="/" className="block text-blue-600 hover:text-blue-800">Welcome Email</Link>
        <Link to="/login-email" className="block text-blue-600 hover:text-blue-800">Login Email</Link>
        <Link to="/verify-email" className="block text-blue-600 hover:text-blue-800">Verify Email</Link>
        <Link to="/deposit-email" className="block text-blue-600 hover:text-blue-800">Deposit Email</Link>
        <Link to="/transfer-email" className="block text-blue-600 hover:text-blue-800">Transfer Email</Link>
        <Link to="/kyc-confirm" className="block text-blue-600 hover:text-blue-800">KYC Confirmation</Link>
        <Link to="/kyc-reject" className="block text-blue-600 hover:text-blue-800">KYC Rejection</Link>
      </nav>
    </div>
  );
};

// git remote add origin git@github.com:ZE-BOSS/eazzy-tranzact-email.git
// git branch -M main


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex">
        <EmailSidebar />
        <div className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<WelcomeEmail />} />
            <Route 
              path="/login-email" 
              element={
                <LoginEmail 
                  userName={'Unc Holding'} 
                  ipAddress={"105.112.67.189"} 
                  time={"Feb 03, 2025 at 8:46:15 PM"} 
                />
              } 
            />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route 
              path="/deposit-email" 
              element={
                <DepositEmail 
                  userName={'Unc Holding'} 
                  balance={"$10,000"} 
                  data={{
                    amount: "2,450 USD",
                    payment_method: "Bank Transfer",
                    date: "Feb 03, 2025",
                    transaction_id: "TRNX-EZT-357912"
                  }} 
                />
              } 
            />
            <Route 
              path="/transfer-email" 
              element={
                <TranferEmail 
                  userName={'Unc Holding'} 
                  data={{
                    amount: "1,700 USD",
                    beneficiary: "Adedayo Fakayode",
                    iban: "1237897841",
                    date: "Feb 03, 2025",
                    transaction_id: "TRNX-EZT-357912"
                  }} 
                />
              } 
            />
            <Route path="/kyc-confirm" element={<KYCConfirmationEmail />} />
            <Route path="/kyc-reject" element={<KYCRejectionEmail />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;