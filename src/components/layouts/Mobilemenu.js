import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from '../../helper/navhelper';
import navigationmenu from '../../data/navigation.json';

class Mobilemenu extends HeaderComponent {
    render() {
        return (
            <Fragment>
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
            </Fragment>
        );
    }
}

export default Mobilemenu;