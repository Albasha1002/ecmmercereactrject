import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../Card/CartItem'

export const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shadow-lg  rounded-s-md border'>
        <AddressCard/>

      </div>
      <div className='lg:grid grid-cols-3 lg:px-16 py-16 relative'>
             
             <div className='col-span-2'>
               {[1,1,1,1].map((item=><CartItem/>))}
               
               </div>
               <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                       <div className='border'>
                       <p className='uppercase font-bold opacity-60 pb-4'>
                               price details
                       </p>
                       <hr/>
                       </div>

                       <div className='space-y-3 font-semibold'>
                           <div className='flex justify-between pt-3 text-black'>
                               <span>
                                   Price
                               </span>
                               <span>
                                   4697
                               </span>

                           </div>

                           <div className='flex justify-between pt-3's >
                               <span>
                                   Discount
                               </span>
                               <span className=' text-green-600'>
                                   -3419
                               </span>

                           </div>

                           <div className='flex justify-between pt-3 text-black'>
                               <span >
                                   Deivery Charges
                               </span>
                               <span className=' text-green-600'>
                                   Free
                               </span>

                           </div>

                           <div className='flex justify-between pt-3 text-black'>
                               <span>
                                   Total Amount
                               </span>
                               <span className=' text-green-600'>
                                   1278
                               </span>

                           </div>

                           <Button variant="contained" className="w-full mt-5 mb-5" sx={{px:"2rem",py:"1rem",bgcolor:"#9155fd"}}>
                               Checkout
                           </Button>


                       </div>
               </div>

       </div>


      </div>
  )
}

export default OrderSummary
