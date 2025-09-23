import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const toggleBtnHandler = ()=>{
    dispatch(uiActions.toggle());
  }
  const cartQuantity = useSelector(state => state.cart.totalQuantity)
  return (
    <button className={classes.button} onClick={toggleBtnHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
