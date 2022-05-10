import React, { Component } from 'react';
import shopblock from '../../../data/shop/shop.json';
import { Link } from 'react-router-dom';

class Shopblock extends Component {
    render() {
        return (
            <div className="section-padding-2 pt-0">
                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        {shopblock.slice(0, 3).map((item, i) => (
                            <div className="col-md-4" key={i}>
                                <div className="sigma_category style-7">
                                    <Link to={"/shop-details/" + item.id}>
                                        <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                                    </Link>
                                    <div className="sigma_category-inner">
                                        <div className="sigma_category-body">
                                            <h4 className="text-white">{item.title}</h4>
                                            <Link to={"/shop-details/" + item.id} className="btn btn-sm">Order now</Link>
                                        </div>
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

export default Shopblock;