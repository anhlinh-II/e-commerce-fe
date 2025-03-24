import { AddPhotoAlternate, Close } from "@mui/icons-material";
import { Button, CircularProgress, FormControl, FormHelperText, Grid2, IconButton, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { uploadToCloudinary } from "../../../utils/uploadToCloudinary";
import { colors } from "../../../data/filter/color";
import { menLevelTwo } from "../../../data/category/levelTwo/menLevelTwo";
import { womenLevelTwo } from "../../../data/category/levelTwo/womenLevelTwo";
import { furnitureLevelTwo } from "../../../data/category/levelTwo/furnitureLevelTwo";
import { electronicsLevelTwo } from "../../../data/category/levelTwo/electronicsLevelTwo";
import { menLevelThree } from "../../../data/category/levelThree/menLevelThree";
import { womenLevelThree } from "../../../data/category/levelThree/womenLevelThree";
import { furnitureLevelThree } from "../../../data/category/levelThree/furnitureLevelThree";
import { electronicsLevelThree } from "../../../data/category/levelThree/electronicsLevelThree";
import { mainCategory } from "../../../data/category/mainCategory";
import { useAppDispatch } from "../../../state/store";
import { createProduct } from "../../../state/seller/sellerProductSlice";

const categoryTwo: { [key: string]: any[] } = {
     men: menLevelTwo,
     women: womenLevelTwo,
     kids: [],
     home_furniture: furnitureLevelTwo,
     beauty: [],
     electronics: electronicsLevelTwo,
};

const categoryThree: { [key: string]: any[] } = {
     men: menLevelThree,
     women: womenLevelThree,
     kids: [],
     home_furniture: furnitureLevelThree,
     beauty: [],
     electronics: electronicsLevelThree,
}

const AddProductForm = () => {
     const [uploadImage, setUploadImage] = useState(false);
     const [snackbarOpen, setOpenStackbar] = useState(false);

     const dispatch = useAppDispatch()

     const formik = useFormik({
          initialValues: {
               title: "",
               description: "",
               mrpPrice: "",
               sellingPrice: "",
               quantity: "",
               color: "",
               images: [],
               category: "",
               category2: "",
               category3: "",
               sizes: "",
          },
          onSubmit: (values) => {
               console.log(values)
               dispatch(createProduct({request: values, jwt: localStorage.getItem("jwt")}))
          }
     })
     const handleImageChange = async (event: any) => {
          const file = event.target.files[0];
          setUploadImage(true);
          const image = await uploadToCloudinary(file)

          formik.setFieldValue("images", [...formik.values.images, image]);
          setUploadImage(false)
     }

     const handleRemoveImage = (index: number) => {
          const updatedImages = [...formik.values.images];
          updatedImages.splice(index, 1);
          formik.setFieldValue("images", updatedImages);
     }

     const childCategory = (category: any, parentCategoryId: any) => {
          return category.filter((child: any) => {
               return child.parentCategoryId === parentCategoryId;
          })
     }

     const handleCloseSnackbar = () => {
          setOpenStackbar(false);
     }

     return (
          <div>
               <form onSubmit={formik.handleSubmit}>
                    <Grid2 container spacing={2}>
                         <Grid2 className="flex flex-wrap gap-5" size={{ xs: 12 }}>
                              <input
                                   accept="image/*"
                                   id="fileInput"
                                   style={{ display: "none" }}
                                   type="file"
                                   onChange={handleImageChange}
                              />
                              <label htmlFor="fileInput" className="relative">
                                   <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-700">
                                        <AddPhotoAlternate className="text-gray-700" />
                                   </span>
                                   {uploadImage && (
                                        <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                                             <CircularProgress />
                                        </div>
                                   )}
                              </label>
                              <div className="flex flex-wrap gap-2">
                                   {
                                        formik.values.images.map((image, index) => (
                                             <div className="relative">
                                                  <img
                                                       className="w-24 h-24 object-cover"
                                                       key={index}
                                                       src={image}
                                                       alt={`ProductImage ${index + 1}`}
                                                  />
                                                  <IconButton
                                                       onClick={() => handleRemoveImage(index)}
                                                       className=""
                                                       color="error"
                                                       size="small"
                                                       sx={{
                                                            position: "absolute",
                                                            top: 0,
                                                            right: 0,
                                                            outline: "none"
                                                       }}
                                                  >
                                                       <Close sx={{ fontSize: "1rem" }} />
                                                  </IconButton>
                                             </div>
                                        ))
                                   }
                              </div>
                         </Grid2>
                         <Grid2 size={{ xs: 12 }}>
                              <TextField
                                   fullWidth
                                   id="title"
                                   name="title"
                                   label="Title"
                                   value={formik.values.title}
                                   onChange={formik.handleChange}
                                   error={formik.touched.title && Boolean(formik.errors.title)}
                                   helperText={formik.touched.title && formik.errors.title}
                                   required
                              />
                         </Grid2>
                         {/* description */}
                         <Grid2 size={{ xs: 12 }}>
                              <TextField
                                   fullWidth
                                   rows={4}
                                   id="description"
                                   name="description"
                                   label="Description"
                                   value={formik.values.description}
                                   onChange={formik.handleChange}
                                   error={formik.touched.description && Boolean(formik.errors.description)}
                                   helperText={formik.touched.description && formik.errors.description}
                                   required
                              />
                         </Grid2>
                         {/* mrp price */}
                         <Grid2 size={{ xs: 12, md: 4, lg: 3 }}>
                              <TextField
                                   fullWidth
                                   id="mrp_price"
                                   name="mrpPrice"
                                   label="MRP Price"
                                   type="number"
                                   value={formik.values.mrpPrice}
                                   onChange={formik.handleChange}
                                   error={formik.touched.mrpPrice && Boolean(formik.errors.mrpPrice)}
                                   required
                              />
                         </Grid2>
                         {/* selling price */}
                         <Grid2 size={{ xs: 12, md: 4, lg: 3 }}>
                              <TextField
                                   fullWidth
                                   id="sellingPrice"
                                   name="sellingPrice"
                                   label="Selling Price"
                                   type="number"
                                   value={formik.values.sellingPrice}
                                   onChange={formik.handleChange}
                                   error={formik.touched.sellingPrice && Boolean(formik.errors.sellingPrice)}
                                   helperText={formik.touched.sellingPrice && formik.errors.sellingPrice}
                                   required
                              />
                         </Grid2>
                         {/* color */}
                         <Grid2 size={{ xs: 12, md: 4, lg: 3 }}>
                              <FormControl
                                   fullWidth
                                   error={formik.touched.color && Boolean(formik.errors.color)}
                                   required
                              >
                                   <InputLabel id="color-label">Color</InputLabel>
                                   <Select
                                        labelId="color-label"
                                        id="color"
                                        name="color"
                                        value={formik.values.color}
                                        onChange={formik.handleChange}
                                        label="Color"
                                   >
                                        <MenuItem value="">
                                             <em>None</em>
                                        </MenuItem>
                                        {colors.map((color, index) => <MenuItem value={color.name}>
                                             <div className="flex gap-3">
                                                  <span style={{ backgroundColor: color.hex }} className={`h-5 w-5 rounded-full ${color.name === "White" ? "border" : ""}`}></span>
                                                  <p>{color.name}</p>
                                             </div>
                                        </MenuItem>)}
                                   </Select>
                                   {formik.touched.color && formik.errors.color && (
                                        <FormHelperText>{formik.errors.color}</FormHelperText>
                                   )}
                              </FormControl>
                         </Grid2>
                         {/* size */}
                         <Grid2 size={{ xs: 12, md: 4, lg: 3 }}>
                              <FormControl
                                   fullWidth
                                   error={formik.touched.sizes && Boolean(formik.errors.sizes)}
                                   required
                              >
                                   <InputLabel id="sizes-label">Sizes</InputLabel>
                                   <Select
                                        labelId="sizes-label"
                                        id="sizes"
                                        name="sizes"
                                        value={formik.values.sizes}
                                        onChange={formik.handleChange}
                                        label="Sizes"
                                   >
                                        <MenuItem value="">
                                             <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="FREE">FREE</MenuItem>
                                        <MenuItem value="S">S</MenuItem>
                                        <MenuItem value="M">M</MenuItem>
                                        <MenuItem value="L">L</MenuItem>
                                        <MenuItem value="XL">XL</MenuItem>
                                        {formik.values.sizes && formik.errors.sizes && (
                                             <FormHelperText>{formik.errors.sizes}</FormHelperText>
                                        )}
                                   </Select>
                                   {formik.touched.sizes && formik.errors.sizes && (
                                        <FormHelperText>{formik.errors.sizes}</FormHelperText>
                                   )}
                              </FormControl>
                         </Grid2>
                         {/* cag1 */}
                         <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
                              <FormControl
                                   fullWidth
                                   error={formik.touched.category && Boolean(formik.errors.category)}
                                   required
                              >
                                   <InputLabel id="category-label">Category</InputLabel>
                                   <Select
                                        labelId="category-label"
                                        name="category"
                                        id="category"
                                        value={formik.values.category}
                                        onChange={formik.handleChange}
                                        label="Category"
                                   >
                                        {
                                             mainCategory.map(item => (
                                                  <MenuItem value={item.categoryId}>{item.name}</MenuItem>
                                             ))
                                        }
                                   </Select>
                                   {formik.touched.category && formik.errors.category && (
                                        <FormHelperText>{formik.errors.category}</FormHelperText>
                                   )}
                              </FormControl>
                         </Grid2>
                         {/* cag2 */}
                         <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
                              <FormControl
                                   fullWidth
                                   error={formik.touched.category && Boolean(formik.errors.category)}
                                   required
                              >
                                   <InputLabel id="category2-label">Second Category</InputLabel>
                                   <Select
                                        labelId="category2-label"
                                        id="category2"
                                        name="category2"
                                        value={formik.values.category2}
                                        onChange={formik.handleChange}
                                        label="Second Category"
                                   >
                                        {
                                             formik.values.category &&
                                             categoryTwo[formik.values.category]?.map((item) => (
                                                  <MenuItem value={item.categoryId}>{item.name}</MenuItem>
                                             ))
                                        }
                                   </Select>
                                   {formik.touched.category && formik.errors.category && (
                                        <FormHelperText>{formik.errors.category}</FormHelperText>
                                   )}
                              </FormControl>
                         </Grid2>
                         {/* cag 3 */}
                         <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
                              <FormControl
                                   fullWidth
                                   error={formik.touched.category3 && Boolean(formik.errors.category3)}
                                   required
                              >
                                   <InputLabel id="category-label">Third Category</InputLabel>
                                   <Select
                                        labelId="category-label"
                                        id="category3"
                                        name="category3"
                                        value={formik.values.category3}
                                        onChange={formik.handleChange}
                                        label="Third Category"
                                   >
                                        <MenuItem value="">
                                             <em>None</em>
                                        </MenuItem>
                                        {
                                             formik.values.category2 &&
                                             childCategory(
                                                  categoryThree[formik.values.category],
                                                  formik.values.category2
                                             )?.map((item: any) => (
                                                  <MenuItem value={item.categoryId}>{item.name}</MenuItem>
                                             ))
                                        }
                                   </Select>
                                   {formik.touched.category && formik.errors.category && (
                                        <FormHelperText>{formik.errors.category}</FormHelperText>
                                   )}
                              </FormControl>
                         </Grid2>
                         <Grid2 size={{ xs: 12 }}>
                              <Button
                                   sx={{ p: "14px" }}
                                   color="primary"
                                   fullWidth
                                   type="submit"
                                   variant="contained"
                              >
                                   {
                                        false ? <CircularProgress size="small" sx={{ width: "27px", height: "27px" }} /> : "Add Product"
                                   }
                              </Button>
                         </Grid2>
                    </Grid2>
               </form>
          </div>
     )
};

export default AddProductForm;
