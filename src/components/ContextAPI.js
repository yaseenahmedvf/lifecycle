import React, { useContext, useEffect } from 'react'
import appContext from '../context/appContext';

export default function ContextAPI() {
  const a = useContext(appContext);
  useEffect(() => {
    a.update();
  },[])
  return (
    <div>
      <h2>This is context of  <b>{a.state.context}</b></h2>
      <hr /><hr/>
      <h6>This is reflection of state updation of contextAPI <b>{a.count}</b></h6>
    </div>
  )
}
