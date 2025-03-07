import { Button, Divider } from "@mui/material";
import CategoryGrid from "./categoryGrid/CategoryGrid";
import Deal from "./deal/Deal";
import ElectricCategory from "./electricCategory/ElectricCategory";
import ShopByCategory from "./shopByCategory/ShopByCategory";
import { Storefront } from "@mui/icons-material";

const Home = () => {
     return (
          <>
               <div className="space-y-5 lg:space-y-10 relative pb-20">
                    <CategoryGrid />
                    <Divider></Divider>
                    <ElectricCategory />

                    <div className="pt-20">
                         <h1 className="text-lg text-center lg:text-4xl font-bold text-primary-color pb-5 lg:pb-10">TODAY'S DEALS</h1>
                         <Deal />
                    </div>
                    <section className="py-20">
                         <h1 className="text-lg text-center lg:text-4xl font-bold text-primary-color pb-5 lg:pb-10">SHOP BY CATEGORY</h1>
                         <ShopByCategory />
                    </section>
                    <section className="lg:px-20 mt-20 relative h-[200px] lg:h-[450px] object-cover">
                         <img className="w-full h-full" src="https://media.istockphoto.com/id/1329619660/photo/laptop-computer-screen-mockup-template-background-banner-man-hand-typing-laptop-computer-with.jpg?b=1&s=612x612&w=0&k=20&c=H2izMd0LveVGKTGrEwxhuM3kEPsK1Oc5E_cewGOhGVg=" alt="" />
                         <div className="absolute top-1/2 right-4 lg:right-[15rem] transform -translate-y-1/2 font-semibold lg:text-4xl space-y-3">
                              <h1>Sell Your Product</h1>
                              <p className="text-lg md:text-2xl">With <span className="logo">Eirei Shop</span></p>
                              <div className="pt-6 flex justify-center">
                                   <Button startIcon={<Storefront />} variant="contained" size="large">
                                        Become Seller
                                   </Button>
                              </div>
                              
                         </div>
                    </section>
               </div>
          </>
     )
};

export default Home;
