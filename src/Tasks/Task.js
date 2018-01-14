import React, { Component } from 'react';

const style = {
    checked: {
        color: 'green',
        textDecoration: 'line-through'
    },
    unChecked: {}
};

class Task extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            checked: false
        }
    }

    handleChange(event) {
        this.setState({checked: event.target.checked});
    }

    render() {
        return (
            <div>
                <input type="checkbox" onChange={this.handleChange}/>
                <span
                    style={this.state.checked ? style.checked : style.unChecked}
                >
          {this.props.label}
        </span>
            </div>
        );
    }
}

export default Task;