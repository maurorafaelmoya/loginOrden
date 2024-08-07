"use client";
import Wallpaper from "@/components/wallpaper";
import { AlternateEmail, Apple, Facebook, Google, Lock } from "@mui/icons-material"
import { Button, Card, CardContent, CardHeader, Icon, InputAdornment, Link, Stack, TextField } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { useState } from "react"

const page = () => {

    const [ isTrue, setIsTrue ] = useState(true);

    return (
        <Wallpaper>
            <Card
                style={{width: '55%',
                    height:'100%',
                    align :'center',
                    padding:10
                }}>
                <CardHeader title={ 
                    <Link variant="h5"
                        color={"#000"}>
                        {isTrue ? 'Forgot Password' : 'New password'}
                    </Link> 
                } 
                    action={
                        <Link underline="none" variant="h5" 
                            color={"#000"}
                            href="/register">
                            Register
                        </Link>  }/>
                <CardContent>
                        <Stack spacing={2}>
                        {
                            isTrue ? 
                            <p> Ingresa con tu correo electronico o tu numero de teléfono</p>
                            :
                            <p>Enter new password</p>
                        }

                        {isTrue ? 
                            <TextField 
                                label="Correo o teléfono"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AlternateEmail />
                                        </InputAdornment>
                                    ),
                                }}/>
                                : 
                            <>
                                <TextField 
                                    label="Contraseña"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Lock />
                                            </InputAdornment>
                                        ),
                                    }}/>
                                <TextField 
                                    label="Contraseña"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Lock />
                                            </InputAdornment>
                                        ),
                                    }}/>
                            </>
                            }
        
                        <Button onClick={()=> setIsTrue(!isTrue ) }>Continuar</Button>
                        
                        <p> Remember password? <Link href="/login" >Login </Link></p>

                        
                    </Stack>
                </CardContent>   
            </Card>
        </Wallpaper>
    )
}

export default page