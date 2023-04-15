
import React from 'react';
import Child from './Child';



class App extends React.Component {

state = {

      showHide: false

    };
  
  


  toggleShowHide = () => {
    this.setState(() => ({showHide: !this.state.showHide}))
  }

  render() {
  return (
    <div>
        <p>{this.state.showHide ? <Child /> : '' }</p>
        <br/>
        <button onClick={this.toggleShowHide}>{this.state.showHide ? 'Hide' : 'Show' }</button>


    </div>
  );
}
}

export default App;
