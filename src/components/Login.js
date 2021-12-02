import React from 'react'
import Welcome from './blocks/Welcome'

export default function Login() {
    return (
        <div className="uk-container uk-container-xsmall uk-margin-xlarge-top">

        <Welcome />

            <form className="uk-margin-large">

                <div className="uk-margin">
                    <div>
                        <input placeholder="Email" className="uk-input uk-width-1-1" type="email" />
                    </div>
                </div>

                <div className="uk-margin">
                    <div>
                        <input placeholder="Lozinka" className="uk-input" type="password" />
                    </div>
                </div>

                <p className="uk-text-warning uk-text-right">Zaboravljena lozinka?</p>

                <button className="uk-button uk-button-secondary uk-align-center uk-border-rounded uk-width-1-1">Prijava</button>

            </form>

            <hr/>

            <div>
                <p className="uk-text-center">ili</p>
                <button className="uk-button uk-button-primary uk-align-center uk-border-rounded uk-width-1-1"><span data-uk-icon="facebook"></span> Facebook</button>
                <button className="uk-button uk-button-default uk-align-center uk-border-rounded uk-width-1-1"><span data-uk-icon="google"></span> Google</button>
                <p className="uk-text-center">Nemate račun? <span className="uk-text-success">Regstrirajte se</span></p>
            </div>

        </div>
    )
}
