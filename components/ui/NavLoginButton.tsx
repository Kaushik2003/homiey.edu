'use client';

import { useEffect, useState } from 'react';
import LoginButton from '../OCIDLoginButton';
import { useOCAuth } from '@opencampus/ocid-connect-js';


export default function NavLoginButton() {
  const { authState, ocAuth } = useOCAuth() || {}; // Ensure authState is always defined
  const [authData, setAuthData] = useState<string | null>(null);

  useEffect(() => {
    if (authState?.isAuthenticated) {
      setAuthData(JSON.stringify(ocAuth?.getAuthState(), null, 2));
    }
  }, [authState?.isAuthenticated, ocAuth]);

  if (!authState) {
    return <div className="text-gray-500">Initializing authentication...</div>;
  }

  if (authState.error) {
    return <div className="text-red-500">Error: {authState.error.message}</div>;
  }

  if (authState.isLoading) {
    return <div className="text-gray-500">Loading...</div>;
  }

  // console.log("AUTH STATE IN REDIRECT:", authState?.OCId);
  

  return (
    <div className="p-4">
      {authState.isAuthenticated ? (
        <div>
          
          <pre className="p-2 rounded">{authState?.OCId}</pre>
          {/* <pre className="p-2 rounded">{JSON.stringify(authState?.OCId, null, 2).slice(0, 100)}</pre> */}

        </div>
      ) : (
        <LoginButton />
        
      )}
    </div>
  );
}
