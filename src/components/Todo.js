import React, {Component} from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                'Test',
                'Test2',
                'Test3',
                'Test4',
                'Test5',
            ]
        }
    }
        render()
        {
            return (
                <div>
                    <h2>To Do List</h2>
                    <ol>
                        {this.state.tasks.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ol>
                </div>
            );
        }
    }

export default Todo;