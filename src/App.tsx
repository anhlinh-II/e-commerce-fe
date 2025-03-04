import { Button, ThemeProvider } from '@mui/material';
import './App.css';
import { AddShoppingCart } from '@mui/icons-material';
import NavBar from './customer/component/navbar/NavBar';
import customeTheme from './theme/CustomeTheme';
import Home from './customer/page/home/Home';
import Product from './customer/page/product/Product';
import ProductDetails from './customer/page/pageDetails/ProductDetails';
import Review from './customer/page/review/Review';
import Cart from './customer/page/cart/Cart';
import Checkout from './customer/page/checkout/Checkout';
import Account from './customer/page/account/Account';


export default function App() {
  return (
    <ThemeProvider theme={customeTheme}>
      <div>
        <NavBar />
        {/* <Home /> */}
        {/* <Product /> */}
        {/* <ProductDetails /> */}
        {/* <Review /> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
        <Account />
      </div>
    </ThemeProvider>
  )
}
