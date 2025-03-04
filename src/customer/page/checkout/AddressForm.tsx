import { Box, Button, Grid2, TextField } from "@mui/material";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

const AddressFormSchema = Yup.object().shape({
     name: Yup.string().required("Name is required"),
     mobile: Yup.string().required("Mobile is required").matches(/^[0-9]+$/, "Mobile must be a number").min(10, "Mobile must be 10 digits").max(10, "Mobile must be 10 digits"),
     pinCode: Yup.string().required("Pin Code is required").matches(/^[0-9]+$/, "Pin Code must be a number").min(6, "Pin Code must be 6 digits").max(6, "Pin Code must be 6 digits"),
     address: Yup.string().required("Address is required"),
     city: Yup.string().required("City is required"),
     region: Yup.string().required("Region is required"),
     locality: Yup.string().required("Locality is required"),
});

const AddressForm = () => {
     const formik = useFormik({
          initialValues: {
               name: "",
               mobile: "",
               pinCode: "",
               address: "",
               city: "",
               region: "",
               locality: "",
          },
          validationSchema: AddressFormSchema,
          onSubmit: (values) => {
               console.log(values);
          }
     });
     return (
          <Box sx={{ max: "auto" }}>
               <p className="text-xl font-bold text-center pb-5">Contact Details</p>
               <form onSubmit={formik.handleSubmit}>
                    <Grid2 container spacing={3}>
                         <Grid2 size={{ xs: 12 }}>
                              <TextField
                                   name="name"
                                   label="Name"
                                   fullWidth
                                   value={formik.values.name}
                                   onChange={formik.handleChange}
                                   error={formik.touched.name && Boolean(formik.errors.name)}
                                   helperText={formik.touched.name && formik.errors.name}
                              />
                         </Grid2>
                         <Grid2 size={{ xs: 6 }}>
                              <TextField
                                   name="mobile"
                                   label="Mobile"
                                   fullWidth
                                   value={formik.values.mobile}
                                   onChange={formik.handleChange}
                                   error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                                   helperText={formik.touched.mobile && formik.errors.mobile}
                              />
                         </Grid2>
                         <Grid2 size={{ xs: 6 }}>
                              <TextField
                                   name="pinCode"
                                   label="Pin Code"
                                   fullWidth
                                   value={formik.values.pinCode}
                                   onChange={formik.handleChange}
                                   error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
                                   helperText={formik.touched.pinCode && formik.errors.pinCode}
                              />
                         </Grid2>
                         <Grid2 size={{ xs: 12 }}>
                              <TextField
                                   name="address"
                                   label="Address"
                                   fullWidth
                                   value={formik.values.address}
                                   onChange={formik.handleChange}
                                   error={formik.touched.address && Boolean(formik.errors.address)}
                                   helperText={formik.touched.address && formik.errors.address}
                              />
                         </Grid2>
                         <Grid2 size={{ xs: 12 }}>
                              <TextField
                                   name="locality"
                                   label="Locality"
                                   fullWidth
                                   value={formik.values.locality}
                                   onChange={formik.handleChange}
                                   error={formik.touched.locality && Boolean(formik.errors.locality)}
                                   helperText={formik.touched.locality && formik.errors.locality}
                              />
                         </Grid2>
                         <Grid2 size={{ xs: 6 }}>
                              <TextField
                                   name="city"
                                   label="City"
                                   fullWidth
                                   value={formik.values.city}
                                   onChange={formik.handleChange}
                                   error={formik.touched.city && Boolean(formik.errors.city)}
                                   helperText={formik.touched.city && formik.errors.city}
                              />
                         </Grid2>
                         <Grid2 size={{ xs: 6 }}>
                              <TextField
                                   name="region"
                                   label="Region"
                                   fullWidth
                                   value={formik.values.region}
                                   onChange={formik.handleChange}
                                   error={formik.touched.region && Boolean(formik.errors.region)}
                                   helperText={formik.touched.region && formik.errors.region}
                              />
                         </Grid2>
                         <Grid2 size={{ xs: 12 }}>
                              <Button fullWidth type="submit" variant="contained" sx={{py: "14px"}}>
                                   Add Address
                              </Button>
                         </Grid2>
                    </Grid2>
               </form>
          </Box>
     )
};

export default AddressForm;
