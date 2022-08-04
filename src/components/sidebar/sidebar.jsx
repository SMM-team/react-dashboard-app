import React, { Component } from 'react';
import { Analytics, Dashboard, Inbox, Logo, News, Order, Schedules, Settings } from '../icon/index.js';
import '../../assets/styles/base.scss'
class Sidebar extends Component {

    state = {}
    render() {
        return (
            <>
                <div className="container">
                    <div className="sidebar">
                        <div className="logo">
                            {Logo}
                        </div>
                        <div className="search">
                            <input type="text" />
                        </div>
                        <div className="nav-list">
                            <div className="nav-item">
                                <ul>
                                    <li><a href="#">{Dashboard} Dashboard</a></li>
                                    <li><a href="#">{Order} Orders</a></li>
                                    <li><a href="#">{Schedules} Messages</a></li>
                                    <li><a href="#">{Inbox} Inbox</a></li>
                                    <li><a href="#">{Analytics} Analytics</a></li>
                                    <li><a href="#">{News} News</a></li>
                                    <li><a href="#">{Settings} Settings</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer">
                            <div className="img-box">

                            </div>
                            <div className="description">
                                <h2>Richard</h2>
                                <p>9394lay@gmail.com</p>
                            </div>
                            <div className="logOut">

                            </div>
                        </div>
                    </div>
                    <div className="content">

                    </div>
                </div>

            </>
        );
    }
}

export default Sidebar;