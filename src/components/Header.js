import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { render } from 'react-dom';
import Button from 'material-ui/Button';



class Header extends Component {
    render() {
        return (
            <div>
                <h1>App header</h1>
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/todo">To do</Link></li>
                    <li><Link to="/counter">Counter</Link></li>
                    <li><Link to="/form">Form</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/tasks">Tasks</Link></li>
                </ul>
                <Button raised color="primary">OK!</Button>
            </div>

        )
    }
}

export default Header;