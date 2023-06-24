import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import AuthenticationService from './AuthenticationService';

function Authenticate(props) {
  var [isAuthenticatedResult, setIsAuthenticatedResult] = useState();
  const authenticationService = new AuthenticationService();

  useEffect(() => {
    const authenticationCheck = async () => {
      let authenticate = await authenticationService.isAuthenticated();
      setIsAuthenticatedResult(authenticate);
    };
    authenticationCheck();
  }, []);

  if (isAuthenticatedResult === true) {
    return <>{props.children}</>;
  } else if (isAuthenticatedResult === false) {
    return <Navigate to="/login" replace />;
  } else {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }
}
export default Authenticate;
