import React,{useEffect}from 'react'
import { useAuth } from '../../contexts/AuthContext'

export default function List() {

    const {getItems,items} = useAuth();

    /// uzmi iteme samo jednom kod prvog rendera
    useEffect(() => {
        const unsubscribe = getItems();
    
        return unsubscribe;
    }, [])

    //LOGIKA if (items == undefined ) ? prikazi loading : prikazi iteme; 

    return (
        <div className="uk-container uk-container-xsmall uk-margin-medium">

        <a href=""> 
            <div className="uk-grid-small uk-margin-small" data-uk-grid>
                <div className="uk-width-expand" data-uk-leader>Kava s mlijekom</div>
                <div>9.00kn/350</div>
            </div>
        </a>

        <div className="uk-grid-small uk-margin-small" data-uk-grid>
            <div className="uk-width-expand" data-uk-leader>Karlovačko 0.5l</div>
            <div>15.00kn/1050</div>
        </div>
        
        <a href=""> 
            <div className="uk-grid-small uk-margin-small" data-uk-grid>
                <div className="uk-width-expand" data-uk-leader>Kava s mlijekom</div>
                <div>9.00kn/350</div>
            </div>
        </a>

        <div className="uk-grid-small uk-margin-small" data-uk-grid>
            <div className="uk-width-expand" data-uk-leader>Karlovačko 0.5l</div>
            <div>15.00kn/1050</div>
        </div>
        
        <a href=""> 
            <div className="uk-grid-small uk-margin-small" data-uk-grid>
                <div className="uk-width-expand" data-uk-leader>Kava s mlijekom</div>
                <div>9.00kn/350</div>
            </div>
        </a>

        <div className="uk-grid-small uk-margin-small" data-uk-grid>
            <div className="uk-width-expand" data-uk-leader>Karlovačko 0.5l</div>
            <div>15.00kn/1050</div>
        </div>

        <a href=""> 
            <div className="uk-grid-small uk-margin-small" data-uk-grid>
                <div className="uk-width-expand" data-uk-leader>Kava s mlijekom</div>
                <div>9.00kn/350</div>
            </div>
        </a>

        <div className="uk-grid-small uk-margin-small" data-uk-grid>
            <div className="uk-width-expand" data-uk-leader>Karlovačko 0.5l</div>
            <div>15.00kn/1050</div>
        </div>
        
        <a href=""> 
            <div className="uk-grid-small uk-margin-small" data-uk-grid>
                <div className="uk-width-expand" data-uk-leader>Kava s mlijekom</div>
                <div>9.00kn/350</div>
            </div>
        </a>

        <div className="uk-grid-small uk-margin-small" data-uk-grid>
            <div className="uk-width-expand" data-uk-leader>Karlovačko 0.5l</div>
            <div>15.00kn/1050</div>
        </div>

        <a href=""> 
            <div className="uk-grid-small uk-margin-small" data-uk-grid>
                <div className="uk-width-expand" data-uk-leader>Kava s mlijekom</div>
                <div>9.00kn/350</div>
            </div>
        </a>

        <div className="uk-grid-small uk-margin-small" data-uk-grid>
            <div className="uk-width-expand" data-uk-leader>Karlovačko 0.5l</div>
            <div>15.00kn/1050</div>
        </div>
        
        <a href=""> 
            <div className="uk-grid-small uk-margin-small" data-uk-grid>
                <div className="uk-width-expand" data-uk-leader>Kava s mlijekom</div>
                <div>9.00kn/350</div>
            </div>
        </a>

        <div className="uk-grid-small uk-margin-small" data-uk-grid>
            <div className="uk-width-expand" data-uk-leader>Karlovačko 0.5l</div>
            <div>15.00kn/1050</div>
        </div>


        </div>
    )
}
