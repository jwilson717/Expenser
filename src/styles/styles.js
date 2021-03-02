import { createMuiTheme, makeStyles } from "@material-ui/core";

export const customTheme = createMuiTheme({
   palette: {
      type: 'dark',
      primary: {main: '#88C417'},
      secondary: {main: '#1A1D31'}
   }
})

export const useFormStyles = makeStyles((theme) => ({
   multilineColor: {
      color: '#000000'
   },
   form: {
      padding: theme.spacing(3),
      borderRadius: 25,
      backgroundColor: customTheme.palette.primary.main,
      color: '#000000'
   },
   centered: {
      textAlign: `center`
   },
   error: {
      color: '#800000',
      fontWeight: 'bold'
   },
   appHeader: {
      textAlign: 'center',
      fontSize: '4.5em',
      fontFamily: 'Copperplate',
      fontWeight: 'bold',
      padding: theme.spacing(3)
   },
   input: {
      backgroundColor: '#FFFFFF',
      borderRadius: 5,
      '&.Mui-focused': {
         color: '#000000'
      }
   },
   avatarContainer: {
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`
   },
   avatar: {
      backgroundColor: customTheme.palette.secondary.main,
      color: '#FFFFFF'
   },
   helperText: {
      textAlign: `right`
   },
   buttonProgress: {
      color: theme.palette.secondary.main,
      position: 'absolute',
   }
}))

const drawerWidth = 240;
export const useDashboardStyles = makeStyles((theme) => ({
   root: {
      display: 'flex'
   },
   title: {
      flexGrow: 1,
      fontWeight: 'bold'
   },
   appBar: {
      zIndex: theme.zIndex.drawer + 1
   },
   toolbar: {
      paddingRight: 24
   },
   content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
      marginLeft: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
         marginLeft: theme.spacing(9)
      },
      backgroundColor: theme.palette.grey[900]
   },
   contentShift: {
      marginLeft: 0
   },
   appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`
   },
   appBarSpacer: theme.mixins.toolbar,
   notificationsIcon: {
      justifySelf: 'flex-end'
   },
   drawerCloseButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      ...theme.mixins.toolbar
   },
   closedDrawer: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
       }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
         width: theme.spacing(9)
      }
   },
   openedDrawer: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth
   },
   container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    }
}))


export const useDashboardContentStyles = makeStyles((theme) => ({
   paper: {
      padding: theme.spacing(3)
   },
   title: {
      flexGrow: 1,
      fontWeight: 'bold'
   }, 
   centered: {
      textAlign: 'center'
   },
   accountTile: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.primary.main,
      height: 150,
      width: 175
   },
   table: {
      padding: theme.spacing(2)
   },
   container: {
      marginTop: theme.spacing(1)
   },
   tileTitle: {
      fontWeight: 'bold',
      color: theme.palette.primary.main
   },
   tileContent: {
      fontSize: '2em'
   },
   baseLink: {
      marginTop: theme.spacing(2)
   }
}))
