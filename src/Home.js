import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MyNavbar from './MyNavbar';
import { Button } from 'reactstrap';

class Home extends Component {

    render() {
        return (
            <div>
                <MyNavbar />
                <Button onClick={() => {
                    window.location.href = "/#/test";
                }}>TEST</Button>

            </div>
        );
    }

}

export default Home;