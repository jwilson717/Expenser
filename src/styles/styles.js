import { createMuiTheme, makeStyles } from "@material-ui/core";

export const customTheme = createMuiTheme({
   palette: {
      type: 'dark',
      primary: {main: '#006400'},
      secondary: {main: '#DAA520'}
   },
   overrides: {
      MuiCssBaseline: {
         '@global': {
            body: {
               backgroundColor: '#006400'
            }
         }
      }
   }
})

export const useFormStyles = makeStyles((theme) => ({
   multilineColor: {
      color: '#000000'
   },
   form: {
      padding: theme.spacing(3),
      borderRadius: 25,
      backgroundColor: customTheme.palette.secondary.main,
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
      color: customTheme.palette.secondary.main,
      fontSize: '4.5em',
      fontFamily: 'Copperplate'
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
      backgroundColor: customTheme.palette.primary.main,
      color: '#FFFFFF'
   },
   helperText: {
      textAlign: `right`
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
      backgroundColor: theme.palette.background.paper
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