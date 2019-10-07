import React from 'react';
// Components
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

// CSS
import './App.css';


class App extends React.Component {

  state = {

    userName: "Alex State (from state)",
    code: "React (from state)"

  }

  // Set state to whatever user currenty has typed
  nameChangedHandler = (e) => {
    this.setState({

      userName : e.target.value

    })
  }

  render() {

    return (
      <div >

        {/* Pass the onChange function into component as prop */}
        <UserInput nameChange={this.nameChangedHandler}/>
        
        {/* Using Props */}
        {/* <UserOutput userName="Alex" code="React" /> */}

        {/* Using State */}
        <UserOutput userName={this.state.userName} code={this.state.code} />

      </div>
    );

  }

}

export default App;
