import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import history from '../History'
export default function AdminBlock() {
    const [open, setOpen] = React.useState(false);
    const [email, setemail] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const onSubmit = () => {
        console.log('email:', email)
        
        localStorage.setItem('admin', JSON.stringify(email));
        if (email.email === 'qwv3@.com') {
            history.push('/admin')
        } else {
            alert('only Admin can access')
        }
       
    }
    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Admin Panel Access
      </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Admin Access</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        name='email'
                        label="Email Address"
                        type="email"
                        fullWidth

                        onChange={(e) => setemail({ email: e.target.value })}
                    />
                    <Button type="submit" onClick={onSubmit} color="primary">
                        Submit
          </Button>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
