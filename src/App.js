import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


function App() {
  const cart = useSelector(state => state.cart);
  useEffect(()=>{
    fetch('https://helloworld-d7081-default-rtdb.firebaseio.com/',{
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
  const showCart = useSelector(state => state.ui.isCartVisible)
  return (
    <Layout>
      {showCart && 
      <Cart />
      }
      <Products />
    </Layout>
  );
}

export default App;
