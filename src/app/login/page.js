import Wallpaper from "@/components/wallpaper"
import { AlternateEmail, Apple, Facebook, Google, Lock } from "@mui/icons-material"
import { Button, Card, CardContent, CardHeader, Icon, InputAdornment, Link, Stack, TextField } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

const Login = () => {

        

    return (

        <Wallpaper>
 <Card
                style={{width: '600px',
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
                        <p> Ingresa con tu correo electronico o tu numero de teléfono</p>
                        <TextField 
                            label="Correo o teléfono"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AlternateEmail />
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
                        <Button>Continuar</Button>
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

        // <Grid2 container spacing={2}> 
        //     <Grid2 xs={3}>
        //         <p>parte 1</p>
        //     </Grid2>
        //     <Grid2 xs={5}>
        //     <Card
        //         style={{width: '600px',
        //             height:'100%',
        //             align :'center',
        //             padding:10
        //         }}>
        //         <CardHeader title={ 
        //             <Link variant="h5"
        //                 color={"#000"}>
        //                 Inicia sesion
        //             </Link> 
        //         } 
        //             action={
        //                 <Link underline="none" variant="h5" 
        //                     color={"#000"}
        //                     href="/register">
        //                     Register
        //                 </Link>  }/>
        //         <CardContent>
        //                 <Stack spacing={2}>
        //                 <p> Ingresa con tu correo electronico o tu numero de teléfono</p>
        //                 <TextField 
        //                     label="Correo o teléfono"
        //                     InputProps={{
        //                         startAdornment: (
        //                             <InputAdornment position="start">
        //                                 <AlternateEmail />
        //                             </InputAdornment>
        //                         ),
        //                     }}/>
        //                 <TextField 
        //                     label="Contraseña"
        //                     InputProps={{
        //                         startAdornment: (
        //                             <InputAdornment position="start">
        //                                 <Lock />
        //                             </InputAdornment>
        //                         ),
        //                     }}/>
        //                 <Button>Continuar</Button>
        //                 <Link href='/forgotPassword'>
        //                 ¿Cambiaste de teléfono? </Link>
    
        //                 <Stack direction={"row"} spacing={5} style={{alignSelf:'center'}}>
        //                     <Icon><Apple/></Icon>
        //                     <Icon><Google/></Icon>
        //                     <Icon><Facebook/></Icon>
        //                 </Stack>
        //             </Stack>
        //         </CardContent>  
        //     </Card>
        //     </Grid2>
        //     <Grid2 xs={4}>
        //         <p>parte 3</p>
        //     </Grid2>

        // </Grid2>
    )
}

export default Login