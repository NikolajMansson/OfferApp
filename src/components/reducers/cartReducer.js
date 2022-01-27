import { ADD_TO_CART } from '../actions/action-types/cart-actions';

const initState = {
    items: [
        {id:1,name:'Balkongstädning', department: "Uppsala", price:150.00},
        {id:2,name:'Fönsterputs', department: "Uppsala", price:300.00},
        {id:3,name:'Bortforsling av skräp', department: "Uppsala", price:400.00},
        {id:4,name:'Fönsterputs', department: "Stockholm", price:300.00},
        {id:5,name:'Balkongstädning', department: "Uppsala", price:150.00},
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
        let existed_item = state.addedItems.find(item=>action.id === item.id)
        if(existed_item){
            addedItem.quantity +=1
            return{
                ...state,
                total: state.total + addedItem.price
            }
        }else{
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price

            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }
        }
    }
    else{
        return state;
    }
}
export default cartReducer;