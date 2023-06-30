import React, { useState } from 'react';

function ChildComponent(props) {
  debugger;
  const [tableLocale, setTableLocale] = useState();
  debugger;
  return <div>Hello</div>;
}

export default React.memo(ChildComponent);
