import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <NavLink className="navbar-brand" to={'/'}>
                Twisted Properties
            </NavLink>

            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarColor01"
                aria-controls="navbarColor01"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon" />
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            href="https://bootswatch.com/lumen/"
                        >
                            Lumen Docs
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
