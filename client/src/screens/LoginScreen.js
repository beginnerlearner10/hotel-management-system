import React, { useState } from 'react';
import axios from 'axios';
import Loading from '../component/Loading';
import Error from '../component/Error';

function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    async function login(){
            const user={email,password};
            try {
                setLoading(true);
                const result=(await axios.post("/api/users/login",user)).data; 
                setLoading(false);

                localStorage.setItem("currentUser",JSON.stringify(result));
                window.location.href='/home';


             } catch (error) {
                 console.log(error);
                 setLoading(false);
                 setError(true);
             }
        
    }
    return (
        <div>
            {loading && <Loading/>}
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5 bs'>
                    {error && <Error message="Invalid credentails"/>}
                    <div >
                        <h1>Login</h1>
                        <input type='text' className='form-control' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type='text' className='form-control' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />

                        <button className='btn btn-dark m-3' onClick={login}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen