import React from 'react'

export default function Home(props) {
  return (
    <div>
      <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>The React Project</h1>
      <div className="mb-3">
        <p className="form-control" style={{backgroundColor: props.mode === 'light' ? 'white' : '#3c4f63',color : props.mode === 'light' ? 'black':'white'}}>
          This project covers the implementation of all basic core concepts of react.js <br />
          you can check the effects of implementation by click the links given in <b>Navbar</b>.
        </p>
      </div>
    </div>
  )
}
