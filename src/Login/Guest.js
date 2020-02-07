import React,{Component} from 'react';

class Guest extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.clickData}>Login</button>
                <button>Signup</button>
            </div>
        )
    }

}

export default Guest;