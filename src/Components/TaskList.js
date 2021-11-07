import React, { Component } from 'react'
import TaskItem from './TaskItem';

export default class TaskList extends Component {

    render() {
        const taskList = this.props.tasks;
        const htmlList = taskList.map((task, index) => <TaskItem task={task} index={index} deleteTask={this.props.deleteTask} editTask={this.props.editTask} changeStatus={this.props.changeStatus}/>);
        return (
            <div>
                {htmlList}
            </div>
        );
    }
}

