'use client'
import Wallpaper from "@/components/wallpaper"
import { AccountCircle, AlternateEmail, Language, Lock, Phone, PhoneIphone, Visibility, VisibilityOff } from "@mui/icons-material"
import { Alert, Button, Card, CardContent, CardHeader, Checkbox, FormControlLabel, Icon, IconButton, InputAdornment, Link, Stack, TextField } from "@mui/material"
import { useState } from "react"
import bcryptjs from 'bcryptjs';
import { supabase } from "../supabase/configSupabase"

const Register = () => {
    
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cellPhone, setCellPhone] = useState('');
    const [phone, setPhone] = useState('');
    const [webSite, setWebSite] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [alert, setAlert] = useState('');
    const [message, setMessage] = useState('');

    const handleShowPassword = () =>{ setShowPassword(!showPassword) }

    const sendData = async () =>{
        setMessage('')

        if(name && lastName && cellPhone && email && password ){
            if(password !==  password2){
                setAlert('error')
                setMessage('las contraseñas no coinciden')
            }else{
                console.log('entra??')
                const salt = bcryptjs.genSaltSync();
                const bcryptPassword = bcryptjs.hashSync(password, salt);

                console.log(bcryptPassword)
                const data = {
                    name: name,
                    lastName: lastName,
                    cellPhone: cellPhone,
                    phone: phone,
                    webSite: webSite,
                    email: email,
                    password: bcryptPassword
                }

                const { dataDB, error } = await supabase
                    .from('users')
                    .insert([ data ])

                if (error) {
                    setError(error.message)
                } else {
                    setAlert('success')
                    setMessage('Usuario creado con exito')
                    
                }

            }
        }else{
            setAlert('error')
            setMessage('favor de verificar los datos')
        }
    } 

    return (
        <Wallpaper>
            <Card
                style={{width: '70%',
                    height:'100%',
                    align :'center',
                    padding:10
                }}>
                <CardHeader title={ 
                        <Link variant="h5" underline="none"
                            color={"#000"}
                            href="/login">
                            Inicia sesion
                        </Link> 
                    } 
                action={
                    <Link  variant="h5" 
                        color={"#000"}
                        >
                        Register
                    </Link>  }/>
                <CardContent>
                        <Stack spacing={2}>
                        <p> Unete a la revolucion , para comenzar a utilizar la plataforma ingresa los siguientes datos y se parte del</p>
                        <p>movimiento Dyshez</p>
                        {message==='' ? null : <Alert severity={alert}>{message}</Alert>}
                        <Stack direction={'row'} spacing={2}>
                            <TextField 
                                label="Nombre(s)"
                                value={name}
                                required
                                onChange={event=> setName(event.target.value)}
                                style={Styles.TextField}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}/>
                            <TextField 
                                label="Apellidos"
                                value={lastName}
                                required
                                onChange={event=> setLastName(event.target.value)}
                                style={Styles.TextField}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}/>
                        </Stack>
                        <Stack direction={'row'} spacing={2}>
                            <TextField 
                                label="Celular"
                                value={cellPhone}
                                required
                                onChange={event=> setCellPhone(event.target.value)}
                                style={Styles.TextField}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PhoneIphone />
                                        </InputAdornment>
                                    ),
                                }}/>
                            <TextField 
                                label="Telefono"
                                style={Styles.TextField}
                                value={phone}
                                onChange={event=> setPhone(event.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Phone />
                                        </InputAdornment>
                                    ),
                                }}/>
                        </Stack>
                        <Stack direction={'row'} spacing={2}>
                            <TextField 
                                label="Sitio Web"
                                style={Styles.TextField}
                                value={webSite}
                                onChange={event=> setWebSite(event.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Language />
                                        </InputAdornment>
                                    ),
                                }}/>
                            <TextField 
                                label="Email"
                                style={Styles.TextField}
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
                        </Stack>
                        <Stack direction={'row'} spacing={2}>
                            <TextField 
                                label="Contraseña"
                                style={Styles.TextField}
                                value={password}
                                required
                                onChange={event=> setPassword(event.target.value)}
                                type={showPassword ? 'text': 'password'}
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
                            <TextField 
                                label="Verificar Contraseña"
                                style={Styles.TextField}
                                value={password2}
                                onChange={event=> setPassword2(event.target.value)}
                                required
                                type={showPassword ? 'text': 'password'}
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
                        </Stack>
                        <FormControlLabel style={{alignItems:'center'}} control={<Checkbox style={{color:'#e3026f'}} defaultChecked />} label="Acepto los terminos y condiciones" />


                        <Button onClick={() => sendData()}>Continuar</Button>
                        <p> Si ya tienes una cuenta en Dyshez y quieres agregar una <b> nueva sucursal</b>, conoce como hacerlo.</p>
                    </Stack>
                </CardContent>    
            </Card>
        </Wallpaper>
    )
}

const Styles = {
    TextField:{
        width:'50%'
    }
}


export default Register