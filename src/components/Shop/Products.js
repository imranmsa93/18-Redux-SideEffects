import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_RPODUCT = [
  {
    id:'p1',
    title:'Shampoo',
    price:6,
    description:"a short description"
  },
   {
    id:'p2',
    title:'Buscuit',
    price:16,
    description:"a short description"
  },
   {
    id:'p3',
    title:'Coffee Mug',
    price:12,
    description:"a short description"
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_RPODUCT.map(item => (
        <ProductItem 
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />
        )) }
        
      </ul>
    </section>
  );
};

export default Products;
