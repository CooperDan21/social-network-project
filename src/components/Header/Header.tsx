import React from 'react';
import s from './Header.module.css'

 function Header() {
    return (
        <header className={s.header}>
            <img alt='Logo' src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png' />
        </header>
    )
}

export default Header