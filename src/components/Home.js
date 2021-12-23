import React,{useEffect,useState} from 'react'
import Nav from './blocks/Nav'
import { useAuth } from '../contexts/AuthContext'
import List from './blocks/List'

export default function Home() {

    const {getItems,items} = useAuth();

    const [loading,setLoading ]= useState(true);

    /// uzmi iteme samo jednom kod prvog rendera
    useEffect(() => {
        const unsubscribe = getItems();
    
        return unsubscribe;
    }, []);

    useEffect(() => {
        if(items != null){
            setLoading(false);
        }
        console.log(loading);

    });

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

            
          
            {loading ? <p>Loading</p> :<List items={items} />}

        </div>
    )
}
