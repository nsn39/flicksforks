import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Option.css';


export default class Option extends Component {
    render() {
        const Icon = this.props.icon;

        return (
            <div className="sidebar__option">
                <Link to={this.props.urlEnd} className="sidebar__option__link">
                    <div className="sidebar__option__icon">
                        <Icon className="material__icon"/>
                    </div>

                    <div className="sidebar__option__name">
                        {this.props.optionName} 
                    </div>
                    
                </Link>
            </div>
        )
    }
}
