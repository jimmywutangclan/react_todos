import React, { Component } from 'react'

export default class TaskInput extends Component {
    constructor(props) {
        super(props);
        this.state = { task: '' };
    }

    onChange = (event) => {
        this.setState({ task: event.target.value });
    }
    
    onSubmit = (event) => {
        event.preventDefault();
        this.props.createTask(this.state.task);
        this.setState({task: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.task} onChange={this.onChange}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
