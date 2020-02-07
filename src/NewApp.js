import React, { Component } from 'react';
import { connect } from 'react-redux';
import actionCreator from './Store/Action/Actions'
class NewApp extends Component {

  render() {
    return (
      <div className="App">
        <div>
            A:{this.props.a}
            <button onClick={this.props.updateA}>Update A</button>
        </div>
        <div>
            B:{this.props.b}
            <button onClick={this.props.updateB}>Update B</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        a:state.NewReducer.a,
        b:state.NewReducer.b
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateA: () => dispatch({type:'UPDATE_A'}),
        updateB: () => dispatch({type:'UPDATE_B'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewApp);



