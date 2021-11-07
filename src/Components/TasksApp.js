import React, { Component } from 'react'
import TaskInput from './TaskInput';
import TaskList from './TaskList';

export default class TasksApp extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: [] };
    }

    createTask = (task) => {
        const taskList = this.state.tasks;
        taskList.push({ task: task, completed: false });
        this.setState({ tasks: taskList });
    }

    deleteTask = (index) => {
        const taskList = this.state.tasks;
        taskList.splice(index, 1);
        this.setState({ tasks: taskList });
    }
    
    editTask = (task, index) => {
        const taskList = this.state.tasks;
        taskList[index].task = task;
        this.setState({ tasks: taskList });
    }

    changeStatus = (index) => {
        const taskList = this.state.tasks;
        taskList[index].completed = !taskList[index].completed;
        this.setState({tasks: taskList});
    }


    render() {
        return (
            <div>
                <h1>To-do list</h1>
                <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} editTask={this.editTask} changeStatus={this.changeStatus}/>
                <TaskInput createTask={this.createTask}/>
            </div>
        );
    }
}
