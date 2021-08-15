export const initialState = {
    cart: [],
    user: null
};

export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0 );  

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case "Add_To_Cart":
            // Logic for adding item to cart
            return {
                ...state,
                cart: [...state.cart, action.item]
            }
        case "Remove_From_Cart":
            // Logic for removing item from cart
            let newCart = [ ...state.cart];
            
            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);
            
            if(index >= 0){
                // item exists in cart, remove it...
                newCart.splice(index, 1);
            }else{
                console.warn(
                    `Can't remove product (id: ${action.id} ) as its not in cart.`
                )
            }
            return { ...state,
                cart: newCart,
            }
        default:
            return state;
    }
}

export default reducer