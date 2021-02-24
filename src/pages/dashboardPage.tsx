import { AppBar, Box, Container, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useDashboardStyles } from '../styles/styles';
import { useAuthContext } from '../util/authContext';
import { clearUser } from '../util/serviceCalls';
import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { ChevronLeft, ExitToApp, Payment, PieChart } from '@material-ui/icons';
import clsx from 'clsx';
import { HomeDashboardComponent } from '../components/homeDashboardComponent';

function Copyright() {
   return (
     <Typography variant="body2" color="textSecondary" align="center">
       {'Copyright \u00a9 '}
       <span>
         Pessimist Technologies {new Date().getFullYear()}.
       </span>
     </Typography>
   );
 }

export const DashboardPage = () => {
   const context = useAuthContext();
   const classes = useDashboardStyles();
   const [open, setOpen] = useState(false);
   const [dash, setDash] = useState('home');

   const toggleDrawer = () => {
      open ? setOpen(false): setOpen(true);
   }

   const logout = () => {
      clearUser();
      context.userDispatch({type: "LOGOUT", user: null});
   }

   const content = () => {
      switch (dash) {
         case ('transactions'):
            return <div>Transactions</div>;
         case ('reports'): 
            return <div>Reports</div>;
         default:
            return <HomeDashboardComponent />
      }
   }

   return (
      <div className={classes.root}>
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit" className={classes.notificationsIcon} onClick={logout}>
            <ExitToApp />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant='permanent' open={open} classes={{paper: clsx(classes.closedDrawer, open && classes.openedDrawer)}}>
         <div className={classes.drawerCloseButton}>
            <IconButton onClick={toggleDrawer}>
               <ChevronLeft />
            </IconButton>
         </div>
         <Divider />
         <List>
            <ListItem button onClick={() => setDash('home')}>
               <ListItemIcon>
                  <DashboardIcon />
               </ListItemIcon>
               <ListItemText>Dashboard</ListItemText>
            </ListItem>
            <ListItem button onClick={() => setDash('transactions')}>
               <ListItemIcon>
                  <Payment />
               </ListItemIcon>
               <ListItemText>Transactions</ListItemText>
            </ListItem>
            <ListItem button onClick={() => setDash('reports')}>
               <ListItemIcon>
                  <PieChart />
               </ListItemIcon>
               <ListItemText>Reports</ListItemText>
            </ListItem>
         </List>
      </Drawer>
      <main className={clsx(classes.content, open && classes.contentShift)}>
         <div className={classes.appBarSpacer} />
         <Container maxWidth='lg' className={classes.container}>
            {content()}
            <Box pt={4}>
               <Copyright />
            </Box>
         </Container>
      </main>
      </div>
   )
}