import React, { Component } from 'react'
import Types from 'prop-types'

export default class TestPropsType extends Component{
    static propTypes = {
        foo: Types.string
    }


    static defaultProps = {
        foo: '1212332323121'
    }

    state = {
        ...this.props
    }
    componentDidMount() {
        this.setState({foobar: 'fooobarrr'})
    }
    render() {
        return (
            <React.Fragment>
                <h1>{this.props.foo}</h1>
                <h1>{this.state.foo}</h1>
                <h1>{this.state.foobar}</h1>
            </React.Fragment>
        )
    }
}