import React, { Component, Fragment } from 'react';
import Shopslider from './Shopslider';
import cartItems from '../../../data/shop/shop.json'
import { Link } from 'react-router-dom';

const qty = 1;

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priceTotal: cartItems.reduce((totalPrice, item) => totalPrice + item.price * qty, 0),
            cartItems: cartItems
        };
    }
    IncrementItem = (item) => {
        item.qty = item.qty + 1;
        this.setState({ cartItems: this.state.cartItems, priceTotal: cartItems.reduce((totalPrice, item) => totalPrice + item.price * qty, 0) });
    };
    DecreaseItem = (item) => {
        item.qty = item.qty - 1;
        this.setState({ cartItems: this.state.cartItems, priceTotal: cartItems.reduce((totalPrice, item) => totalPrice + item.price * qty, 0) });
    };
    render() {
        return (
            <Fragment>
                {/* Cart */}
                <div className="section-padding pb-0">
                    <div className="container">
                        {/* Cart Table Start */}
                        <div className="table-responsive-md">
                            <table className="andro_responsive-table">
                                <thead>
                                    <tr>
                                        <th className="remove-item" />
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.slice(0, 4).map((item, i) => (
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
                                                        <p>{qty} pieces</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-title="Price"> <strong>{new Intl.NumberFormat().format((item.price).toFixed(2))}$</strong> </td>
                                            <td className="quantity" data-title="Quantity">
                                                <div className="quantity-box">
                                                    <button type="button" className="minus-btn" onClick={() => this.DecreaseItem(item)}>
                                                        <i className="fa fa-minus" />
                                                    </button>
                                                    <input type="text" className="input-qty" name="name" value={qty} readOnly />
                                                    <button type="button" className="plus-btn" onClick={() => this.IncrementItem(item)}>
                                                        <i className="fa fa-plus" />
                                                    </button>
                                                </div>
                                            </td>
                                            <td data-title="Total"> <strong>{new Intl.NumberFormat().format((item.price * qty).toFixed(2))}$</strong> </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* Cart Table End */}
                        {/* Coupon Code Start */}
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="form-group mb-0">
                                    <div className="input-group mb-0">
                                        <input type="text" className="form-control" placeholder="Enter Coupon Code" aria-label="Coupon Code" />
                                        <div className="input-group-append">
                                            <button className="btn" type="button">Apply</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Coupon Code End */}
                    </div>
                </div>
                {/* /Cart */}
                {/* Cart form Start */}
                <div className="section-padding pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <Shopslider />
                            </div>
                            <div className="col-lg-6">
                                <div className="section-header flex-header">
                                    <h3>Cart Total</h3>
                                </div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Subtotal</th>
                                            <td>{new Intl.NumberFormat().format(this.state.priceTotal.toFixed(2))}$</td>
                                        </tr>
                                        <tr>
                                            <th>Tax</th>
                                            <td> 9.99$ <span className="small">(11%)</span> </td>
                                        </tr>
                                        <tr>
                                            <th>Total</th>
                                            <td> <b>{new Intl.NumberFormat().format((this.state.priceTotal + 9.99).toFixed(2))}$</b> </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Link to="/checkout" className="btn btn-block">Proceed to Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Cart form End */}

            </Fragment>
        );
    }
}

export default Content;