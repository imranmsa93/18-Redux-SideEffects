
import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
          status:'pending',
          title:'Sending...',
          message:'Sending cart data!'
        }));
    
    const sendRequest = async () => {
        const response = await fetch('https://helloworld-d7081-default-rtdb.firebaseio.com/cart.json',{
        method:'PUT',
        body:JSON.stringify(cart)
      });
      if(!response.ok) {
        throw new Error('Effects Error');
      }
       const data = await response.json();
       console.log(data);

    } 
    try { 
        await sendRequest(); 
        dispatch(uiActions.showNotification({
        status:'success',
        title:'Success!',
        message:'Sent cart data successfully!'
      }));
     

    } catch(error) {
        dispatch(uiActions.showNotification({
        status:'error',
        title:'Error!',
        message:'Sending cart data failed!'
      }));
    }
  }
}
export const fetchCartData = () => {
    return async (dispatch) => {
          dispatch(uiActions.showNotification({
          status:'pending',
          title:'Fetching...',
          message:'Fetching cart data!'
        }));
        const fetchData = async () => {
            const response = await fetch('https://helloworld-d7081-default-rtdb.firebaseio.com/cart.json');
            if(!response.ok) {
                throw new Error('Could not fetch cart data!');
            }
            const data = await response.json();
            dispatch(uiActions.showNotification({
                status:'success',
                title:'Success!',
                message:'cart data fetched successfully!'
            }));
            console.log(data);
            return data;
        };
        try {
            const cartData = await fetchData();
        
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));
        } catch(error) {
            dispatch(uiActions.showNotification({
                status:'error',
                title:'Error!',
                message:'Fetching cart data failed!'
              }));
        }
    }
}