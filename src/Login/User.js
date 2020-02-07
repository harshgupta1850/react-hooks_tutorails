import React,{Component} from 'react';

class User extends Component{
    render(){
        return(
            <div>
                <h1> Welcome User</h1>
                <button onClick={this.props.clickData}>Logout</button>
                <br/>
                <input type='file'></input>
                <button >Upload</button>
            </div>
        )
    }

}

export default User;