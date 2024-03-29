import React, { Component } from 'react'
import TaskInput from './TaskInput';
import TaskList from './TaskList';

export default class TasksApp extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [] };
    }

    createTask = (task) => {
        const taskList = this.state.tasks;
        taskList.push({ task: task, completed: false });
        this.setState({ tasks: taskList });
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }

    deleteTask = (index) => {
        const taskList = this.state.tasks;
        taskList.splice(index, 1);
        this.setState({ tasks: taskList });
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }
    
    editTask = (task, index) => {
        const taskList = this.state.tasks;
        taskList[index].task = task;
        this.setState({ tasks: taskList });
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }

    changeStatus = (index) => {
        const taskList = this.state.tasks;
        taskList[index].completed = !taskList[index].completed;
        this.setState({tasks: taskList});
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }


    render() {
        return (
            <div class="main">
                <h1>To-do list</h1>
                <div class="content">
                    <TaskInput createTask={this.createTask}/>
                    <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} editTask={this.editTask} changeStatus={this.changeStatus}/>
                </div>
            </div>
        );
    }
}
