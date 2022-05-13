import appContext from './appContext';
import { useState } from 'react';

const ContextState = (props) => {
  const state = {
    "context": "API state"
  }

  const [count, setstate] = useState("State 1");
  const update = () => {
    setInterval(() => {
      setstate("State 2");
    },1000);

  }
  return(
    <appContext.Provider value = {{state, update, count}}>
      {props.children}
    </appContext.Provider>
  )
}

export default ContextState;