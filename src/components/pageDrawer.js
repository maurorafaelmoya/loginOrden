'use client'
import * as React from "react";
import { styled } from "@mui/material/styles";
import { InsertPhoto, Shop, AccountCircle } from "@mui/icons-material";
import { Box, Divider, CssBaseline, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer as MuiDrawer, Icon } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`
    }
    });

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
}));

const Drawer = styled(MuiDrawer)(({ theme }) => ({
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
    })
);

export default function MiniDrawer({ children }) {

    const pathname = usePathname().slice(1)
    const router = useRouter()

    const OneClic = (path) =>{
        router.push(`/${path}`)
    }

    return (
        <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer variant="permanent">
            <DrawerHeader>
            <IconButton>
                <AccountCircle />
            </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                <ListItem key={'orders'} disablePadding sx={{ display: "block" }}>
                    <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: "center",
                        px: 2.5
                    }}
                    onClick={()=> OneClic('orders') }
                    
                    >
                    <ListItemIcon
                        sx={{
                        minWidth: 0,
                        mr: "auto",
                        justifyContent: "center"
                        }}
                    >
                        {pathname === 'orders' ? <Shop sx={{color:'#e3026f'}}/> : <Shop/> }
                    </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem key={"pictures"} disablePadding sx={{ display: "block" }}>
                    <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: "center",
                        px: 2.5
                    }}
                    onClick={()=> OneClic('pictures') }

                    >
                    <ListItemIcon
                        sx={{
                        minWidth: 0,
                        mr: "auto",
                        justifyContent: "center"
                        }}
                    >
                        {pathname === 'pictures' ? <InsertPhoto sx={{color:'#e3026f'}}/> : <InsertPhoto/> }
                    </ListItemIcon>
                    <ListItemText primary={"text"} sx={{ opacity: 0 }} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            {children}
        </Box>
        </Box>
    );
}
