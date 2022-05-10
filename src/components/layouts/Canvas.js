import React, { Component, Fragment } from 'react';
import instagram from '../../data/instagram.json';
// import { getRecentPost } from '../../helper/bloghelper';
import { Link, withRouter } from 'react-router-dom';

class Canvas extends Component {
    render() {
        return (
            <Fragment>
                <div className="sidebar_logo">
                    <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="logo" />
                </div>
                <div className="sidebar_widget instagram_widget">
                    <div className="widget_title">
                        
                    </div>
                    <ul>
                        {instagram.slice(0, 6).map((item, i) => (
                            <li key={i}>
                                <Link to="#">
                                    <img src={process.env.PUBLIC_URL + "/" + item.image} alt="img" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Fragment>
        );
    }
}
export default withRouter(Canvas);