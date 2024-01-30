import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

export const ProductReviewCard = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>

            <Grid item xs={1}>
                <Box>
                    <Avatar className="text-white" sx={{width:56,height:56,bgcolor:"#9155fd"}}>

                    </Avatar>
                </Box>

            </Grid>
            <Grid item xs={8}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg'> Ram</p>
                        <p className='opacity-70'>April 5, 2023</p>
                    </div>
                </div>
                
                <Rating value={4.5} name='half rating' readOnly precision={.5}/>
                <p>
                    lorem is not approach and glimpse of glimpse.
                </p>
            </Grid>

        </Grid>
    </div>
  )
}
