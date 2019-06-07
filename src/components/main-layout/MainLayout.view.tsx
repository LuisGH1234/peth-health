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
                    2019 For: PetHealth & Developed by <strong>Luis Alejandro Galindo Honores</strong> 
                </footer>
            </>
        );
    }
}

export default MainLayout;