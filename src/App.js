import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from './Store/Action/Actions'
import logo from "./logo.svg";

class App extends Component {
  // state={
  //   age:21
  // }
  // onAgeUp = ()=>{
  //   this.setState({
  //     ...this.state,
  //     age:++this.state.age
  //   })
  // }
  // onAgeDown = () =>{
  //   this.setState({
  //     ...this.state,
  //     age:--this.state.age
  //   })
  // }
  render() {
    return (
      <div className="App">
        <div>Age:{this.props.age}</div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        {this.props.loading && <img src={logo} className='App-Logo' ></img>}
        <div> History:
          <ul>
            {this.props.history.map(age => <li key={age.id} onClick={()=>this.props.delete(age.id)}>{age.age}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    age: state.reducer.age,
    history: state.reducer.history,
    loading: state.reducer.loading

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch(actionCreator.ageUp()),
    onAgeDown: () => dispatch(actionCreator.ageDown()),
    delete: (id) => dispatch(actionCreator.toDelete(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



