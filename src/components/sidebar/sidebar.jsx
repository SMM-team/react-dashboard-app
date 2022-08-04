import React, { Component } from 'react';
import { Analytics, News, Settings } from '../icon/index.js';
import '../../assets/styles/base.scss'
class Sidebar extends Component {

    state = {}
    render() {
        return (
            <div className="sidebar">
                <h1>Samandar</h1>
                <div className="settings">
                    {Settings}
                </div>
                <div className="news">
                    {News}
                </div>
                {Analytics}
            </div>
        );
    }
}

export default Sidebar;