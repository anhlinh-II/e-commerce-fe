import { Add, AddShoppingCart, FavoriteBorder, LocalShipping, Remove, Shield, Wallet, WorkspacePremium } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import { Button, Divider } from '@mui/material';
import { blue } from '@mui/material/colors';
import { useState } from 'react';
import SimilarProduct from './SimilarProduct';
import ReviewCard from '../review/ReviewCard';

const ProductDetails = () => {
     const [quantity, setQuantity] = useState(1);
     return (
          <div className="px-5 lg:px-20 pt-10">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <section className="flex flex-col lg:flex-row gap-5">
                         <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
                              {[1, 1, 1, 1].map(item => <img src="https://down-vn.img.susercontent.com/file/sg-11134201-7rd5q-lx28n0i5dg9r64.webp" alt="product" className="lg:w-full w-[50px] cursor-pointer rounded-md" />)}
                         </div>
                         <div className="w-full lg:w-[85%]">
                              <img className="w-full rounded-md" src="https://down-vn.img.susercontent.com/file/sg-11134201-7rd5q-lx28n0i5dg9r64.webp" alt="product" />
                         </div>
                    </section>

                    <section>
                         <h1 className="font-bold text-lg text-primary-color">Bikini</h1>
                         <p className="text-gray-500 font-semibold">Women bikini</p>
                         <div className="flex justify-between items-center py-2 border w-[180px] px-3 pt-5">
                              <div className="flex gap-1 items-center">
                                   <span>4</span>
                                   <StarIcon sx={{ color: blue[500], fontSize: "17px" }} />
                              </div>
                              <Divider orientation="vertical" flexItem />
                              <span>
                                   234 Ratings
                              </span>
                         </div>
                         <div>
                              <div className='price flex items-center gap-3 mt-5 text-2xl'>
                                   <span className='font-sans text-gray-800'>
                                        $ 400
                                   </span>
                                   <span className='thin-line-through text-gray-400'>
                                        $ 999
                                   </span>
                                   <span className='text-primary-color font-semibold'>
                                        60%
                                   </span>
                              </div>
                              <p className='text-sm'>Inclusive of all taxes. Free Shipping above 500$</p>
                         </div>
                         <div className='mt-7 space-y-3'>
                              <div className='flex items-center gap-4'>
                                   <Shield sx={{ color: blue[500] }} />
                                   <p>Authentic & Quality Assured</p>
                              </div>
                              <div className='flex items-center gap-4'>
                                   <WorkspacePremium sx={{ color: blue[500] }} />
                                   <p>100% money back guarantee</p>
                              </div>
                              <div className='flex items-center gap-4'>
                                   <LocalShipping sx={{ color: blue[500] }} />
                                   <p>Free Shipping & Returns</p>
                              </div>
                              <div className='flex items-center gap-4'>
                                   <Wallet sx={{ color: blue[500] }} />
                                   <p>Pay on delivery might be available</p>
                              </div>
                         </div>
                         <div className='mt-7 space-y-2'>
                              <h1>QUANTITY</h1>
                              <div className='flex items-center gap-2 w-[140px] justify-between'>
                                   <Button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1}>
                                        <Remove />
                                   </Button>
                                   <span>{quantity}</span>
                                   <Button onClick={() => setQuantity(quantity + 1)}>
                                        <Add />
                                   </Button>
                              </div>
                         </div>

                         <div className='mt-12 flex items-center gap-5'>
                              <Button
                                   fullWidth
                                   startIcon={<AddShoppingCart />}
                                   variant="contained"
                                   sx={{ py: "1rem" }}>
                                   Add To Bag
                              </Button>
                              <Button
                                   fullWidth
                                   startIcon={<FavoriteBorder />}
                                   variant="outlined"
                                   sx={{ py: "1rem" }}>
                                   WishList
                              </Button>
                         </div>
                         <div className='mt-5'>
                              <p>
                                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores sapiente, rerum velit nam distinctio facere fuga laudantium minus unde? Iure ex id itaque praesentium, debitis expedita quaerat nemo aperiam nisi?
                              </p>
                         </div>

                         <div className='mt-7 space-y-5'>
                              <ReviewCard />
                              <Divider />
                         </div>

                    </section>
               </div>
               <div className='mt-20'>
                    <h1 className='text-lg font-bold'>Similar Product</h1>
                    <div className='pt-5'>
                         <SimilarProduct />
                    </div>
               </div>
          </div>
     )
};

export default ProductDetails;
