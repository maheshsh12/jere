import React, { Component } from 'react';
import TheHeader from '../TheHeader/TheHeader';
import TheContent from '../TheContent/TheContent';
import TheFooter from '../TheFooter/TheFooter';


class MainLayout extends Component {
    render() {
        return (
            <div className="jere-app">
                <div className="main-wrapper">
                    <TheHeader/>
                    <div className="main-content">
                        <TheContent/>
                    </div>
                    <TheFooter/>
                </div>
            </div>
        )
    }
}

export default MainLayout;