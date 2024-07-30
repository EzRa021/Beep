// import React, { useContext, useEffect } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// const ProtectedRoute = ({ element: Component }) => {
//   const { user, setUser } = useContext(AuthContext);
//   const location = useLocation();

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, [setUser]);

//   return user ? <Component /> : <Navigate to="/sign-in" state={{ from: location }} />;
// };

// export default ProtectedRoute;
