import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Option.css';


export default class Option extends Component {
    render() {
        const Icon = this.props.icon;

        return (
            <div className="sidebar__option">
                <div className="sidebar__option__icon">
                    <Icon className="icon"/>
                </div>
                
                <Link to={this.props.urlEnd} className="sidebar__option__link">
                    {this.props.optionName}
                </Link>
            </div>
        )
    }
}
