import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
// import {Link} from 'react-router-dom'
import history from '../History'
class _Prevpage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    _signOutAsync = () => {
        history.push('/admin')
    }
    render() {
        return (
            <div>
                <nav className="nav-extended blue">
                    <div className="nav-wrapper">
                        <ul className="left hide-on-med-and-down">
                            <Button color="secondary" onClick={() => this._signOutAsync()}>Back</Button>
                        </ul>
                    </div>

                </nav>

            </div>
        );
    }
}

export default _Prevpage;