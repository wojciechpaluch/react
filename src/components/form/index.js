import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleTextArea = this.handleTextArea.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            title: 'Lorem ipsum',
            description: 'Opis',
            category: 'Kategoria'
        };
    }

    handleTitle(event) {
        this.setState({
            title: event.target.value
        })
    }

    handleTextArea(event) {
        this.setState({
            description: event.target.value
        })

    }

    handleSelect(event) {
        this.setState({
            category: event.target.value
        })
    }

    render() {
        return (

            <form>
                <div>
                    <h3>{this.state.title}</h3>
                    <p>{this.state.description}</p>
                    <p>{this.state.category}</p>
                    <label>
                        Name:
                    </label>
                    <textarea onChange={this.handleTextArea}/>
                    <select onChange={this.handleSelect} >
                        <option> Opcja 1 </option>
                        <option> Opcja 2 </option>
                        <option> Opcja 3 </option>
                    </select>
                    <input type="text" onChange={this.handleTitle}/>
                    <input type="submit" value="Submit"/>
                </div>
            </form>


        )
    };
}

export default Form;