import React,{Component} from 'react';
import User from './User.js';
import Guest from './Guest.js';

class AppUser extends Component{
    constructor(props){
        super(props)
        this.state={
            userName:'',
            password:'',
            isLoggedIn:false
        }
    }
    clickLogIn = () =>{
        this.setState({
            isLoggedIn: true
        })
    }
    clickLogOut = () =>{
        this.setState({
            isLoggedIn: false
        })
    }
    render(){
        return(
            <div>
                <div>
                    <label>
                        User Name:
                    </label>
                    <input type='text' value={this.state.userName}   required/>
                </div>
                <div>
                    <label>
                        User Password:
                    </label>
                    <input type="password"  value={this.state.password} minlength="8"  required />
                </div>
                {this.state.isLoggedIn ? <User clickData={this.clickLogOut}/> : <Guest clickData={this.clickLogIn}/>}
            </div>
        )
            
    }
}

export default AppUser;