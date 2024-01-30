import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from '@mui/icons-material'


const Footer = () => {
  return (
    <div>

        <Grid classNmae='bg-black text-white text-center mt-10'
        container
        sx={{bgcolor:"black",color:"white",py:3}}
        >

           
            <Grid item xs={12} sm={6} md={3}>
            <div className="mt-5 ml-10" >
                <Typography className="pb-5 ml-10" variant='h6'>Company</Typography>
                
                <div>
                <Button className="pb-5" variant='h6' gutterrBottom>About</Button>
                </div>
                <div>
                <Button className="pb-5" variant='h6' gutterrBottom>Blog</Button>
                </div>
                <div>
                <Button className="pb-5" variant='h6' gutterrBottom>Press</Button>
                </div>
                <div>
                <Button className="pb-5" variant='h6' gutterrBottom>Jobs</Button>
                </div>
              <div>
              <Button className="pb-5" variant='h6' gutterrBottom>Partners</Button>
              </div>
                </div>
               
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
            <div className="mt-5 ml-10" >
                <Typography className="pb-5 ml-10" variant='h6'>Solution</Typography>
                
                <div>
                <Button className="pb-5" variant='h6' gutterrBottom>Marketing</Button>
                </div>
                <div>
                <Button className="pb-5" variant='h6' gutterrBottom>Analytics</Button>
                </div>
                <div>
                <Button className="pb-5" variant='h6' gutterrBottom>Commerce</Button>
                </div>
                <div>
                <Button className="pb-5" variant='h6' gutterrBottom>Insights</Button>
                </div>
              <div>
              <Button className="pb-5" variant='h6' gutterrBottom>Supports</Button>
              </div>
                </div>
               
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
            <div className="mt-5 ml-10" >
                <Typography className="pb-5 ml-10" variant='h6'>Documnetation</Typography>
                
                <div>
                <Button className="pb-5" variant='h6' gutterrBottom>Guides</Button>
                </div>
                <div>
                <Button className="pb-5" variant='h6' gutterrBottom>API Status</Button>
                </div>
                </div>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
            <div className="mt-5 ml-10" >
                <Typography className="pb-5 ml-10" variant='h6'>Legal</Typography>
                
                <div>
                <Button className="pb-5" variant='h6' gutterrBottom>Guides</Button>
                </div>
                <div>
                <Button className="pb-5" variant='h6' gutterrBottom>Privacy</Button>
                </div>
                <div>
                <Button className="pb-5" variant='h6' gutterrBottom>Terms</Button>
                </div>
                </div>
            </Grid>

            <Grid className='pt-20' item  xs={12}>
                <Typography variant="body2" component="p" align="center">
                    &copy; 2023 My Company. Al rights reserved.
                </Typography>
                <Typography variant="body2" compoennet="p" align="center">
                    Made with love by Me.
                </Typography>
                <Typography>
                    Icons made by {' '}
                    <Link href="https://www.freepik.com" color="inherit" underline="always">
                        Freepik
                    </Link>{' '}
                    from{' '}
                    <Link href="https://www.flaticon.com/" color="inherit" underline="always">
                        www.flaticon.com
                    </Link>
                </Typography>

            </Grid>


        </Grid>
    </div>
  )
}

export default Footer