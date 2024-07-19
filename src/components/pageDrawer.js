"use client"
import { AccountCircle, Image, Inbox, LocalMall, Mail } from '@mui/icons-material';
import { Box, CssBaseline, Divider, Drawer, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useState } from 'react';

    const drawerWidth = 240;

    export default function MiniDrawer() {

        const DrawerHeader = styled('div')(({ theme }) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        }));

    return (
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <Drawer variant="permanent" open={open}>
            <Icon style={{alignContent:'flex', alignItems:'center', minHeight:46}}><AccountCircle /></Icon>
            <List>
                <ListItem key={'orders'} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                        minHeight: 48,
                        justifyContent: 'center',
                        px: 2.5,
                        }}
                    >
                        <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: 3,
                            justifyContent: 'center',
                        }}
                        >
                        {<LocalMall  />}
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem key={'pictures'} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                        minHeight: 48,
                        justifyContent: 'center',
                        px: 2.5,
                        }}
                    >
                        <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: 3,
                            justifyContent: 'center',
                        }}
                        >
                        {<Image  />}
                        </ListItemIcon>
                    </ListItemButton>
                    </ListItem>
            </List>
        </Drawer>
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader/>
            <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
            eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
            neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
            tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
            sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
            tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
            et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
            tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
            eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
            posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
        </Box>
        </Box>
    );
    }
