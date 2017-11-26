import React, { Component } from 'react';

class Button extends Component  {
    render() {
        return(
            <div>
                <button>{this.props.label}</button>
            </div>
        );
    }
}

export default Button;