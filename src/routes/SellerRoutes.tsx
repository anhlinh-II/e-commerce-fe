import { Route, Routes } from "react-router-dom";
import Dashboard from "../seller/pages/sellerDashboard/Dashboard";
import Products from "../seller/pages/products/Products";
import AddProduct from "../seller/pages/products/AddProduct";
import Orders from "../seller/pages/orders/Orders";
import Profile from "../seller/pages/account/Profile";
import Payment from "../seller/pages/payment/Payment";
import Transaction from "../seller/pages/payment/Transaction";

const SellerRoutes = () => {
     return (
          <div>
               <Routes>
                    <Route path='/*' element={<Dashboard />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/add-product' element={<AddProduct />} />
                    <Route path='/orders' element={<Orders />} />
                    <Route path='/account' element={<Profile />} />
                    <Route path='/payment' element={<Payment />} />
                    <Route path='/transaction' element={<Transaction />} />
               </Routes>
          </div>
     )
};

export default SellerRoutes;
