import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from './components/store/ui-slice';
import Notification from './components/UI/Notification';

let firstLoad = true;
function App() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);
  useEffect(()=>{
    async function fetchCartData(){
        dispatch(uiActions.showNotification({
          status:'pending',
          title:'Sending...',
          message:'Sending cart data!'
        }));
      const response = await fetch('https://helloworld-d7081-default-rtdb.firebaseio.com/cart.json',{
        method:'PUT',
        body:JSON.stringify(cart)
      });
      if(!response.ok) {
        throw new Error('Effects Error');
      }
      const data = await response.json();
      console.log(data);
      dispatch(uiActions.showNotification({
        status:'success',
        title:'Success!',
        message:'Sent cart data successfully!'
      }));
    }
    if(firstLoad) {
      firstLoad = false;
      return; 
    }
    fetchCartData().catch(err=>{

      dispatch(uiActions.showNotification({
        status:'error',
        title:'Error!',
        message:'Sending cart data failed!'
      }));
    });
  },[cart,dispatch]);

  /*
  useEffect(()=>{
    fetch('https://helloworld-d7081-default-rtdb.firebaseio.com/cart.json',{
      method:'PUT',
      body:JSON.stringify(cart)
    }).then(response=>{
      return response.json();
    }).then(data=>{
      console.log(data);
    }).catch(err=>{
      console.log(err);
    })
  },[cart]);
  */
  const showCart = useSelector(state => state.ui.isCartVisible)
  return (
    <Fragment>
   
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />  }
       <Layout>
      {showCart && 
      <Cart />
      }
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
