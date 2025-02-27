import "./ShopByCategory.css"

const ShopByCategoryCard = () => {
     return (
          <div className="flex gap-3 flex-col justify-center items-center group cursor-pointer">
               <div className="custome-border w-[150px] h-[150px] rounded-full lg:w-[249px] lg:h-[249px] bg-primary-color">
                    <img className="rounded-full group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full" src="https://down-vn.img.susercontent.com/file/sg-11134201-7rd5q-lx28n0i5dg9r64.webp" alt="" />
               </div>
               <h1>Kitchen & Table</h1>
          </div>
     )
};

export default ShopByCategoryCard;
