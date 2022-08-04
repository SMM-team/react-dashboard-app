import React, { Component } from 'react';
import { Analytics, Dashboard, Inbox, Logo, News, Order, Schedules, Settings } from '../icon/index.js';
import '../../assets/styles/base.scss'
import './sidebar.scss'
class Sidebar extends Component {

    state = {}
    render() {
        return (
            <>
                <main>
                    <div className="container">
                        <div className="sidebar">
                            <div>
                                <div className="logo">
                                    {Logo}
                                </div>
                                <div className="search">
                                    <label htmlFor="input"> {News}</label>

                                    <input id='input' type="text" placeholder='Search' />
                                </div>
                                <div className="nav-list">
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
                                <div className="footer">
                                    <div className="img-box">

                                    </div>
                                    <div className="description">
                                        <h2>Richard</h2>
                                        <p>9394lay@gmail.com</p>
                                    </div>
                                </div>

                                <div className="logOut">

                                </div>
                            </div>
                        </div>
                        <div className="content">

                        </div>
                    </div>
                </main>

            </>
        );
    }
}

export default Sidebar;