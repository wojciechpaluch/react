import React, {Component} from 'react';

const style = {
    textDecoration: 'line-through'
}

class Task extends Component {

    constructor(props) {
        super(props);
        // this.checkbox = this.checkbox.bind(this);

        this.state = {
            isCompleted: false
        }
    }

    handleChecked = () => {
        this.setState({
            isCompleted: !this.state.isCompleted
        })
    }

    render() {
        return (
            <div style={this.state.isCompleted ? style : null}>
                <input onClick={this.handleChecked} type="checkbox"/>
                {this.props.task}
            </div>
        )
    }

}

export default Task