"use client"
import { Grid, Stack, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React, { forwardRef } from 'react'

const Wallpaper = forwardRef(({ children } ) => (
        <div CLASS='divWallpaper'  >
            <Grid2 container spacing={2}> 
                <Grid2 padding={5} xs={3}>
                    <Stack spacing={2}>
                        <img src="https://framerusercontent.com/images/MevNpCbx1RKGRTp0bVTSKA7hUs.svg?scale-down-to=2048"  width="150" height="100%"  />
                        <Typography variant='h5' color='#e3026f'> ¡Bienvenido de vuelta!</Typography>
                    </Stack>
                </Grid2>
                <Grid2 padding={5} xs={5}>
                    {children}
                </Grid2>
            </Grid2>

        </div>
    ))

export default Wallpaper