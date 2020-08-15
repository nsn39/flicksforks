import React, { Component } from 'react'

export default class movie extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <h3>Movie page</h3>

            <h4>{ this.props.match.params.name }</h4>
            </div>
        )
    }
}

