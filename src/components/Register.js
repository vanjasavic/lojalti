import React from 'react'
import Welcome from './blocks/Welcome'


export default function Register() {
    return (
        <div className="uk-container uk-container-xsmall">

        <a href="" className="uk-background-deafult uk-icon-button uk-margin-small-right uk-margin-medium-top" uk-icon="chevron-left"></a>

        <div className="uk-margin-medium-top">

            <Welcome />

            <p className="uk-text-large uk-margin-medium-top">Registracija</p>

            <form className="uk-margin-medium">

                    <div className="uk-margin">
                        <div>
                            <input placeholder="Email" className="uk-input uk-width-1-1" type="email" />
                        </div>
                    </div>

                    <div className="uk-margin">
                        <div>
                            <input placeholder="Ime" className="uk-input uk-width-1-1" type="text" />
                        </div>
                    </div>

                    <div className="uk-margin">
                        <div>
                            <input placeholder="Prezime" className="uk-input uk-width-1-1" type="text" />
                        </div>
                    </div>

                    <div className="uk-margin">
                        <div>
                            <input placeholder="Lozinka" className="uk-input" type="password" />
                        </div>
                    </div>

                    <div className="uk-margin">
                        <div>
                            <input placeholder="Ponovite lozinku" className="uk-input" type="password" />
                        </div>
                    </div>

                    <button className="uk-button uk-button-secondary uk-align-center uk-border-rounded uk-width-1-1">Registriraj se</button>

            </form>
        
        </div>

        </div>
    )
}
