import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Home from './Components/Home/Home';
import Organization from './Components/Organization/Organization';
import { useAuthContext } from './context/AuthContext';
import Donate from './Components/Donation/Donate';
import Donate_Items from './Components/Donation/Donate_Items';
import MedicineDonate from './Components/Donation/MedicineDonate';
import ProductsPage from './Components/AdminDashboard/Pages/ProductsPage';
import OverviewPage from './Components/AdminDashboard/Pages/OverviewPage';
import UsersPage from './Components/AdminDashboard/Pages/UsersPage';
import OrdersPage from './Components/AdminDashboard/Pages/DonatesPage';
import SettingsPage from './Components/AdminDashboard/Pages/SettingsPage';
import Sidebar from './Components/AdminDashboard/Sidebar/Sidebar';

function App() {
  const { authUser } = useAuthContext();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={authUser ? <Navigate to="/" /> : <LoginSignup />} />
      <Route path="/signup" element={authUser ? <Navigate to="/" /> : <LoginSignup />} />
      <Route path="/organization" element={authUser ? <Organization /> : <Navigate to="/login" />} />
      <Route path="/donation" element={authUser ? <Donate /> : <Navigate to="/login" />} />
      <Route path="/donate-items" element={authUser ? <Donate_Items /> : <Navigate to="/login" />} />
      <Route path="/medicine-donation" element={authUser ? <MedicineDonate /> : <Navigate to="/login" />} />
      <Route path="/cloth-donation" element={authUser ? <Donate_Items /> : <Navigate to="/login" />} />
      <Route path="/grocery-donation" element={authUser ? <Donate_Items /> : <Navigate to="/login" />} />
      <Route path="/book-donation" element={authUser ? <Donate_Items /> : <Navigate to="/login" />} />
      <Route path="/electronic-donation" element={authUser ? <Donate_Items /> : <Navigate to="/login" />} />
      <Route path="/furniture-donation" element={authUser ? <Donate_Items /> : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to="/" />} /> {/* Fallback Route */}

      {/* Admin Routes with Sidebar */}
      <Route element={<AdminLayout />}>
        <Route path='/admin-dashboard' element={<OverviewPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/orders' element={<OrdersPage />} />
        <Route path='/settings' element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

const AdminLayout = () => {
  return (
    <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
			{/* BG */}
			<div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<div className='absolute inset-0 backdrop-blur-sm' />
			</div>

			<Sidebar />
			<Routes>
				<Route path='/admin-dashboard' element={<OverviewPage />} />
				<Route path='/products' element={<ProductsPage />} />
				<Route path='/users' element={<UsersPage />} />
				<Route path='/orders' element={<OrdersPage />} />
				<Route path='/settings' element={<SettingsPage />} />
			</Routes>
		</div>
  );
};

export default App;
