import React from 'react'

export default function Order() {
    return (
        <div>
            <div className="uk-container uk-container-xsmall">

                <a href="" className="uk-background-deafult uk-icon-button uk-margin-small-right uk-margin-medium-top" uk-icon="chevron-left"></a>

                <div className="uk-margin-medium-top">

                    <p className="uk-text-bold uk-text-large">Kava s mlijekom</p>

                    <hr />

                    <div className="uk-grid-match uk-child-width-1-2@m uk-child-width-1-2" data-uk-grid>
                    
                    <div>
                        <p className="uk-text-large">19.65kn</p>
                    </div>

                    <div>
                        <div className="counter">
                            <div className="btn">+</div>
                            <div className="count">2</div>
                            <div className="btn">-</div>
                        </div>
                    </div>

                    </div>

                    <button className="uk-button uk-button-secondary uk-align-center uk-border-rounded uk-width-1-1 uk-margin-medium-top">Dodaj u naruđbu</button>

                </div>   

            </div>

        </div>
    )
}
