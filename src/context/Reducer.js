
export const initialState = {
    products:[],
    cart: [],
    filter:'',
}

const Reducer = (state, action) => {
    switch(action.type){
        case 'ADD-TO-STATE':
            return {
                ...state,
                 products:action.payload
                }
        case 'ADD-TO-CART':
            return{
                ...state,
                cart:[{...action.payload, qty:1}, ...state.cart]
            }
        case 'REMOVE-FROM-CART':
            return{
                ...state,
                cart: state.cart.filter(p => p.id !== action.payload)
            }
        case 'CHANGE-QUANTITY':
            return{
                ...state,
                cart: state.cart.filter(p => p.id === action.payload.id ? p.qty = action.payload.qty : p.qty )
            }
        case 'SEARCHED':
            return{
                ...state,
                filter:action.payload,
                products:state.products.filter(p => p.title.includes(state.filter))
            }
        case 'REMOVE-ALL':
            return{
                ...state,
                cart:[]
            }
        default:
            return state;
    }
}

export default Reducer