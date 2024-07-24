'use client'
import Wallpaper from "@/components/wallpaper"
import { AlternateEmail, Apple, Facebook, Google, Lock, Password, Visibility, VisibilityOff } from "@mui/icons-material"
import { Alert, Button, Card, CardContent, CardHeader, Icon, IconButton, InputAdornment, Link, Stack, TextField } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [alert, setAlert] = useState('');
    const [message, setMessage] = useState('');

    const router = useRouter();

    const handleShowPassword = () =>{ setShowPassword(!showPassword) }

    const sendData = () =>{

        setMessage('')
        setAlert('')

        if( password==='' || email===''){
            setMessage('Favor de verificar los campos')
            setAlert('error')
        }else{
            const data = {
                email: email,
                password: password
            }
    
            setMessage('Inicio de sesion exitoso')
            setAlert('success')

            setTimeout(() => {
                router.push(`/orders`)
                
            }, 5000);
        }
        
    }

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
                        Inicia sesion
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
                        {message? <Alert severity={alert}>{message} </Alert> : null}
                        <p> Ingresa con tu correo electronico o tu numero de teléfono</p>
                        <TextField 
                            label="Correo o teléfono"
                            value={email}
                            type="email"
                            required
                            onChange={event=> setEmail(event.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AlternateEmail />
                                    </InputAdornment>
                                ),
                            }}/>
                        <TextField 
                            label="Contraseña"
                            required
                            value={password}
                            type={showPassword ? 'text': 'password'}
                            onChange={event=> setPassword(event.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleShowPassword} edge="end">
                                            {!showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}/>
                        <Button onClick={()=> sendData()}>Continuar</Button>
                        <Link href='/forgotPassword'>
                        ¿Cambiaste de teléfono? </Link>
    
                        <Stack direction={"row"} spacing={5} style={{alignSelf:'center'}}>
                            <Icon><Apple/></Icon>
                            <Icon><Google/></Icon>
                            <Icon><Facebook/></Icon>
                        </Stack>
                    </Stack>
                </CardContent>  
            </Card>
        </Wallpaper>
    )
}

export default Login