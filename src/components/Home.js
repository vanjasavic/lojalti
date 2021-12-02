import React from 'react'
import Nav from './blocks/Nav'
import List from './blocks/List'

export default function Home() {
    return (
        <div>

            <div className="uk-background-secondary uk-container uk-container-xsmall uk-light border-rounded">
                
            <Nav />

                <p className="uk-text-large uk-text-bold uk-margin-remove-bottom">Bok <br/><span className="uk-text-large uk-text-bold">Korisniče!</span></p>

                <div className="uk-card uk-card-default uk-card-body uk-width-1-1 uk-text-center uk-padding-small uk-align-center uk-margin-medium-bottom uk-margin-medium-top uk-text-small uk-border-rounded uk-margin-small-top">
                    <p className="uk-margin-remove">Trenutno imate</p>
                    <p className="uk-margin-remove"><span className="uk-text-large uk-text-success uk-text-bold ">350</span> <br />bodova</p>
                </div>

            </div>

            <List />

        </div>
    )
}
