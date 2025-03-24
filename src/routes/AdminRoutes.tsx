import { Route, Routes } from "react-router-dom";
import SellersTable from "../admin/pages/sellers/SellersTable";
import Coupon from "../admin/pages/coupon/Coupon";
import AddNewCouponForm from "../admin/pages/coupon/AddNewCouponForm";
import GridTable from "../admin/pages/homepage/GridTable";
import ElectronicTable from "../admin/pages/homepage/ElectronicTable";
import ShopByCategoryTable from "../admin/pages/homepage/ShopByCategoryTable";
import Deal from "../admin/pages/homepage/Deal";

const AdminRoutes = () => {
     return (
          <div>
               <Routes>
                    <Route path="/" element={<SellersTable />} />
                    <Route path="/coupons" element={<Coupon />} />
                    <Route path="/add-coupon" element={<AddNewCouponForm />} />
                    <Route path="/home-grid" element={<GridTable />} />
                    <Route path="/electronics-category" element={<ElectronicTable />} />
                    <Route path="/shop-by-category" element={<ShopByCategoryTable />} />
                    <Route path="/deals" element={<Deal />} />
               </Routes>
          </div>
     )
};

export default AdminRoutes;
