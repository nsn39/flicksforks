import React from 'react';
import './Sidebar.css';
import './Option';
import Option from './Option'
import HomeIcon from '@material-ui/icons/Home';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SettingsIcon from '@material-ui/icons/Settings'


function Sidebar() {
    return (
        <div className="sidebar">
            <Option icon={HomeIcon} urlEnd="/" optionName="Home"/>
            <Option icon={MovieFilterIcon} urlEnd="/myforks" optionName="My Forks"/>
            <Option icon={LocalMoviesIcon} urlEnd="/watched" optionName="Watched"/>
            <Option icon={FavoriteIcon} urlEnd="/favorites" optionName="Favorites"/>
            <Option icon={SettingsIcon} urlEnd="/settings" optionName="Settings"/>
        </div>
    )
}

export default Sidebar
