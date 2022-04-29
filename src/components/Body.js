import React, { Component } from "react";
import ClassBase from "./ClassBase";

export default class Body extends Component {
constructor(props) {
  super(props);
  this.state = {show: true} 
}

removeLifecycle = () =>{
  this.setState({show: false});
}

  render() {
    let lifecycle;
    if(this.state.show) {
      lifecycle = <ClassBase count="7" />
    }
    return (
      <div>
       { console.log("timer :::: ")}
        {lifecycle};
        <button className="btn-primary" onClick={this.removeLifecycle}>Unmount Lifecycle</button>
      </div>
    );
  }
}
