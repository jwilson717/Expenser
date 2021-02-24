import { AppBar, Badge, Container, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useDashboardStyles } from '../styles/styles';
import { useAuthContext } from '../util/authContext';
import { getAxiosInstance } from '../util/axiosConfig';
import { logout } from '../util/serviceCalls';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { ChevronLeft, Payment, PieChart } from '@material-ui/icons';
import clsx from 'clsx';

export const DashboardPage = () => {
   const context = useAuthContext();
   const classes = useDashboardStyles();
   const [state, setState] = useState();
   const [open, setOpen] = useState(false);

   const hanldeDrawerOpen = () => {
      setOpen(true);
   }

   const hanldeDrawerClose = () => {
      setOpen(false);
   }

   const tempLogout = () => {
      logout();
      context.userDispatch({type: "LOGOUT", user: null});
   }


   const test = () => {
      getAxiosInstance().get(`/userauth/systemuser?id=${context.user?.user?.id}`)
         .then(res => {
            setState(res.data.email);
         })
   }

   return (
      <div className={classes.root}>
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={hanldeDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit" className={classes.notificationsIcon}>
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant='permanent' open={open} classes={{paper: clsx(classes.closedDrawer, open && classes.openedDrawer)}}>
         <div className={classes.drawerCloseButton}>
            <IconButton onClick={hanldeDrawerClose}>
               <ChevronLeft />
            </IconButton>
         </div>
         <Divider />
         <List>
            <ListItem button>
               <ListItemIcon>
                  <DashboardIcon />
               </ListItemIcon>
               <ListItemText>Dashboard</ListItemText>
            </ListItem>
            <ListItem button>
               <ListItemIcon>
                  <Payment />
               </ListItemIcon>
               <ListItemText>Transactions</ListItemText>
            </ListItem>
            <ListItem button>
               <ListItemIcon>
                  <PieChart />
               </ListItemIcon>
               <ListItemText>Reports</ListItemText>
            </ListItem>
         </List>
      </Drawer>
      <main className={classes.content}>
         <Container maxWidth='lg' className={classes.container}>
            <div className={classes.appBarSpacer} />
            <h2 className='text-center'>Welcome {context.user?.user?.username}</h2>
            <h2 className='text-center'>{state}</h2>
            <button onClick={test} className='btn btn-secondary'>Test</button>
            <div className='text-center'>
               <button onClick={tempLogout} className='btn btn-secondary'>Logout</button>
            </div>
         </Container>
      </main>
      </div>
   )
}