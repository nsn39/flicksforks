import React from 'react'
import './Header.css'
import AccountCircleLogo from '@material-ui/icons/AccountCircle'

function Header() {
    return (
        <div className="header">
            <h1 class="header__name">FLICKS.FORKS</h1>
            <AccountCircleLogo className="header__icon"/>
        </div>
    )
}
export default Header
