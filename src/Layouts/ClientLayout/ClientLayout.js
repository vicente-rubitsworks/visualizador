import React from 'react';
import Home from '../../Pages/Home'
export default function ClientLayout(props) {
    const {children} = props
  return (<div>
      {children}
  </div>);
}
