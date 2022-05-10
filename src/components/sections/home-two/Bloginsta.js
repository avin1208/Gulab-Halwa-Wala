import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Bloginsta extends Component {
    render() {
        return (
            <div className="section pt-0">
                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        <div className="col-lg-6">
                            <div className="sigma_category style-3">
                                <Link to="/blog-grid">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/blog.jpg"} alt="img" />
                                </Link>
                                <div className="sigma_category-content">
                                    <span>Read<br />The Blog</span>
                                    <Link to="/blog-grid">View All Posts</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sigma_category style-3">
                                <Link to="#">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/insta.jpg"} alt="img" />
                                </Link>
                                <div className="sigma_category-content">
                                    <span>Follow Our Store<br />On Instagram</span>
                                    <Link to="#">@username</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bloginsta;