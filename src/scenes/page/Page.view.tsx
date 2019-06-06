import React, { Component } from 'react';
import { Inicio, QuienesSomos, Members } from '../';

import './page.scss';

class Page extends Component {
    render() {
        return (
            <div className="inicio-content">
                <div className="content">
                    <div className="sub-content" id="init-page">
                    <h1 className="main-name">Peth Health</h1>
                        <Inicio />
                    </div>
                    <div className="sub-content" id="aboutus-page">
                        <QuienesSomos />
                    </div>
                    <div className="sub-content" id="members-page">
                        <Members />
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;