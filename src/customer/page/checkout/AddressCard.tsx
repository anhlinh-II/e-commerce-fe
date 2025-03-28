import { Radio } from "@mui/material";
import { Address } from "../../../types/UserType";
import { Dispatch } from "@reduxjs/toolkit";

const AddressCart = ({item, selectedItem, setSelectedItem}: {item: Address; selectedItem: string; setSelectedItem: React.Dispatch<React.SetStateAction<string>>}) => {
     const handleChange = (event: any) => {
          console.log(event.target.checked);
     }
     return (
          <div className="p-5 border rounded-md flex">
               <div onClick={() => setSelectedItem(item.id?.toString() || "")}>
                    <Radio 
                    checked={selectedItem === item.id?.toString()}
                    onChange={handleChange}
                    value={``}
                    name="radio-button"
                    />
               </div>
               <div>
                    <h1>{item.name}</h1>
                    <p className="w-[320px]">{item.address}, {item.locality}, {item.city} - {item.pinCode}</p>
                    <p>
                         <strong>Mobile: </strong> {item.mobile}
                    </p>
               </div>
          </div>
     )
};

export default AddressCart;
