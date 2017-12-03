import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import './App.css';
import Header from './components/Header'
import Todo from './components/Todo'
import Form from './components/form'
import Users from './components/Users'
import TaskContainer from './components/Tasks/Container'


class App extends Component {
    render() {
        return (

            <Router>

                <div>
                    <Header/>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/todo" component={Todo}/>
                    <Route path="/counter" component={null}/>
                    <Route path="/form" component={Form}/>
                    <Route path="/Users" component={Users}/>
                    <Route path="/tasks" component={TaskContainer}/>

                </div>
            </Router>
        );
    }
}

export default App;
