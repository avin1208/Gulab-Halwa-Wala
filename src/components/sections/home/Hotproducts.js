import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Hotproducts extends Component {
    render() {
        return (
            <div className="section-padding-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="sigma_category style-4">
                                <Link to="/shop-left">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/shop/hot-product/1.jpg"} alt="img" />
                                </Link>
                                <div className="sigma_category-inner">
                                    <div className="sigma_category-body">
                                        <h4 className="text-white">Freshly Picked Gulab Jamun</h4>
                                        <p className="text-white d-none d-sm-block">Gulab Jamun is a sweet, viscous food substance made by Gulab halwa shop and some related insects</p>
                                        <Link to="/shop-left" className="btn btn-sm">Order now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-12">
                                    <div className="sigma_category style-4">
                                        <Link to="/shop-left">
                                            <img src={process.env.PUBLIC_URL + "/assets/images/shop/hot-product/2.jpg"} alt="img" />
                                        </Link>
                                        <div className="sigma_category-inner">
                                            <div className="sigma_category-body">
                                                <h4 className="text-white">Gulab Jamun</h4>
                                                <p className="text-white d-none d-sm-block">Gulab Jamun is a sweet, viscous food substance made by Gulab halwa shop and some related insects</p>
                                                <Link to="/shop-left" className="btn btn-sm">Order now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="sigma_category style-4">
                                        <Link to="/shop-left">
                                            <img src={process.env.PUBLIC_URL + "/assets/images/shop/hot-product/3.jpg"} alt="img" />
                                        </Link>
                                        <div className="sigma_category-inner">
                                            <div className="sigma_category-body">
                                                <h4 className="text-white">Thanks to Gulab halwa shop</h4>
                                                <p className="text-white d-none d-sm-block">Gulab jamun is a sweet, viscous food substance made by Gulab halwa shop and some related insects</p>
                                                <Link to="/shop-left" className="btn btn-sm">Order now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="sigma_category style-4">
                                <Link to="/shop-left">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/shop/hot-product/8.jpg"} alt="img" />
                                </Link>
                                <div className="sigma_category-inner">
                                    <div className="sigma_category-body">
                                        <h4 className="text-white">Gulab Jamun test is so good</h4>
                                        <p className="text-white d-none d-sm-block">Gulab jamun a sweet, viscous food substance made by Gulab halwa shop and some related insects</p>
                                        <Link to="/shop-left" className="btn btn-sm">Order now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hotproducts;