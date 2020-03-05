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
import Container from '@material-ui/core/Container';
import AdminBlock from './AdminBlock';
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn() {
  const classes = useStyles();
  const [values, setvalues] = useState({
    email: "",
    password: "",
})
const { email, password,  } = values
const handleChange = (name) => (event) => {
    setvalues({ ...values, [name]: event.target.value })
}
const clickSubmit = (event) => {
  event.preventDefault()
  const newUser = {
    email: email,
    password: password,
}
var userLogin = {}
userService.login(newUser)
  .then(res => {
    userLogin = res
    userService.getUserById(userLogin.userId)
    .then((user)=>{
      user.token = userLogin.id
      console.log('loggedin user::::',user)
      localStorage.setItem('users', JSON.stringify(user));
      // localStorage.setItem('usertoken', JSON.stringify(usertoken));
      if(user.haswho==='company'){
        history.push('./companydetail')
      }
      if(user.haswho==='student'){
        history.push('./studentdetail')
      }
      if(user.error){
        alert('Plz signup first')
      }

    })
})

}
  return (
    <Container component="main" maxWidth="xs">
      <h2 style={{color:'blue',paddingTop: '2rem'}}>Student Recruitment App </h2>
      <hr/>
      <AdminBlock/>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleChange('email')} 
          />
          <TextField
            variant="outlined"
            margin="normal"
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={clickSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
export default SignIn