import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MyNavbar from './MyNavbar';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <div>
                <MyNavbar />

            </div>
        );
    }

}

export default Home;