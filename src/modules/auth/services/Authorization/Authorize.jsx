import React, { useContext, useEffect, useState } from 'react';
import { AuthorizationContext } from './AuthorizationProvider';
import AccessDenied from 'pages/extra-pages/AccessDenied';

function Authorize(props) {
  var [isAuthorizedResult, setIsAuthorizedResult] = useState();

  const { isAuthorized } = useContext(AuthorizationContext);

  useEffect(() => {
    const authorizitionCheck = async () => {
      if (props.permission) {
        let result = await isAuthorized(props.permission);
        setIsAuthorizedResult(result);
      }
    };
    authorizitionCheck();
  }, [isAuthorized, props.permission]);

  if (isAuthorizedResult === true) {
    return <>{props.children}</>;
  } else if (isAuthorizedResult === false) {
    return props.accessDeniedElement ? props.AccessDeniedElement : <AccessDenied />;
  } else {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }
}
export default Authorize;
