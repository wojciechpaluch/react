import React, {Component} from 'react';

class Users extends Component {

    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this.state = {
            users: [{
                name: 'Ala'
            }, {
                name: 'Ola'
            }, {
                name: 'Jola'
            }]
        }
    }


    fetchData() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({users: data});
            })
    }

    render() {
        return (
            <div>
                <h1> Users </h1>
                <button onClick={this.fetchData}>Pobierz dane</button>
                {this.state.users.map((user, index) => (
                    <div key={index}>{user.name}</div>
                ))}
            </div>
        );
    }
}

export default Users;