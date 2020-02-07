import React, { useState } from 'react';
import UserLogIn from './UserLogIn'
function SignUp() {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPhoneNumber, setUserPhoneNumber] = useState()
    const [userDob, setUserDob] = useState();
    const [userPassword, setUserPassword] = useState();
    const [userSignUpCompleted,setUserSignUpCompleted] = useState(false)
    const handleSignIn = (event) =>{
        event.preventDefault();
        setUserSignUpCompleted(true)
    }
    return (
        <div>
            <form onSubmit={handleSignIn}>
                <div>
                    <label>
                        User Name:
                    </label>
                    <input type='text' value={userName} onChange={(e) => setUserName(e.target.value )}  required/>
                </div>
                <div>
                    <label>
                        User Email:
                    </label>
                    <input type='email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required />
                </div>
                <div>
                    <label>
                        User Phone Number:
                    </label>
                    <input type='tel' value={userPhoneNumber} onChange={(e) => setUserPhoneNumber(e.target.value)} required />
                </div>
                <div>
                    <label>
                        User Date Of Birth:
                    </label>
                    <input type='date' value={userDob} onChange={(e) => setUserDob(e.target.value)} required/>
                </div>
                <div>
                    <label>
                        User Password:
                    </label>
                    <input type="password"  value={userPassword} minlength="8" onChange={(e) => setUserPassword(e.target.value)} required />
                </div>
                <button type='submit' > Submit</button>
            </form>
                {userSignUpCompleted && <UserLogIn name={userName}/> }
        </div>
    )
}
export default SignUp;