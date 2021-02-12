import { createMuiTheme, makeStyles } from "@material-ui/core";

export const customTheme = createMuiTheme({
   palette: {
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
   form: {
      marginTop: theme.spacing(6),
      padding: theme.spacing(3),
      borderRadius: 25,
      backgroundColor: customTheme.palette.secondary.main
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
      fontSize: '4em',
      fontFamily: 'Copperplate'
   },
   input: {
      backgroundColor: '#FFFFFF',
      borderRadius: 5
   },
   avatarContainer: {
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`
   },
   avatar: {
      backgroundColor: customTheme.palette.primary.main
   },
   helperText: {
      textAlign: `right`
   }
}))