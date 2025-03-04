import { Radio } from "@mui/material";

const AddressCart = () => {
     const handleChange = (event: any) => {
          console.log(event.target.checked);
     }
     return (
          <div className="p-5 border rounded-md flex">
               <div>
                    <Radio 
                    checked={true}
                    onChange={handleChange}
                    value={``}
                    name="radio-button"
                    />
               </div>
               <div>
                    <h1>Eirei</h1>
                    <p className="w-[320px]">126 Dai Tu, Dai Kim, Hoang Mike - 530068</p>
                    <p>
                         <strong>Mobile: </strong> 083242355
                    </p>
               </div>
          </div>
     )
};

export default AddressCart;
