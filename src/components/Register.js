import React, { useRef } from 'react'
import Welcome from './blocks/Welcome'
import { useAuth } from '../contexts/AuthContext'


export default function Register() {

    const email = useRef()
    const name= useRef()
    const surname = useRef()
    const password = useRef()
    const repassword = useRef()


    const {signUp,currentUser,addUser} = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        signUp(email.current.value,password.current.value).then((result) => {
            console.log("signup -> "+result);
            result ?
            addUser(email.current.value,name.current.value,surname.current.value) : console.log("neuspjesno dodavanje usera");
        });

    }

    return (
        <div className="uk-container uk-container-xsmall">

        <a href="" className="uk-background-deafult uk-icon-button uk-margin-small-right uk-margin-medium-top" uk-icon="chevron-left"></a>

        <div className="uk-margin-medium-top">

            <Welcome />

            <p className="uk-text-large uk-margin-medium-top">Registracija</p>

            <form onSubmit={handleSubmit} className="uk-margin-medium">

                    <div className="uk-margin">
                        <div>
                            <input placeholder="Email" ref={email}  className="uk-input uk-width-1-1" type="email" />
                        </div>
                    </div>

                    <div className="uk-margin">
                        <div>
                            <input placeholder="Ime"  ref={name} className="uk-input uk-width-1-1" type="text" />
                        </div>
                    </div>

                    <div className="uk-margin">
                        <div>
                            <input placeholder="Prezime"  ref={surname}  className="uk-input uk-width-1-1" type="text" />
                        </div>
                    </div>

                    <div className="uk-margin">
                        <div>
                            <input placeholder="Lozinka" ref={password}  className="uk-input" type="password" />
                        </div>
                    </div>

                    <div className="uk-margin">
                        <div>
                            <input placeholder="Ponovite lozinku" ref={repassword}  className="uk-input" type="password" />
                        </div>
                    </div>

                    

                    <button className="uk-button uk-button-secondary uk-align-center uk-border-rounded uk-width-1-1">Registriraj se</button>

            </form>
        
        </div>

        </div>
    )
}
