import React, { useState } from 'react'
import Welcome from './blocks/Welcome'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const {login} = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email,password);
        console.log([email,password]);
    }

    return (
        <div className="uk-container uk-container-xsmall uk-margin-xlarge-top">

        <Welcome />

            <form onSubmit={handleSubmit} className="uk-margin-large">

                <div className="uk-margin">
                    <div>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="uk-input uk-width-1-1" type="email" />
                    </div>
                </div>

                <div className="uk-margin">
                    <div>
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Lozinka" className="uk-input" type="password" />
                    </div>
                </div>

                <p className="uk-text-warning uk-text-right">Zaboravljena lozinka?</p>

                <button className="uk-button uk-button-secondary uk-align-center uk-border-rounded uk-width-1-1">Prijava</button>

            </form>

            <p className="uk-heading-line uk-text-center"><span>ili</span></p>

            <div>
                <button className="uk-button uk-button-primary uk-align-center uk-border-rounded uk-width-1-1"><span data-uk-icon="facebook"></span> Facebook</button>
                <button className="uk-button uk-button-default uk-align-center uk-border-rounded uk-width-1-1"><span data-uk-icon="google"></span> Google</button>
                <p className="uk-text-center">Nemate račun? <span className="uk-text-success">Regstrirajte se</span></p>
            </div>

        </div>
    )
}
