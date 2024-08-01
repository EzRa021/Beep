import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import DashNav from '../components/dashNav';
import axios from 'axios';
import BreedCrumb from '../components/breedCrumb';
import { toast, ToastContainer } from 'react-toastify';

const AccountSettings = () => {
  const apiUrl = "https://beep-backend.vercel.app";
  // const apiUrl = "http://localhost:3000"
  const { user, setUser } = useContext(UserContext);
  const [fullName, setFullName] = useState(user?.fullName || '');
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || '');
  const [email, setEmail] = useState(user?.email || '');
  const [website, setWebsite] = useState(user?.website || '');
  const [profileImage, setProfileImage] = useState(null);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('phoneNumber', phoneNumber);
    formData.append('email', email);
    formData.append('website', website);
    if (profileImage) {
      formData.append('profileImage', profileImage);
    }
    try {
      const response = await axios.put(`${apiUrl}/api/users/profile`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUser(response.data);
      toast.success('Profile updated successfully');
    } catch (error) {
      console.error('Failed to update profile', error);
      toast.error('Failed to update profile');
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('New password and confirm password do not match');
      return;
    }
    try {
      await axios.put(`${apiUrl}/users/password`,
        { currentPassword, newPassword },
        { withCredentials: true }
      );
      toast.success('Password changed successfully');
    } catch (error) {
      console.error('Failed to change password', error);
      toast.error('Failed to change password');
    }
  };

  const handleDeleteAccount = async () => {
    if (!window.confirm('Are you sure you want to delete your account?')) {
      return;
    }
    try {
      await axios.delete(`${apiUrl}/api/users`, { withCredentials: true });
      setUser(null);
      toast.success('Account deleted successfully');
      window.location.href = '/Sign-up';
    } catch (error) {
      console.error('Failed to delete account', error);
      toast.error('Failed to delete account');
    }
  };

  const showPassword = (id, element) => {
    const input = document.getElementById(id);
    if (input.type === 'password') {
      input.type = 'text';
      element.classList.add('show');
    } else {
      input.type = 'password';
      element.classList.remove('show');
    }
  };


  return (
    <div>
       <BreedCrumb pageTitle="Account Setting" currentPage="account-setting"/>
       <div className='py-8 container mx-auto flex'>
      <DashNav />
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Account Information */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Account Information</h2>
            <div className="flex items-center mb-6">
              <div className="mr-4">
                <img className="h-24 w-24 rounded-full object-cover" src={user?.profileImage || '/src/images/users/img-06.png'} alt="user-img" />
              </div>
              <input type="file" onChange={(e) => setProfileImage(e.target.files[0])} className="py-2 px-4 bg-gray-200 rounded" />
            </div>
            <form onSubmit={handleProfileUpdate} className="space-y-4">
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" placeholder="Full name" value={fullName} onChange={(e) => setFullName(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input type="tel" placeholder="Phone" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Website Links <span className="text-gray-500">(optional)</span></label>
                  <input type="url" placeholder="Website URL" value={website} onChange={(e) => setWebsite(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>
              <button type="submit" className="py-2 px-4 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save Changes</button>
            </form>
          </div>

          {/* Change Password */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div className="flex space-x-4">
                <div className="flex-1 relative">
                  <label className="block text-sm font-medium text-gray-700">Current Password</label>
                  <input type="password" placeholder="Password" id="cpassword" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer" onClick={() => showPassword('cpassword')}>
                    <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m0 0h3m-3 0H6m6 0h3m-6-4h.01M12 4h.01M12 16h.01M4 12h.01M20 12h.01M8 8h.01M16 8h.01M16 16h.01M8 16h.01M8 20h.01M16 20h.01M4 4h.01M20 4h.01" />
                    </svg>
                  </span>
                </div>
                <div className="flex-1 relative">
                  <label className="block text-sm font-medium text-gray-700">New Password</label>
                  <input type="password" placeholder="Password" id="npassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer" onClick={() => showPassword('npassword')}>
                    <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m0 0h3m-3 0H6m6 0h3m-6-4h.01M12 4h.01M12 16h.01M4 12h.01M20 12h.01M8 8h.01M16 8h.01M16 16h.01M8 16h.01M8 20h.01M16 20h.01M4 4h.01M20 4h.01" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="flex-1 relative">
                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input type="password" placeholder="Password" id="confirmpass" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer" onClick={() => showPassword('confirmpass')}>
                  <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m0 0h3m-3 0H6m6 0h3m-6-4h.01M12 4h.01M12 16h.01M4 12h.01M20 12h.01M8 8h.01M16 8h.01M16 16h.01M8 16h.01M8 20h.01M16 20h.01M4 4h.01M20 4h.01" />
                  </svg>
                </span>
              </div>
              <button type="submit" className="py-2 px-4 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save Changes</button>
            </form>
          </div>

          {/* Delete Account */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Delete Account</h2>
            <p className="text-sm text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan felis nunc, ut sagittis augue imperdiet quis. Vestibulum bibendum ultricies ipsum, id suscipit ligula facilisis ac. Praesent ultricies augue metus.
            </p>
            <button className="py-2 px-4 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" onClick={handleDeleteAccount}>
              <span className="flex items-center justify-center">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-1 12H6L5 7m7-4v4m0 0V3m0 0h-4m4 0h4m-4 4v4m0 0v4" />
                </svg>
                Delete Account
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default AccountSettings;
