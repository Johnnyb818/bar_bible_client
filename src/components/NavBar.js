import React, { useState }  from "react";
import {Link} from "react-router-dom"
import { AppBar, Toolbar, IconButton, Typography, Drawer } from "@material-ui/core"
import { Menu } from "@material-ui/icons"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    
    paper: {
      padding: '0 9%',
      textAlign: 'center',
      color: 'white',
      textDecoration: 'none',
      fontSize: '27px',       
    },

    navGrid: {
      marginRight: 'auto',
      marginLeft: 'auto',
      alignItems: 'center',
      marginTop: '10px', 
    }
  }));

function NavBar() {
    const [open, setOpen] = useState(false)
    const classes = useStyles();

    const handleDrawer = () => {
      setOpen(true)
    }
      
 

    return (
        <div>
            <AppBar style={{ backgroundColor : 'black'}} position="static">
                <Toolbar>
                    <IconButton onClick={handleDrawer} edge="start" color="inherit" aria-label="menu">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6">
                        Bar Bible
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
            >
                <div style={{ height : "100%", width : "260px", backgroundColor : "#000" }}>
                <Grid className={classes.navGrid}>
                    <Link className={classes.paper} to="/"><a>Home</a></Link>
                </Grid>
                <Grid className={classes.navGrid}>
                    <Link className={classes.paper} to="/drinks"><a>Cocktail Recipes</a></Link>
                </Grid>
                <Grid className={classes.navGrid}>
                    <Link className={classes.paper} to="/syrups"><a>Syrup Recipes</a></Link>
                </Grid>
                <Grid className={classes.navGrid}>
                    <Link className={classes.paper} to="/tools"><a>Bar Gear</a></Link>
                </Grid>
                <Grid className={classes.navGrid}>
                    <Link className={classes.paper} to="/videos"><a>Tutorials</a></Link>
                </Grid>
                </div>
            </Drawer>
        </div>
    )
}


export default NavBar;