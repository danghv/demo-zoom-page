import React, { Component } from 'react'

export default class Comp1 extends Component {
    componentDidMount() {
        this.props.data.on('change:name', () => {
            this.forceUpdate()
        })
    }
    render() {
        console.log('data...', this.props.data)
        const { data } = this.props
        return  <div style={{background: '', float: 'left'}}>
            <h1>comp 1</h1>
            <h2>{data.get('name')}</h2>
        </div>
    }
}