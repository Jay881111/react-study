import React from 'react';
import './Main.css';

function Main() {
    return (
        <div>
            <h1 className="text-center mt-5">공부한 내용 정리</h1>
            <div className="Main">
                <ul>
                    <p>0. Main</p>
                    <li>Router</li>
                </ul>
                <ul>
                    <p>1. Movie</p>
                    <li>useState</li>
                    <li>props</li>
                </ul>
                <ul>
                    <p>2. Contact</p>
                    <li></li>
                    <li></li>
                </ul>
                <ul>
                    <p>3. User</p>
                    <li>BootStrap</li>
                    <li>Axios</li>
                    <li>Props</li>
                    <li>Map</li>
                    <li>useParams</li>
                </ul>
            </div>
        </div>
    );
}

export default Main;
