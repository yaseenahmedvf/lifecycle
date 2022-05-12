import React, { Component } from "react";

export default class ClassBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      updateCount: 0,
      updateCond: true,
      cond: 1,
      date: new Date(),
    };
  }

  disable = () => {
    this.setState({ cond: 0 }); //to disable the getDerivedStateFromProps
  };
  //=========================================Mounting Phase=======================

  static getDerivedStateFromProps(props, state) {
    if (state.cond) {
      return { counter: parseInt(props.count) };
    }
  }

  componentDidMount() {
    setInterval(() => this.setState({ counter: this.state.counter + 1 }), 1000);
    console.log("Run on derived method");
  }

  // componentDidMount() {
  //   setTimeout(()=>{
  //     this.setState({counter:this.state.counter+1});
  //   },2000);
  // }

  //===========================================Updating Phase=========================

  resetCounter = () => {
    this.setState({ counter: 0 });
  };

  shouldComponentUpdate() {
    if (this.state.updateCount === 30) {
      this.setState({updateCond: false});
    }
    return this.state.updateCond;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("before").innerHTML =
      "Before the update the counter was : " + prevState.counter;
  }
  componentDidUpdate() {
    this.setState({ updateCount: this.state.updateCount + 1 });
  }



  //============================================Unmounting============================
  //This component will unmount in another component
  componentWillUnmount() {
    alert("Do you want to unmount the component?");
  }

  //===========================================render method==========================
  render() {
    return (
      <div>
        {/* <h1>Hi!</h1>
        <h2>This is {this.state.date.toLocaleTimeString()}</h2> */}
        <h1>Hi! The counter will update</h1>
        <h2>Counter is : {this.state.counter}</h2>
        <h2>update counter is: {this.state.updateCount}</h2>
        <h2 className="before" id="before"></h2>
        <button className="btn-primary" onClick={this.resetCounter}>
          Reset counter to zero
        </button>
        <button className="btn-primary" onClick={this.disable}>
          <code>Disable getDerivedStateFromProps()</code>
        </button>
      </div>
    );
  }
}
