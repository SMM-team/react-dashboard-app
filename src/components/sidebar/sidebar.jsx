import React, { Component } from 'react';
import { Analytics, Dashboard, Inbox, Logo, News, Order, Schedules, Settings } from '../icon/index.js';
import '../../assets/styles/base.scss'
import './sidebar.scss'
import Footer from '../../pages/footer/footer.jsx';
import Search from '../../pages/search/search.jsx';
class Sidebar extends Component {
    state = {
        active: 'menu',
    }
    handleActive = (e) => {
        let list = document.querySelectorAll('.nav-link');

        list.forEach((item) => {
            item.addEventListener('click', () => {
                if (!item.classList.contains('active')) {
                    list.forEach((item2) => {
                        item2.classList.remove('active');
                    })

                    item.classList.add('active')
                }
            })
        });
        console.log(e.target.innerText);
        this.setState({ active: e.target.innerText });
        e.target.className = 'active';

    }

    handleToggle = () => {
        let sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('hide');
    }
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
                                        <li><a className='nav-link' onClick={this.handleActive} href="#">{Dashboard} Dashboard</a></li>
                                        <li><a className='nav-link' onClick={this.handleActive} href="#">{Order} Orders</a></li>
                                        <li><a className='nav-link' onClick={this.handleActive} href="#">{Schedules} Messages</a></li>
                                        <li><a className='nav-link' onClick={this.handleActive} href="#">{Inbox} Inbox</a></li>
                                        <li><a className='nav-link' onClick={this.handleActive} href="#">{Analytics} Analytics</a></li>
                                        <li><a className='nav-link' onClick={this.handleActive} href="#">{News} News</a></li>
                                        <li><a className='nav-link' onClick={this.handleActive} href="#">{Settings} Settings</a></li>
                                    </ul>
                                </div>
                                <Footer />

                            </div>
                        </div>
                        <div className="content">
                            <button onClick={this.handleToggle} className='menu'>Menu</button>
                            <h1>{this.state.active}</h1>
                        </div>
                    </div>
                </main>

            </>
        );
    }
}

export default Sidebar;