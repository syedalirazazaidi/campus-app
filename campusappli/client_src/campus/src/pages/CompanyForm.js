import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { postCompanyForm } from '../actions/postAction'
class CompanyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: '',
            jobDescr: '',
            cgpa: '',

        };
    }
    handleChange = (e) => {
        this.setState({ companyName: e.target.value })
    }
    handleChange_ = (e) => {
        this.setState({ jobDescr: e.target.value })
    }
    handleChangeC = (e) => {
        this.setState({ cgpa: e.target.value })
    }

    _handleSubmit = (evt) => {
        evt.preventDefault();
        const userData = {
            companyName: this.state.companyName,
            jobDescr: this.state.jobDescr,
            cgpa: this.state.cgpa
        }
        console.log('+++++',userData)
        if (userData.companyName !== '' && userData.jobDescr !== '' && userData.cgpa !== '') {
            this.props.handleSubmit(userData)
        } else alert('Please fill all fields!')

    }
    render() {
        return (
            <div>
                <Paper elevation={0} />
                <Container maxWidth="sm">
                    <h1 style={{ padding: '40px' }}>Post A Job!!</h1>
                    <form onSubmit={this._handleSubmit}>
                        <TextField
                            id="standard-full-width"
                            style={{ margin: 8 }}
                            placeholder="Company Name"
                            helperText="name!"
                            fullWidth
                            value={this.state.companyName} onChange={this.handleChange}
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="standard-full-width"
                            style={{ margin: 8 }}
                            placeholder="Job Designation"
                            helperText="Designation!"
                            fullWidth
                            value={this.state.jobDescr} onChange={this.handleChange_}
                            margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                        <TextField
                            id="standard-full-width"
                            style={{ margin: 8 }}
                            placeholder="Job Description"
                            helperText="description!"
                            fullWidth
                            value={this.state.cgpa} onChange={this.handleChangeC}
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <hr />

                        <button>Submit!!</button>
                    </form>
                </Container>
                <Paper elevation={3} />
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        handleSubmit: (userData) => { dispatch(postCompanyForm(userData)) }

    }
}
const mapStateToProps = (state) => {
    return {
        companyName: state.companyName
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CompanyForm)
