import React, { Component } from 'react';
import './index.css';

class Button extends Component  {
    render() {
        const buttonStyle = {
            backgroundColor: 'green',
            color: 'yellow',
            fontSize: 20

        };
        return(
            <div className="btn-containter">
                <button style={buttonStyle}>{this.props.label}</button>
            </div>
        );
    }
}

export default Button;