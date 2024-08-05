
import React from 'react'

function Navbar() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    function logout(){
        localStorage.removeItem('currentUser');
        window.location.href='/login';
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Raj Rooms</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {user ? (<>
                                <div class="dropdown">
                                    <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {user.name}
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Bookings</a>
                                        <a class="dropdown-item" href="#" onClick={logout}>Logout</a>
                                    </div>
                                </div>
                            </>) : (<>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Register">Register</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Login">Login</a>
                                </li>
                            </>)}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;