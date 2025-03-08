'use client'

import { useOCAuth } from '@opencampus/ocid-connect-js';

export default function LoginButton() {
  const { ocAuth } = useOCAuth();

  const handleLogin = async () => {
    try {
      await ocAuth.signInWithRedirect({ state: 'opencampus' });
    } catch (error) {
      console.error('Login error:', error);
    }
  };
//   const handleLogout = async () => {
//     try {
//       // Remove from localStorage & sessionStorage
//       localStorage.removeItem("oc-token-storage");
//       sessionStorage.clear();
  
//       // Remove cookies
//       Cookies.remove("oc-token-storage");
//       Cookies.remove("oc-session"); // Remove any other auth-related cookies
  
//       // Force reload to clear any in-memory auth state
//       window.location.reload(); 
  
//       console.log("Logged out successfully");
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };


  return <div>
    <button onClick={handleLogin}>Login</button>
    {/* <button onClick={handleLogout}>Logut</button>; */}
  </div>
}