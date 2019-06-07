import React, { Component } from 'react';
import NavHeader from '../nav-header';
import './main-layout.scss';

interface IProps {
    children: React.ReactNode;
}

class MainLayout extends Component<IProps> {
    render() {
        return (
            <>
                <header><NavHeader /></header>
                {this.props.children}
                <footer>
                    <p id="text-1">
                        2019 For: PetHealth & Developed by
                        <strong id="myname-1"> Luis Alejandro Galindo Honores</strong>
                        <strong id="myname-2"> Luis Galindo</strong>
                    </p>
                    <p id="text-2">
                        PetHealth, By <strong>Luis.G</strong>
                    </p>
                </footer>
            </>
        );
    }
}

export default MainLayout;