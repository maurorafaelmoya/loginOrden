import { AlternateEmail, Apple, Facebook, Google, Lock } from "@mui/icons-material"
import { Button, Card, CardContent, CardHeader, Icon, InputAdornment, Link, Stack, TextField } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

const Register = () => {

    return (
        <Grid2 container spacing={2}> 
            <Grid2 xs={3}>
                <p>parte 1</p>
            </Grid2>
            <Grid2 xs={5}>
                <Card
                    style={{width: '600px',
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
                            <Stack direction={row}>
                                <TextField 
                                    label="Nombre(s)"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Lock />
                                            </InputAdornment>
                                        ),
                                    }}/>
                                <TextField 
                                    label="Apellidos"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Lock />
                                            </InputAdornment>
                                        ),
                                    }}/>
                            </Stack>
                            <Stack direction={row}>
                                <TextField 
                                    label="Celular"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Lock />
                                            </InputAdornment>
                                        ),
                                    }}/>
                                <TextField 
                                    label="Telefono"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Lock />
                                            </InputAdornment>
                                        ),
                                    }}/>
                            </Stack>
                            <Stack direction={row}>
                                <TextField 
                                    label="Sitio Web"
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
                            </Stack>
                            <Stack direction={row}>
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
                                    label="Verificar Contraseña"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Lock />
                                            </InputAdornment>
                                        ),
                                    }}/>
                            </Stack>
                            <Button>Continuar</Button>
                            <p> Remember password? <Link href="/login" >Login </Link></p>

                         
                        </Stack>
                    </CardContent>    
                </Card>
            </Grid2>
            <Grid2 xs={4}>
                <p>parte 3</p>
            </Grid2>

        </Grid2>
    )
}

export default Register