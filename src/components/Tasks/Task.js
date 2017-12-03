import React, {Component} from 'react';


class Task extends Component {

    constructor(props) {
        super(props);
        // this.checkbox = this.checkbox.bind(this);

        this.state = {
            task: '',
        }
    }

    render() {
        return <div><input type="checkbox"/>{this.props.task}</div>
    }

}

export default Task