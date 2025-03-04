import { ElectricBolt } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { blue } from "@mui/material/colors";

const OrderItem = () => {
     return (
          <div className="text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer">
               <div className="flex items-center gap-5">
                    <div>
                         <Avatar sizes="small" sx={{ bgcolor: blue[500] }}>
                              <ElectricBolt />
                         </Avatar>
                    </div>
                    <div>
                         <h1 className="font-bold text-primary-color">PENDING</h1>
                         <p>Arriving By Fri, 7 Mar</p>
                    </div>
               </div>
               <div className="p-5 bg-blue-50 flex gap-3">
                    <div>
                         <img className="w-[70px]" src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lq4sf0sg0d2v26.webp" alt="" />
                    </div>
                    <div className="w-full space-y-2">
                         <h1 className="font-bold">Eirei Clothing</h1>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi non labore suscipit exercitationem, quidem iste, nihil accusantium quibusdam, nam aliquid accusamus aliquam? Culpa odit neque atque. Animi magnam saepe sapiente.</p>
                         <p>
                              <strong>Size : </strong>
                              FREE
                         </p>
                    </div>
               </div>
          </div>
     )
};

export default OrderItem;
