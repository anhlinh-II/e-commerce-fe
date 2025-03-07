import { Box, Grid2, TextField } from "@mui/material";

const BecomeSellerFormStep2 = ({ formik }: any) => {
     return (
          <Box>
               <>
                    <form>
                         <Grid2 container spacing={3}>
                              <Grid2 size={{ xs: 12 }}>
                                   <TextField
                                        fullWidth
                                        name="name"
                                        label="Name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        error={formik.touched.name && Boolean(formik.errors.name)}
                                        helperText={formik.touched.name && formik.errors.name}
                                   />
                              </Grid2>
                              <Grid2 size={{ xs: 6 }}>
                                   <TextField
                                        fullWidth
                                        name="mobile"
                                        label="Mobile"
                                        value={formik.values.mobile}
                                        onChange={formik.handleChange}
                                        error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                                        helperText={formik.touched.mobile && formik.errors.mobile}
                                   />
                              </Grid2>
                              <Grid2 size={{ xs: 6 }}>
                                   <TextField
                                        fullWidth
                                        name="pincode"
                                        label="Pin Code"
                                        value={formik.values.pincode}
                                        onChange={formik.handleChange}
                                        error={formik.touched.pincode && Boolean(formik.errors.pincode)}
                                        helperText={formik.touched.pincode && formik.errors.pincode}
                                   />
                              </Grid2>
                              <Grid2 size={{ xs: 12 }}>
                                   <TextField
                                        fullWidth
                                        name="address"
                                        label="Address"
                                        value={formik.values.address}
                                        onChange={formik.handleChange}
                                        error={formik.touched.address && Boolean(formik.errors.address)}
                                        helperText={formik.touched.address && formik.errors.address}
                                   />
                              </Grid2>
                              <Grid2 size={{ xs: 12 }}>
                                   <TextField
                                        fullWidth
                                        name="locality"
                                        label="Locality"
                                        value={formik.values.locality}
                                        onChange={formik.handleChange}
                                        error={formik.touched.locality && Boolean(formik.errors.locality)}
                                        helperText={formik.touched.locality && formik.errors.locality}
                                   />
                              </Grid2>
                              <Grid2 size={{ xs: 6 }}>
                                   <TextField
                                        fullWidth
                                        name="city"
                                        label="City"
                                        value={formik.values.city}
                                        onChange={formik.handleChange}
                                        error={formik.touched.city && Boolean(formik.errors.city)}
                                        helperText={formik.touched.city && formik.errors.city}
                                   />
                              </Grid2>
                              <Grid2 size={{ xs: 6 }}>
                                   <TextField
                                        fullWidth
                                        name="region"
                                        label="Region"
                                        value={formik.values.region}
                                        onChange={formik.handleChange}
                                        error={formik.touched.region && Boolean(formik.errors.region)}
                                        helperText={formik.touched.region && formik.errors.region}
                                   />
                              </Grid2>
                         </Grid2>
                    </form>
               </>
          </Box>
     )
};

export default BecomeSellerFormStep2;
