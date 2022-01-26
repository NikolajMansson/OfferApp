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
    
    return state;

}
export default cartReducer;