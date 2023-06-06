import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthenticationContext } from 'modules/auth/services/Authentication/AuthenticationProvider';
import Authorize from 'modules/auth/services/Authorization/Authorize';

function Authenticate(props) {
  var [isAuthenticatedResult, setIsAuthenticatedResult] = useState();
  const { isAuthenticated } = useContext(AuthenticationContext);

  useEffect(() => {
    const authenticationCheck = () => {
      isAuthenticated().then((authenticate) => {
        setIsAuthenticatedResult(authenticate);
      });
    };
    authenticationCheck();
  }, [isAuthenticated]);

  if (isAuthenticatedResult === true) {
    return props.justAuthenticate === true ? <>{props.children}</> : <Authorize {...props}>{props.children}</Authorize>;
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
