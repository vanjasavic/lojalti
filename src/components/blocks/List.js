import React from 'react'


export default function List({ items }) {

    //LOGIKA if (items == undefined ) ? prikazi loading : prikazi iteme; 

    //<a href=""> 
    // <div className="uk-grid-small uk-margin-small" data-uk-grid>
        // <div className="uk-width-expand" data-uk-leader>Kava s mlijekom</div>
       //  <div>9.00kn/350</div>
     //</div>
    // </a>

    var itemList = items.map((item)=>{
        return <div className="uk-margin-small uk-border-rounded uk-card-border uk-card uk-card-default uk-card-body uk-width-1-2@m">
            {item.name+" ->"+item.price+"kn"}
            </div>;
      })

    return (
        <div className="uk-container uk-container-xsmall uk-margin-medium">

        <div>
            {itemList}
        </div>

        </div>
    )
}
