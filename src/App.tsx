import { Button, ThemeProvider } from '@mui/material';
import './App.css';
import NavBar from './customer/component/navbar/NavBar';
import customeTheme from './theme/CustomeTheme';
import Home from './customer/page/home/Home';
import Product from './customer/page/product/Product';
import ProductDetails from './customer/page/pageDetails/ProductDetails';
import Review from './customer/page/review/Review';
import Cart from './customer/page/cart/Cart';
import Checkout from './customer/page/checkout/Checkout';
import Account from './customer/page/account/Account';
import { Route, Routes } from 'react-router-dom';
import BecomeSeller from './customer/page/becomeSeller/BecomeSeller';
import SellerDashboard from './seller/pages/sellerDashboard/SellerDashboard';
import AdminDashboard from './admin/pages/dashboard/Dashboard';


export default function App() {
  return (
    <ThemeProvider theme={customeTheme}>
      <div>
        {/* <Home /> */}
        {/* <Product /> */}
        {/* <ProductDetails /> */}
        {/* <Review /> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
        {/* <Account /> */}
        <NavBar />
        <Routes>

          <Route path='*' element={<Home />} />
          <Route path='/products/:category' element={<Product />} />
          <Route path='/reviews/:productId' element={<Review />} />
          <Route path='/product-details/:categoryId/:name/:productId' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/account/*' element={<Account />} />
          <Route path='/become-seller' element={<BecomeSeller />} />
          <Route path='/seller/*' element={<SellerDashboard />} />
          <Route path='/admin/*' element={<AdminDashboard />} />

        </Routes>
      </div>
    </ThemeProvider>
  )
}
