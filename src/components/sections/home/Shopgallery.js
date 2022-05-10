import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shopgallery from '../../../data/shopgallery.json';

class Shopgallery extends Component {
    render() {
        return (
            <div className="section-padding-2 pt-0">
                <div className="container">
                    <div className="row">
                        {shopgallery.map((item, i) => (
                            <div className="col-lg-6" key={i}>
                                <div className="sigma_category style-5">
                                    <Link to="/shop">
                                        <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} />
                                    </Link>
                                    <div className="sigma_category-content">
                                        <span>{item.title}</span>
                                        <p>{item.text}</p>
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

export default Shopgallery;