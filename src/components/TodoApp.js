import React, { Component } from 'react'
import {Model, Collection} from 'backbone-x'

const TodoList = Collection(
    Model({
            name: 'job1'
          })
)
const List = new TodoList()
window.List = List

export default class TodoApp extends Component {
    state = {
        todoList: []
    }

    renderTodoList() {
        console.log('todo list:', List.models)
        return this.state.todoList.map((item, index) => {
            return (
                <li
                    key={index}
                    style={{padding: '5px', cursor: 'pointer'}}
                    onClick={(event) => {
                        console.log('this...', this)
                        console.log('current target', event.currentTarget)
                        List.remove([{name: 'dang'}])
                        this.setState({todoList: List.models})
                    }}
                >{item.attributes.name}</li>
            )
        })
    }
    render() {
        return (
            <div style={{ backgroundColor: '#edf0f4', maxWidth: '300px'}}>

                    <input placeholder='enter what will you do...' type="text"/>
                    <button
                        onClick={() => {
                            List.add({name: 'dang'})
                            this.setState({todoList: List.models})
                        }}
                    >Add job</button>

                <ul>
                    {this.renderTodoList()}
                </ul>
            </div>
        )
    }
}