import { doc, setDoc, collection, getDocs, getDoc } from "firebase/firestore";
import { db } from '../firebase'
    
    //dohvaca iteme u kaficu
    export async function getItems() {
        let _items = [];
        try{
            const querySnapshot = await getDocs(collection(db, "items"));
            querySnapshot.forEach((doc) => {
                _items.push(doc.data());
            });
            return _items;
        }catch{
            return false;
        }  
    }


//METODE ZA ITEME///

    //dodaj na orders s statusom aktivno
    async function makePurchase(order){
        const date = Date().toLocaleString()
        const month = date.getMonth();
        const day = date.getDate();
        const year = date.getFullYear();
        const id = id.concat(day,'.',month,'.',year,'.')
        try{
            const orderRef = doc(db, 'orders', id);
            await setDoc(orderRef, {orders:order},{merge:true});
        }catch{
            console.log("neuspjela kupnja");
        } 
    }

    //kada konobar prihvati narudzbu stavi status na complete
    async function updateOrderStatus(orderId){

    }

    //dodaje userima pointse nakon uspjesne narudzbe
    async function updateUserPoints(userId,points){

    }

/// KRAJ METODA ZA ITEME//


///METODE ZA STATISTIKU ///

    //zbraja podatak u kojem satu je obavljena narudzba, zbraja sveukupnu zaradu
    async function addStatistics(){

    }

//// KRAJ METODA ZA STATISTIKU ////