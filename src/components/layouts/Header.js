import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from '../../helper/navhelper';
import navigationmenu from '../../data/navigation.json';
import Mobilemenu from './Mobilemenu';
import Searchform from './Searchform';
import Canvas from './Canvas';
import classNames from 'classnames';
import Slider from 'react-slick';

const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true
}

class Header extends HeaderComponent {
    render() {
        return (
            <Fragment>
                {/* Mobile Aside */}
                <aside className={classNames("sigma_aside", { "aside-open": this.state.navmethod })}>
                    <div className="sigma_close aside-trigger" onClick={this.toggleNav}>
                        <span />
                        <span />
                    </div>
                    <Mobilemenu />
                </aside>
                <div className="sigma_aside-overlay aside-trigger" onClick={this.toggleNav} />
                {/* Main Header */}
                <header className="sigma_header can-sticky" id="can-sticky">
                    <div className="sigma_header-topbar d-none d-md-block">
                        <div className="container-fluid">
                            <div className="sigma_header-topbar-inner row align-items-center">
                                <div className="col-md-4">
                                    <div className="follow_us">
                                        <ul>
                                            <li><Link to="#"><i className="fa fa-facebook" /></Link></li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="sigma_offer-slider text-center">
                                        <Slider {...settings} className="offer-slider">
                                            <p>Welcome To <span className="primary-color"> Gulab Halwa wala</span> Shop</p>
                                            <p>New Arrival Up To<span className="primary-color"> 70%</span> Off</p>
                                            <p>Limited Stock<span className="primary-color"> Hurry Up</span> Now</p>
                                        </Slider>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <ul className="topbar-links justify-content-end">
                                        <li>
                                            <Link to="#">
                                                <i className="fa fa-phone" />
                                                02932 223 550
                                            </Link>
                                        </li>
                                        <li className="d-none d-lg-block">
                                            <Link to="#">
                                                <i className="fa fa-envelope" />
                                                gulabhalwawala@gmail.com
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sigma_header-middle">
                        <div className="container-fluid">
                            <div className="navbar">
                                <div className="sigma_logo-wrapper">
                                    <Link className="sigma_logo" to="/">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="logo" />
                                    </Link>
                                </div>
                                <ul className="navbar-nav">
                                    {navigationmenu.length > 0 ? navigationmenu.map((item, i) => (
                                        <li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                                            {item.child ? <Link onClick={e => e.preventDefault()} to="/"> {item.linkText} </Link> : <Link to={item.link}> {item.linkText} </Link>}
                                            {item.child ?
                                                <ul className="sub-menu" role="menu">
                                                    {item.submenu.map((sub_item, i) => (
                                                        <li key={i} className={`menu-item ${sub_item.child ? 'menu-item-has-children' : ''} `}>
                                                            {sub_item.child ? <Link onClick={e => e.preventDefault()} to="/"> {sub_item.linkText} </Link> : <Link to={sub_item.link}> {sub_item.linkText} </Link>}
                                                            {sub_item.submenu ?
                                                                <ul className="sub-menu">
                                                                    {sub_item.submenu.map((third_item, i) => (
                                                                        <li className="menu-item" key={i}><Link
                                                                            to={third_item.link}>{third_item.linkText}</Link>
                                                                        </li>
                                                                    ))}
                                                                </ul> : null}
                                                        </li>
                                                    ))}
                                                </ul>
                                                : null
                                            }
                                        </li>
                                    )) : null}
                                </ul>
                                <div className="sigma_header-controls">
                                    <ul className="sigma_header-controls-inner">
                                        <li className="aside-toggle aside-trigger-right desktop-toggler" onClick={this.toggleSidebar}>
                                            <span />
                                            <span />
                                            <span />
                                        </li>
                                        <li className="search-trigger header-controls-item d-none d-sm-block">
                                            <Link to="#" onClick={this.searchToggle}>
                                                <i className="flaticon-search" />
                                            </Link>
                                        </li>
                                        <li className="header-controls-item d-none d-sm-block">
                                            <Link to="/cart">
                                                <i className="flaticon-shopping-bag" />
                                                <span className="cart-count">4</span>
                                            </Link>
                                        </li>
                                        <li className="header-controls-item d-none d-sm-block">
                                            <Link to="/wishlist">
                                                <i className="flaticon-heart" />
                                                <span className="cart-count">4</span>
                                            </Link>
                                        </li>
                                        <li className="aside-toggle aside-trigger" onClick={this.toggleNav}>
                                            <span />
                                            <span />
                                            <span />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Search Form Start*/}
                    <div className={classNames("search-form-wrapper", { "open": this.state.searchmethod })}>
                        <div className="search-trigger sigma_close" onClick={this.searchToggle}>
                            <span />
                            <span />
                        </div>
                        <Searchform />
                    </div>
                    {/* Search Form End*/}
                    {/* Sidebar-Nav */}
                    <div id="sidebar_nav" className={classNames("slide_menu", { "show": this.state.sidebarmethod })}>
                        <Canvas />
                    </div>
                    <div id="overlay_bg" className={classNames("", { "show": this.state.sidebarmethod })} onClick={this.toggleSidebar} />
                    {/* /Sidebar-Nav */}
                </header>
            </Fragment>
        );
    }
}

export default Header;