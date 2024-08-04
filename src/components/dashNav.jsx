import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';

const DashNav = () => {
  const { logout } = useContext(AuthContext);
  const { user } = useContext(UserContext);

  return (
    <div className="flex">
      <div className="sticky top-3 flex-col items-center w-16 h-[600px] overflow-hidden lg:hidden flex text-gray-400 bg-gray-900 rounded">
        <Link className="flex items-center justify-center mt-3" to="/">
          <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
          </svg>
        </Link>
        <div className="flex flex-col items-center mt-3 border-t border-gray-700">
          <Link className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" to="/overview">
            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>
          <Link className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" to="/post-ads">
             <img className="w-6 h-6" src="/assets/css/more.png"/>
          </Link>
          <Link className="flex items-center justify-center w-12 h-12 mt-2 text-gray-200 bg-gray-700 rounded" to="/my-ads">
          <img className="w-6 h-6" src="/assets/css/loudspeaker.png"/>
          </Link>
        </div>
        <div className="flex flex-col items-center mt-2 border-t border-gray-700">
          <Link className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" to="/account-settings">
            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </Link>
          <button className="relative flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" onClick={logout}>
          <img className="w-6 h-6" src="/assets/css/logout.png"/>
          </button>
        </div>
        <Link className="flex items-center justify-center w-16 h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300" to="/account">
          <img className="w-8 h-8 rounded-full" src={user?.profileImage || '/default-profile.png'} alt="Profile" />
        </Link>
      </div>
      {/* Component Start */}
      <div className="lg:flex  flex-col items-center w-60 sticky top-10 h-[600px] hidden overflow-hidden text-gray-400 bg-gray-900 rounded">
        <Link className="flex items-center w-full px-3 mt-3" to="/">
          <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
          </svg>
          <span className="ml-2 text-sm font-bold">Beep</span>
        </Link>
        <div className="w-full px-2">
          <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
            <Link className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" to="/overview">
              <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="ml-2 text-sm font-medium">Dashboard</span>
            </Link>
            <Link className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" to="/post-ads">
            <img className="w-6 h-6" src="/assets/css/more.png"/>
              <span className="ml-2 text-sm font-medium">Post Ads</span>
            </Link>
            <Link className="flex items-center w-full h-12 px-3 mt-2 text-gray-200 bg-gray-700 rounded" to="/my-ads">
            <img className="w-6 h-6" src="/assets/css/loudspeaker.png"/>
              <span className="ml-2 text-sm font-medium">My Ads</span>
            </Link>
          </div>
          <div className="flex flex-col items-center mt-10 w-full border-t border-gray-700">
            <Link className="flex mt-10 items-center w-full h-12 px-3 rounded hover:bg-gray-700 hover:text-gray-300" to="/account-settings">
              <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <span className="ml-2 text-sm font-medium">Account Settings</span>
            </Link>
            <button className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" onClick={logout}>
            <img className="w-6 h-6" src="/assets/css/logout.png"/>
              <span className="ml-2 text-sm font-medium lg:inline hidden">Sign Out</span>
              <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
            </button>
          </div>
        </div>
        <Link className="flex gap-2 pl-10 items-center   w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300" to="/account-settings">
          <img className="w-8 h-8 rounded-full" src={user?.profileImage || '/default-profile.png'} alt="Profile" />
          <span className="ml-2 text-sm font-medium hidden lg:inline">{user?.name || 'Account'}</span>
        </Link>
      </div>
    </div>
  );
};

export default DashNav;
