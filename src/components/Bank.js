import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index'

function Bank() {
  const dispatch = useDispatch();
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch)

  return (
    <div>
      <h2>Deposit/Withdraw Money</h2>
      {/* <button className="btn btn-primary mx-3" onClick={() =>(disp(actionCreators.withdrawMoney(100)))}>-</button> */}
      <button className="btn btn-primary mx-3" onClick={() =>(withdrawMoney(100))}>-</button>

      <label>Update Balance</label>
      <button className="btn btn-primary mx-3" onClick={() =>(depositMoney(100))}>+</button>
      {/* <button className="btn btn-primary mx-3" onClick={() =>(disp(actionCreators.depositMoney(100)))}>+</button> */}
    </div>
  )
}

export default Bank