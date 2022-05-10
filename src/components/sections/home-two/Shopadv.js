import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shopadv from '../../../data/shopadv.json';

class Shopadv extends Component {
    render() {
        return (
            <div className="section-padding-2 pt-0">
                <div className="container">
                    <div className="row">
                        {shopadv.slice(0, 1).map((item, i) => (
                            <div className="col-md-6" key={i}>
                                <div className="sigma_category style-6">
                                    <Link to="/shop">
                                        <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.tag} />
                                    </Link>
                                    <div className="sigma_category-content">
                                        <span>{item.tag}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="col-md-3">
                            {shopadv.slice(1, 3).map((item, i) => (
                                <div key={i} className="sigma_category style-6">
                                    <Link to="/shop">
                                        <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.tag} />
                                    </Link>
                                    <div className="sigma_category-content">
                                        <span>{item.tag}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {shopadv.slice(3, 4).map((item, i) => (
                            <div className="col-md-3" key={i}>
                                <div className="sigma_category style-6">
                                    <Link to="/shop">
                                        <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.tag} />
                                    </Link>
                                    <div className="sigma_category-content">
                                        <span>{item.tag}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Shopadv;