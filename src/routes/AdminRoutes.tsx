import { Route, Routes } from "react-router-dom";
import SellersTable from "../admin/pages/sellers/SellersTable";

const AdminRoutes = () => {
     return (
          <div>
               <Routes>
                    <Route path="/" element={<SellersTable />} />
               </Routes>
          </div>
     )
};

export default AdminRoutes;
