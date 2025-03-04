import { useEffect, useState } from 'react';
import './ProductCard.css'
import { Button } from '@mui/material';
import { Favorite, ModeComment } from '@mui/icons-material';
import { blue } from '@mui/material/colors';

const images = [
     "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lq4sf0sg0d2v26.webp"
     , "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lq4sf0sg0d2v26.webp"
     , "https://down-vn.img.susercontent.com/file/sg-11134201-7rd5q-lx28n0i5dg9r64.webp"
]
const ProductCard = () => {
     const [currentImage, setCurrentImage] = useState(0);
     const [isHovered, setIsHovered] = useState(false);

     useEffect(() => {
          let interval: any
          if (isHovered) {
               interval = setInterval(() => {
                    setCurrentImage((prevImage) => (prevImage + 1) % images.length)
               }, 3000);
          } else if (interval) {
               clearInterval(interval);
               interval = null;
          }
          return () => clearInterval(interval);
     }, [isHovered])
     return (
          <>
               <div className="group px-4 relative">
                    <div
                         onMouseEnter={() => setIsHovered(true)}
                         onMouseLeave={() => setIsHovered(false)}
                         className="card"
                    >
                         {images.map((item, index) => <img className="card-media object-top" src={item} style={{ transform: `translateX(${(index - currentImage) * 100}%)` }} alt="" />)}
                         {
                              isHovered &&
                              <div className='indicator flex flex-col items-center space-y-2'>
                                   <div className='flex gap-3'>
                                        <Button variant='contained' color='secondary'>
                                             <Favorite sx={{ color: blue[500] }} />
                                        </Button>
                                        <Button variant='contained' color='secondary'>
                                             <ModeComment sx={{ color: blue[500] }} />
                                        </Button>
                                   </div>
                              </div>
                         }
                    </div>
                    <div className='details pt-3 space-y-1 group-hover-effect rounded-md'>
                         <div className='name'>
                              <h1>Niky</h1>
                              <p>Blue Shirt</p>
                         </div>
                         <div className='price flex items-center gap-3'>
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

                    </div>
               </div>
          </>
     )
};

export default ProductCard;
