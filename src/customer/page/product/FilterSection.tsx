import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { blue } from "@mui/material/colors";
import { colors } from "../../../data/filter/color";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { price } from "../../../data/filter/price";
import { discount } from "../../../data/filter/discount";

const FilterSection = () => {
     const [expendColor, setExpendColor] = useState(false);
     const [searchParams, setSearchParams] = useSearchParams();

     const handleColorToggle = () => {
          setExpendColor(!expendColor);
     }

     const updateFilterParams = (e: any) => {
          const { name, value } = e.target;
          if(value) {
               searchParams.set(name, value);
          } else {
               searchParams.delete(name);
          }
          setSearchParams(searchParams);
     }

     const clearAllFilter = () => {
          console.log("clear all filter", searchParams);
          searchParams.forEach((value, key) => {
               searchParams.delete(key);
          });
          setSearchParams(searchParams);
     }
     return (
          <div className="-z-50 space-y-5 bg-white">
               <div className="flex items-center justify-between h-[40px] px-9 lg:border-r">
                    <p className="text-lg font-semibold">
                         Filters
                    </p>
                    <Button onClick={clearAllFilter} size="small" className="text-blue-500 cursor-pointer font-semibold">
                         Clear all
                    </Button>
               </div>
               <Divider />

               <div className="px-9 space-y-6">
                    <section>
                         <FormControl>
                              <FormLabel
                                   sx={{ fontSize: "16px", fontWeight: "bold", color: blue[500] }}
                                   className="text-2xl font-semibold"
                                   id="color"
                              >
                                   Color
                              </FormLabel>
                              <RadioGroup
                                   aria-labelledby="color"
                                   defaultValue=""
                                   name="radio-buttons-group"
                                   onChange={updateFilterParams}
                              >
                                   {colors.slice(0, expendColor ? colors.length : 5).map((item) => <FormControlLabel value={item.name} control={<Radio />}
                                        label={<div className="flex items-center gap-3">
                                             <p>{item.name}</p>
                                             <p className={`h-5 w-5 rounded-full ${item.name === "White" ? "border" : ""}`} style={{ backgroundColor: item.hex }}>

                                             </p>
                                        </div>} />)}

                              </RadioGroup>
                         </FormControl>
                         <div>
                              <button
                                   onClick={handleColorToggle}
                                   className="text-primary-color cursor-pointer hover:text-blue-600 flex items-center">
                                   {expendColor ? "hide" : `+${colors.length - 5} more`}
                              </button>
                         </div>
                    </section>
                    <section>
                         <FormControl>
                              <FormLabel
                                   sx={{
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        color: blue[500]
                                   }}
                                   className="text-2xl font-semibold"
                                   id="price"
                              >
                                   Price
                              </FormLabel>
                              <RadioGroup
                                   name="price"
                                   onChange={updateFilterParams}
                                   aria-labelledby="price"
                                   defaultValue=""
                              >
                                   {
                                        price.map((item, index) => (
                                             <FormControlLabel
                                                  key={item.name}
                                                  value={item.value}
                                                  control={<Radio size="small" />}
                                                  label={item.name}
                                             />
                                        ))
                                   }
                              </RadioGroup>

                         </FormControl>
                    </section>
                    <Divider />
                    <section>
                         <FormControl>
                              <FormLabel
                                   sx={{
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        pb: "14px",
                                        color: blue[500]
                                   }}
                                   className="text-2xl font-semibold"
                                   id="brand"
                              >
                                   Discount
                              </FormLabel>
                              <RadioGroup
                                   name="discount"
                                   onChange={updateFilterParams}
                                   aria-labelledby="brand"
                                   defaultValue={""}
                              >
                                   {
                                        discount.map((item, index) => (
                                             <FormControlLabel
                                             key={item.name}
                                             value={item.value}
                                             control={<Radio size="small" />}
                                             label={item.name}
                                             />
                                        ))
                                   }
                              </RadioGroup>
                         </FormControl>
                    </section>
               </div>
          </div>
     )
};

export default FilterSection;
