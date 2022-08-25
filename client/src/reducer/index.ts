import { SET_ERROR, GET_ARTICULOS} from '../actions';

interface stateI {
    articulos: [{
        name: string,       
        description: string, 
        category: string, 
        stock: number, 
        price: number, 
        img: string
    }]
}

interface actionI {
    type: string;
   }

const initialState: stateI = {
    articulos: [
        {
            name: "Monitor 29",
            description: "Monitor WideScreen 29 Full Hd 4k", 
            category: "Perifericos", 
            stock: 13, 
            price: 400, 
            img: "https://www.computershopping.com.ar/Images/Productos/Grandes/29UM58-P_Foto1g.jpg"
            
        }
        
      
    ]
}

function rootReducer(state = initialState, action: actionI) {
    switch (action.type) {
       
        // case GET_ARTICULOS:
        //     return {
        //         ...state,
        //         articulos: action.payload,
        //                     }


        default:
            return state;
    }


}

export default rootReducer;