import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header className="header-header">
            <div className="header-logo">PCAI</div>
            <div className="header-buttons">
                <Link to="/home" className="header-btn">Home</Link>
                <Link to="/admin" className="header-btn">Admins</Link>
                <Link to="/alumnos" className="header-btn">Alumnos</Link>
                <Link to="/asistencia" className="header-btn">Asistencia</Link>
                <Link to="/scaner" className="header-btn">Escaner QR</Link>
                <Link to="/" className="header-btn">Cerrar Sesion</Link>
            </div>
        </header>
    );
};

export default Header;