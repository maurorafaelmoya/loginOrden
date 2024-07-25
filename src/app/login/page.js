'use client'
import Wallpaper from "@/components/wallpaper"
import { AlternateEmail, Apple, Facebook, Google, Lock, Password, Visibility, VisibilityOff } from "@mui/icons-material"
import { Alert, Button, Card, CardContent, CardHeader, Icon, IconButton, InputAdornment, Link, Stack, TextField } from "@mui/material"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { supabase } from "../supabase/configSupabase"
import bcryptjs from 'bcryptjs';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [alert, setAlert] = useState('');
    const [message, setMessage] = useState('');
    const [dataUser, setDataUser] = useState([]);

    const router = useRouter();

    const handleShowPassword = () =>{ setShowPassword(!showPassword) }

    const sendData = async () =>{

        setMessage('')
        setAlert('')

        if( password==='' || email===''){
            setMessage('Favor de verificar los campos')
            setAlert('error')
        }else{
            
            const { data, error } = await supabase
                .from('users')
                .select('*')
                .eq('email', email)
            
            if (error) {
                setMessage('Favor de verificar los campos')
                setAlert('error')
            } else {

                if(data.length === 0){
                    setMessage('Favor de verificar los campos')
                    setAlert('error')
                    return
                }

                const validPassword = bcryptjs.compareSync(password, data[0].password);

                if (!validPassword){
                    setMessage('Contraseña incorrecta')
                    setAlert('error')
                    return
                }else{
                    setDataUser(data[0])
                    setMessage('Inicio de sesion exitoso')
                    setAlert('success')
    
                    //tiempo de espera para mostrar el mensaje de exito
                    setTimeout(() => {
                        router.push(`/orders`)
                    }, 5000);
                }
            }
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