import React, {Component} from 'react';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = [{
            name: 'Ala'
        }, {
            name: 'Ola'
        }, {
            name: 'Jola'
        }];
    }


    render() {
        return (
            <div>
                <h1> Users </h1>
                {this.state.map((users, index) => (
                    <div key={index}>{users.name}</div>
                ))}
            </div>
        );
    }
}

export default Users;