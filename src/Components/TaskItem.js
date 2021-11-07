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
            <tr>
                <td>
                    <label>
                        <input type="checkbox" checked={this.props.task.completed} onChange={this.changeStatus}></input>
                    </label>
                </td>
                <td>
                    {this.state.editing ? <form onSubmit={this.submitChanges}>
                        <input type="text" value={this.state.task} onChange={this.editChange}></input>
                        <button type="submit">Submit edit</button>
                    </form> : <h3 className={this.props.task.completed ? 'completed' : 'not-completed'}>{this.props.task.task}</h3> }
                </td>
                <td>
                    <button onClick={this.toggleEdit}>Edit</button>
                    <button onClick={this.deleteItem}>Delete</button>
                </td>
            </tr>
        )
    }
}
