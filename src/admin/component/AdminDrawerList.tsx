import DrawerList from "../../component/DrawerList";

const AdminDrawerList = ({menu, menu2, toggleDrawer}: any) => {
     return (
          <DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer} />
     )
};

export default AdminDrawerList;
