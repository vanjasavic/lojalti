import React from 'react'

export default function ThankYou() {
    return (
        <div className="uk-container uk-container-xsmall uk-margin-xlarge-top">

            <p className="uk-text-center uk-text-uppercase uk-text-large uk-text-success uk-text-bold">Hvala</p>

            <p className="uk-text-center uk-text-warning">Dobivate nagradu od <span className="uk-text-bold">40</span> bodova</p>

            <p className="uk-text-center uk-margin-medium-top">Vaša narudžba je uspješno dostavljena. Za više pojedinosti provjerite povijest narudžbi</p>

            <div className="uk-margin-xlarge-top">
                <button className="uk-button uk-button-secondary uk-align-center uk-border-rounded uk-width-1-1">Povijest</button>
                <button className="uk-button uk-button-default uk-align-center uk-border-rounded uk-width-1-1">Početna</button>
            </div>


        </div>
    )
}
