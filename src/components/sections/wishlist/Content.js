import React, { Component } from 'react';
import wishlistItems from '../../../data/shop/shop.json'
import { Link } from 'react-router-dom';

const qty = 1;

class Content extends Component {
    render() {
        return (
            <div className="section-padding pb-0">
                <div className="container">
                    {/* Wishlist Table Start */}
                    <div className="table-responsive-md">
                        <table className="andro_responsive-table">
                            <thead>
                                <tr>
                                    <th className="remove-item" />
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Availability</th>
                                    <th>Total</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {wishlistItems.slice(0, 4).map((item, i) => (
                                    <tr key={i}>
                                        <td className="remove">
                                            <button type="button" className="sigma_close remove-from-cart">
                                                <span />
                                                <span />
                                            </button>
                                        </td>
                                        <td data-title="Product">
                                            <div className="andro_cart-product-wrapper">
                                                <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                                                <div className="andro_cart-product-body">
                                                    <h6> <Link to={"/shop-details/" + item.id}>{item.title}</Link> </h6>
                                                    <p>{qty} piece</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td data-title="Price"> <strong>{new Intl.NumberFormat().format((item.price).toFixed(2))}$</strong> </td>
                                        <td data-title="Availability">
                                            {item.stock === true ? <span className="andro_product-stock text-success">In Stock</span> : <span className="andro_product-stock text-danger">Out of Stock</span>}
                                        </td>
                                        <td data-title="Total"> <strong>{new Intl.NumberFormat().format((item.price * qty).toFixed(2))}$</strong> </td>
                                        <td data-title="Actions">
                                            {item.stock === true ? <button type="button" className="btn btn-sm">Add to Cart</button> : <button type="button" className="btn btn-sm disabled">Add to Cart</button>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Wishlist Table End */}
                    {/* Share Wishlist Start */}
                    <div className="text-center">
                        <h5>Share Your Wishlist</h5>
                        <div className="followus_widget">
                            <ul className="p-0 m-0">
                                <li><Link to="#"><i className="fa fa-twitter" /></Link></li>
                                <li><Link to="#"><i className="fa fa-pinterest" /></Link></li>
                                <li><Link to="#"><i className="fa fa-facebook" /></Link></li>
                                <li><Link to="#"><i className="fa fa-instagram" /></Link></li>
                                <li><Link to="#"><i className="fa fa-wordpress" /></Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* Share Wishlist End */}
                </div>
            </div>
        );
    }
}

export default Content;