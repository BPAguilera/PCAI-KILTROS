import React from 'react';
import './home.css';
import Header from '../header/header';

const Home = () => {
    return (
        <div className="home-container">
            <Header />

            {/* Main content */}
            <main className="home-main-content">
                <div className="home-console-container">
                    <p>Consola en tiempo real en desarrollo.....</p>
                </div>
            </main>
        </div>
    );
};

export default Home;
