import AdminRoutes from "../../../routes/AdminRoutes";
import AdminDrawerList from "../../component/AdminDrawerList";

const AdminDashboard = () => {
     const toggleDrawer = () => {}
     return (
          <div>
               <div className="lg:flex lg:h-[90vh]">
                    <section className="hidden lg:block h-full">
                         <AdminDrawerList toggleDrawer={toggleDrawer} />
                    </section>
                    <section className="p-10 w-full lg:w-[80%] overflow-y-auto">
                         <AdminRoutes />
                    </section>
               </div>
          </div>
     )
};

export default AdminDashboard;
