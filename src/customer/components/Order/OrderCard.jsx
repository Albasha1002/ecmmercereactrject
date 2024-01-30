import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';

export const OrderCard = () => {
  return (
    <div className='p-5 shadow-md shadow-blackhover:shadow-2xl bordermt-5'>
        <Grid
         container spacing={2} sx={{justifyContent:"space-between"}}>

            <Grid item xs={6}>
                 <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top'src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/1/11_7.jpg" alt=""/>
                    <div className='ml-5 space-y-2'>
                    <p className="mb-2">Men Slim Rise Black Jeans</p>
                    <p className="opacity-50 text-xs font-semibold">Size: M</p>
                    <p className="opacity-50 text-xs font-semibold">Color: Black</p>

                 </div>
                 </div>
                 
            </Grid>
            <Grid item xs={2}>
                <p>Rs 1099</p>
            </Grid>

            <Grid item xs={4}>
                {true && <div>

                    <p>
                    <AdjustIcon sx={{ mb:"2" ,width:"20px"}} className='text-green-600 mr-2
                    text-sm'/>
                    <span>
                    Delivery on March 03
                    </span>
                </p>
                <p className='text-xs'>
                    Your item has been delivered.

                </p>
                    </div>

                }

                {false && <p>
                    <span>
                        Expected Delivery on March 03
                    </span>
                </p>

                }

            </Grid>

        </Grid>
    </div>
  )
}
