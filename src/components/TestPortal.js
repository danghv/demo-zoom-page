import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {container} from '../App'

export default class TestPortal extends Component{
    constructor(props) {
        super(props)
        this.el = document.createElement('div')
    }


    componentDidMount() {
        // this.setState({foo: 'bar'})
        console.log('container...', container)
        container.appendChild(this.el)
        // document.getElementById('portal').appendChild(this.el)
        // ReactDOM.findDOMNode(this.refs.portal).appendChild(this.el)


    }
    render() {
        return (
            ReactDOM.createPortal(<h1>test more. i am portal component</h1>, this.el)
        )
    }
}