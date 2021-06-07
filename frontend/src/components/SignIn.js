import { Grid, Paper, Typography, Avatar, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import React from 'react';

const useStyles = makeStyles({
    paperStyle: {
        padding: 20,
        height: '70vh',
        width: 450,
        margin: "30px auto",
    },
    typography: {
        fontWeight: 'bold',
        fontDisplay: 'swap',
        textTransform: 'uppercase'
    },
    avatar: {
        margin: "20px auto",
        backgroundColor: '#2596be'
    },
    form: {
        margin: "50px auto"
    },
    textField: {
        margin: "20px auto"
    },
    button: {
        backgroundColor: '#2596be',
        margin: "20px auto"
    }
});

const SignIn = () => {
    const classes = useStyles();
    return(
        <Grid>
            <Paper elevation={10} className={classes.paperStyle}>
                <Grid align='center'>
                    <Typography variant="h3" align='center' className={classes.typography}>
                        Sign In
                    </Typography>
                    <Avatar className={classes.avatar}></Avatar>
                </Grid>
                <form className={classes.form} align='center' noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Usuário" variant="outlined" fullWidth required/>
                    <TextField className={classes.textField} id="outlined-basic" label="Senha" variant="outlined" type="password" fullWidth required/>
                    <Button className={classes.button} variant="contained" color="primary" fullWidth>
                        Sign In
                    </Button>
                </form>
                <Typography variant="h7">
                    <Link href="#" align="center" underline="always">
                        Novo usuário? Registre-se.
                    </Link>
                </Typography> 
            </Paper>   
        </Grid>
    );
};

export default SignIn;