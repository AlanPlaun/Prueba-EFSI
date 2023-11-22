import React, { useContext } from 'react';
import Switch from 'react-bootstrap/Switch';
import { TemaContext } from './Context/ThemeContext';
import './ThemeSwitch.css';

const ThemeSwitch = () => {
    const { isBlue, toggleTheme } = useContext(TemaContext)

    return (
        <div className="theme-switch-container">
            <Switch id="themeSwitch" checked={isBlue} onChange={toggleTheme} />
            <label htmlFor="themeSwitch">Blue Mode</label>
        </div>
    );
};

export default ThemeSwitch;
