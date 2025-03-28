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
import { Route, Routes, useNavigate } from 'react-router-dom';
import BecomeSeller from './customer/page/becomeSeller/BecomeSeller';
import SellerDashboard from './seller/pages/sellerDashboard/SellerDashboard';
import AdminDashboard from './admin/pages/dashboard/Dashboard';
import { useEffect } from 'react';
import { fetchProduct } from './state/fetchProduct';
import { useAppDispatch, useAppSelector } from './state/store';
import { fetchSellerProfile } from './state/seller/sellerSlice';
import Auth from './customer/page/auth/Auth';
import { fetchUserProfile } from './state/authSlice';
import PaymentSucess from './customer/page/PaymentSuccess';
import Wishlist from './customer/page/wishlist/Wishlist';

export default function App() {
  const dispatch = useAppDispatch();
  const {seller, auth} = useAppSelector(store => store);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSellerProfile(localStorage.getItem("jwt") || ""))
  }, [])

  useEffect(() => {
    if(seller.profile) {
      navigate("/seller")
    }
  }, [seller.profile])

  useEffect(() => {
    dispatch(fetchUserProfile({jwt: auth.jwt || localStorage.getItem('jwt')}))
  }, [auth.jwt])

  return (
    <ThemeProvider theme={customeTheme}>
      <div>
        <NavBar />
        <Routes>

          <Route path='*' element={<Home />} />
          <Route path='/login' element={<Auth />} />
          <Route path='/products/:category' element={<Product />} />
          <Route path='/reviews/:productId' element={<Review />} />
          <Route path='/product-details/:categoryId/:name/:productId' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/payment-success' element={<PaymentSucess />} />
          <Route path='/account/*' element={<Account />} />
          <Route path='/become-seller' element={<BecomeSeller />} />
          <Route path='/seller/*' element={<SellerDashboard />} />
          <Route path='/admin/*' element={<AdminDashboard />} />

        </Routes>
      </div>
    </ThemeProvider>
  )
}
