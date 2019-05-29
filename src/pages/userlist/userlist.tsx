
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import {WithStyles, createStyles, withStyles, MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'


import {Theme} from '@material-ui/core/styles/createMuiTheme';
import Grid from '@material-ui/core/Grid';


const styles = (theme:Theme) => createStyles({
	palette: {
		primary: {
			main:'#15ff00'
		}
	},
	main: {
		width: 'auto',
	    display: 'block', // Fix IE 11 issue.
	    marginLeft: theme.spacing.unit * 3,
	    marginRight: theme.spacing.unit * 3,
	    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
	      width: 600,
	      marginLeft: 'auto',
	      marginRight: 'auto',
	    },
	},
	paper: {
	    marginTop: theme.spacing.unit * 8,
	    display: 'flex',
	    flexDirection: 'column',
	    alignItems: 'center',
	    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
	},
	avatar: {
	    margin: theme.spacing.unit,
	    backgroundColor: theme.palette.secondary.main,
	  },
	  form: {
	    width: '100%', // Fix IE 11 issue.
	    marginTop: theme.spacing.unit,
	},
	submit: {
	    marginTop: theme.spacing.unit * 3,
	},
});

export interface Props extends WithStyles<typeof styles> {

}


interface State {

}

const theme:Theme = createMuiTheme({
})

export class InitialUserList extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);
	}

	render() {
 	const { classes } = this.props;
 	console.log(classes);
	  return (
	  	<MuiThemeProvider theme={theme}>
		    <main className={classes.main}>
		      <CssBaseline />
		      <Paper className={classes.paper}>
		        <Avatar className={classes.avatar}>
		          <LockOutlinedIcon />
		        </Avatar>
		        <Typography component="h1" variant="h5">
		          Sign up
		        </Typography>
		        <form className={classes.form}>
		          <Grid
					  container
					  direction="row"
					  justify="space-around"
					  alignItems="flex-end"
					>
						<FormControl margin="normal" required >
				            <InputLabel htmlFor="firstName">First Name</InputLabel>
				            <Input id="firstName" name="firstName" autoComplete="text" autoFocus />
				          </FormControl>
			            <FormControl margin="normal" required >
				            <InputLabel htmlFor="lastName">Last Name</InputLabel>
				            <Input name="lastName" type="text" id="lastName" autoComplete="text" />
				        </FormControl>

				        <FormControl margin="normal" required >
				            <InputLabel htmlFor="email">Email</InputLabel>
				            <Input id="email" name="email" autoComplete="email" autoFocus />
				          </FormControl>
			            <FormControl margin="normal" required >
				            <InputLabel htmlFor="password">Password</InputLabel>
				            <Input name="password" type="password" id="password" autoComplete="current-password" />
				        </FormControl>	
					  </Grid>
					<Grid
						container
						direction="row"
						justify="flex-end"
					>
			          <Button
			            type="submit"
			            variant="contained"
			            color="primary"
			            className={classes.submit}
			          >
			            User List
			          </Button>
			        </Grid>
		        </form>
		      </Paper>
		    </main>
		</MuiThemeProvider>
	  );
	}
}

// LoginForm.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
export const UserList = withStyles(styles)(InitialUserList);