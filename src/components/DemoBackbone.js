import { Model, Collection } from 'backbone-x'
import React, { Component } from 'react'


const Header = Model({
    title: 'Header title'

})
const Footer = Model({
    title: 'Footer title',

})
const Body = Model({
    title: 'Body content',

})
const Page = Collection(Header, )

export default class DemoBackbone extends Component {
    render() {
        return (<h1>aaaa</h1>)
    }
}