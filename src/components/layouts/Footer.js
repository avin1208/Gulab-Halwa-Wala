import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import portfolio from '../../data/portfolio/portfolio.json';
import shopblock from '../../data/shop/shop.json';

class Footer extends Component {
    render() {
        return (
            <footer className="sigma_footer style-3">
                <div className="sigma_footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-4">
                                <div className="sigma_footer-widget">
                                    <h5 className="widget-title">Portfolio</h5>
                                    <ul className="sigma_footer-links">
                                        {portfolio.slice(0, 4).map((item, i) => (
                                            <li key={i}>
                                                <Link to={"/portfolio-details/" + item.id}>{item.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-4">
                                <div className="sigma_footer-widget">
                                    <h5 className="widget-title">Company</h5>
                                    <ul className="sigma_footer-links">
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link to="/blog">Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contacts</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-4">
                                <div className="sigma_footer-widget">
                                    <h5 className="widget-title">Shop</h5>
                                    <ul className="sigma_footer-links">
                                        {shopblock.slice(0, 4).map((item, i) => (
                                            <li key={i}>
                                                <Link to={"/shop-details/" + item.id}>{item.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="sigma_footer-widget">
                                    <div className="sigma_footer-logo mb-4">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="logo" />
                                    </div>
                                    <h5 className="widget-title">Subscribe To Our Newsletter</h5>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-8">
                                                <input type="email" name="email" className="form-control" placeholder="Enter yr email" />
                                            </div>
                                            <div className="col-md-4">
                                                <button type="button" className="btn btn-block mt-4 mt-md-0">Submit</button>
                                            </div>
                                        </div>
                                        <span>Welcome to our Honey Company</span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="sigma_footer-bottom mt-0 d-block d-lg-flex align-items-center justify-content-between">
                        <div className="sigma_footer-copyright m-0">
                            <p className="mb-0"> © Website Project -
          <Link to="#">2021</Link>
                            </p>
                        </div>
                        <div className="sigma_footer-payment mt-3 mt-lg-0">
                            <img src={process.env.PUBLIC_URL + "/assets/images/footer-bottom-img.png"} alt="img" />
                        </div>
                        <ul className="follow_us mt-3 mt-lg-0">
                            <li><Link to="#"><i className="fa fa-facebook" /></Link></li>
                            <li><Link to="#"><i className="fa fa-twitter" /></Link></li>
                            <li><Link to="#"><i className="fa fa-behance" /></Link></li>
                            <li><Link to="#"><i className="fa fa-internet-explorer" /></Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;