import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, withStyles, WithStyles, MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem, {MenuItemProps} from '@material-ui/core/MenuItem';
import {Link as RouterLink} from 'react-router-dom';
import headerStyle from './header.module.css'

interface LinkItemProps extends MenuItemProps {
  to?: string,
};

const LinkItem: React.ReactType<LinkItemProps> = MenuItem;


const styles = createStyles({

  palette: {
    primary: {
      main:'white',
    },
  },

  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});


const theme = createMuiTheme({
  palette: {
    primary:{
      main: '#ffffff',
    },
  },
});
export interface Props extends WithStyles<typeof styles> {}

function ButtonAppBar(props: Props) {
  const { classes } = props;
  console.log(typeof RouterLink);
  return (
    <div className={classes.root}>
      <AppBar position="static" className={headerStyle.fillGreen}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            React Page
          </Typography>    
          <MuiThemeProvider theme={theme}>     
            <LinkItem component={RouterLink} to="/signup" className={headerStyle.whiteLetter}>Signup</LinkItem>
            <LinkItem component={RouterLink} to="/login" className={headerStyle.whiteLetter}>Login</LinkItem>
          </MuiThemeProvider>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export const Header = withStyles(styles)(ButtonAppBar)

