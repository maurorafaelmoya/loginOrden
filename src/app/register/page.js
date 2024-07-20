import Wallpaper from "@/components/wallpaper"
import { AccountCircle, AlternateEmail, Language, Lock, Phone, PhoneIphone } from "@mui/icons-material"
import { Button, Card, CardContent, CardHeader, Checkbox, FormControlLabel, Icon, InputAdornment, Link, Stack, TextField } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

const Register = () => {

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

                        <Stack direction={'row'} spacing={2}>
                            <TextField 
                                label="Nombre(s)"
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
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Lock />
                                        </InputAdornment>
                                    ),
                                }}/>
                            <TextField 
                                label="Verificar Contraseña"
                                style={Styles.TextField}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Lock />
                                        </InputAdornment>
                                    ),
                                }}/>
                        </Stack>
                        <FormControlLabel style={{alignItems:'center'}} control={<Checkbox style={{color:'#e3026f'}} defaultChecked />} label="Acepto los terminos y condiciones" />


                        <Button>Continuar</Button>
                        <p> Si ya tienes una cuenta en Dyshez y quieres agregar una <Link href="/login" > nueva sucursal</Link>, conoce como hacerlo.</p>
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