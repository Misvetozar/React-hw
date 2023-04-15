import React from "react";

class Child extends React.Component {

    state = {
        isToggle: false
      }
    
  
    toggleHandler = () => {
      this.setState(() => ({isToggle: !this.state.isToggle}))
    }
  
    render() {
    return (
      <div>
          <p>Name: {this.state.isToggle ? 'Mykola' : 'Stepan'}, {this.state.isToggle ? '30' : '25'}</p>
          <br/>
          <button onClick={this.toggleHandler}>Click on me</button>
  
  
      </div>
    );
  }
  }

export default Child; 