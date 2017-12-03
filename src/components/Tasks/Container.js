import React, {Component} from 'react';

import Task from './Task'

class Container extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.textChanged = this.textChanged.bind(this);
        this.searchChanged = this.searchChanged.bind(this);
        this.state = {
            query: '',
            task: '',
            tasks: []
        }
    }

    textChanged(event) {
        this.setState({ task: event.target.value});
    }

    handleSubmit(event) {
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: ''
        });
        event.preventDefault();
    }

    searchChanged(event) {

        this.setState({query: event.target.value})

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.task} placeholder="Add task" onChange={this.textChanged}/>
                    <input type="text" value={this.state.query} placeholder="Search task" onChange={this.searchChanged}/>
                    <input type="submit" value="Add"/>

                </form>

                <h2>My tasks</h2>
                {this.state.tasks
                    .filter((task) => task.toUpperCase().indexOf(this.state.query.toUpperCase()) !== -1)
                    .map((task, index) => (
                    <Task key={index} task={task} />
                ))}
            </div>
        );
    }
}

export default Container