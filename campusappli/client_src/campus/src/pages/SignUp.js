import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import {register} from './auth'
import Container from '@material-ui/core/Container';
import { userService } from '../services/user.services'

import history from '../History'
const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
       
       
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        padding: '1rem',
        marginRight: '10px'
    },
}));
function SignUp({ _submit }) {
    // const dispatch = useDispatch()
    const classes = useStyles();
    const [values, setvalues] = useState({
        firstName: '',
        lastName: '',
        email: "",
        password: "",
        haswho: ""
    })
    const { firstName, lastName, email, password, haswho } = values
    const handleChange = (name) => (event) => {
        setvalues({ ...values, [name]: event.target.value })
    }
    const handleChangeCom = (haswho) => event => {
        setvalues({ ...values, haswho: haswho })
    }
    const clickSubmit = (event) => {
        // console.log('------')
        event.preventDefault()
        const userData = {
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: password,
            haswho: haswho
        }
        if (userData.firstname !== '' && userData.lastname !== '' && userData.email !== '' && userData.password !== '' && userData.haswho !== '') {
            userService.signup(userData)
            .then(res => {
                console.log('--------res', res)

                 if (res.error && res.error.statusCode === 422) {
                    alert('Email already exists! plz change the Email id!!')
                   
                    // setvalues({ ...values, firstName: '', lastName: '', email: '', password: '' })
                    // setvalues({haswho:''})
                }
                if (res.error && res.error.statusCode === 401) {
                    // Alert.alert(res.error.name, 'Login Failed')
                    alert(res.error, 'Invalid email or password')

                }
                if (!res.error) {
                    history.push('/')
                    console.log(res)
                }

                
            }

            )
        }
        else alert('Please fill all fields!')


    }
   
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
        </Typography>
                <form className={classes.form} noValidate onSubmit={clickSubmit}  >
                    <Grid container spacing={2}  >
                        <Grid item xs={12} sm={6} >
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                value={firstName}
                                onChange={handleChange('firstName')}
                                autoFocus
                               
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                value={lastName}
                                onChange={handleChange('lastName')}
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                value={email}
                                autoComplete="email"
                                onChange={handleChange('email')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={password}
                                autoComplete="current-password"
                                onChange={handleChange('password')}
                            />
                        </Grid>
                    </Grid>

                    <label >
                        <input className={classes.submit} name="group1" type="radio" value={haswho} onChange={handleChangeCom('student')} />
                        <span >Student</span>
                    </label>
                    <label style={{ width: '300px' }}>
                        <input className={classes.submit} name="group1" type="radio" value={haswho} onChange={handleChangeCom('company')} />
                        <span >Company</span>
                    </label>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                   </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/" variant="body2">
                                Already have an account? Sign in
                    </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
export default SignUp