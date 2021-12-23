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
        return <li>{item.name+" ->"+item.price+"kn"}</li>;
      })

    return (
        <div className="uk-container uk-container-xsmall uk-margin-medium">

        <ul>
            {itemList}
        </ul>

        </div>
    )
}
