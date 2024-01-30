import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { OrderTracker } from './OrderTracker'
import { Box, Grid } from '@mui/material'
import  StarBorderIcon from '@mui/icons-material/StarBorder'
import {color} from "@mui/material/colors"

export const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div>

        <h1 className="font-semibold text-xl py-10">Delivery Address</h1>
        <AddressCard/>
        </div>
       
        <div className='py-20'>
        <OrderTracker activeStep={3}/>
       </div>

       <Grid className='space-y-5' container>
        {[1,1,1,1,1].map((item)=><Grid item container className='shadow-xl rounded-md p-5 border' 
        sx={{alignItems:"center",justifyContent:"space-between"}}>


            <Grid item xs={6}>

                <div className='flex items-center space-x-4'>
                   
                 <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/1/11_7.jpg" alt=""/>
                </div>

                <div className='space-y-2 ml-5'>
                    <p className="font-semibold">Women Slim Mid Rise BlackJeans</p>
                    <p cassName='space-x-5  opacity-50 text-xs font-semibold'>
                        <span className='space-x-5'>
                            Color: Pink 
                        </span>
                        <span>
                            Size: M
                         </span>
                    </p>
                    <p>
                        Seller Linaria
                    </p>
                    <p>
                        Rs 1099
                        </p>
                </div>

            </Grid>
            <Grid item>

                <Box sx={{color:'#d1c4e9'}}>

                 <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2-text-5xl'/>
                 <span>
                    Rate & Review Product
                 </span>

                </Box>
            </Grid>

        </Grid>)}
        

       </Grid>
    </div>
    
  )
}
