import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'


export default function Navbar(props) {
  const dispatch = useDispatch()
  const {changeTitle} = bindActionCreators(actionCreators,dispatch)
  const amount = useSelector(state => state.amount)
  const title = useSelector(state => state.title)
  if(title === 'Redux') {
    document.getElementById('balance').style.display='block';
  }
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand " to="/"><b>{title}</b></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lifecycle" onClick={()=>(changeTitle("Lifecycle"))}>Lifecycle</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hooks" onClick={()=>(changeTitle("Hooks"))}>Hooks</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hoc" onClick={()=>(changeTitle("High Order Component"))}>HOC</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/redux" onClick={()=>(changeTitle("Redux"))}>Redux</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/context" onClick={()=>(changeTitle("ContextAPI"))}>contextAPI</Link>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <label className="form-check-label mx-3 p-2" id='balance' style={{backgroundColor:'#3c4f63',color : 'white', display: 'none' }} htmlFor="flexSwitchCheckDefault">Total Balance: {amount}</label>

            <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'} mx-3`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
