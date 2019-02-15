import React, { Component } from 'react';
import { Navbar } from '../components/layouts/Navbar';


class Home extends Component {
    change = e => {
        if (e.target.value.length >= 3) {
        }
    };

    render() {
        return (
            <div>
                <Navbar />
                <br />
                <main className="container-fluid">
                    <h1>Twisted Properties</h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magni molestias, ipsa quam nesciunt delectus dicta! Placeat
                    cum quae accusamus praesentium. Adipisci assumenda officia
                    incidunt hic dolorem aliquid quidem labore expedita.
                </main>
            </div>
        );
    }
}

export default Home;
