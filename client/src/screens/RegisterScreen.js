import React, { useState } from 'react';
import axios from 'axios';
import Loading from '../component/Loading';
import Error from '../component/Error';
import Success from '../component/Success';

function RegisterScreen() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    async function register() {
        if (password === confirmPassword) {
            const user = { name, email, password, confirmPassword };
            try {
                setLoading(true);
                const result = (await axios.post("/api/users/register", user)).data;
                setLoading(false);
                setSuccess(true);

                setName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true);
            }
        }
        else {
            alert("Passwords do not match");
        }
    }
    return (
        <div>
            {loading && <Loading />}
            {error && <Error message="Registration failed"/>}
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5 bs'>
                    {success && <Success message="Registration Successful" />}
                    <div >
                        <h1>Register</h1>
                        <input type='text' className='form-control' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                        <input type='text' className='form-control' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type='text' className='form-control' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input type='text' className='form-control' placeholder='confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                        <button className='btn btn-dark m-3' onClick={register}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterScreen