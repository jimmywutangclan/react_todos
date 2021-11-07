import React, { Component } from 'react'

export default class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {editing: false, task: this.props.task.task};
    }

    deleteItem = () => {
        this.props.deleteTask(this.props.index);
        this.setState({editing: false});
    }

    toggleEdit = () => {
        this.setState({ task: this.props.task.task });
        this.setState( {editing: !this.state.editing});
    }

    editChange = (event) => {
        this.setState({ task: event.target.value });
    }

    submitChanges = (event) => {
        event.preventDefault();
        this.props.editTask(this.state.task, this.props.index);
        this.setState({ editing: false });
    }

    changeStatus = () => {
        this.props.changeStatus(this.props.index);
    }

    render() {
        return (
            <div>
                <h2>{this.props.task.task}</h2>
                {this.props.task.completed ? <h3>(Done)</h3> : null}
                <label>
                    Completed?
                    <input type="checkbox" checked={this.props.task.completed} onChange={this.changeStatus}></input>
                </label>
                {this.state.editing ? <form onSubmit={this.submitChanges}>
                    <input type="text" value={this.state.task} onChange={this.editChange}></input>
                    <button type="submit">Submit edit</button>
                </form> : null }
                <button onClick={this.deleteItem}>Delete</button>
                <button onClick={this.toggleEdit}>Edit</button>
            </div>
        )
    }
}
