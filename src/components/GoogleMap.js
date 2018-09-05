import React, { Component } from 'react'
const google = window.google

export default class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.dangMap, {
            zoom: 12,
            center: {
                lat: 21.0073879,
                lng: 105.8002763
            }
        })
    }
    render() {
        return (
            <div ref='dangMap' style={{width: '200px', height: '200px'}}></div>
        )
    }
}