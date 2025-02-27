const DealCard = () => {
     return (
          <div className="w-[15rem] cursor-pointer">
               <img className="border-x-[7px] border-t-[7px] border-pink-600 w-full h-[12rem] object-cover object-top" src="https://down-vn.img.susercontent.com/file/sg-11134201-7rd5q-lx28n0i5dg9r64.webp" alt="" />
               <div className="border-4 border-black bg-black text-white p-2 text-center">
                    <p className="text-lg font-semibold">Smart Watch</p>
                    <p className="text-2xl font-bold">20% OFF</p>
                    <p className="text-balance text-lg">shop now</p>
               </div>
          </div>
     )
};

export default DealCard;
