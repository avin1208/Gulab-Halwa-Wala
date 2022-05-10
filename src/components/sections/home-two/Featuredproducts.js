import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { handleOutofStock, getFeatured } from '../../../helper/shophelper';
import Quickview from '../../layouts/Quickview';
import { Modal } from 'react-bootstrap';

class Featuredproducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalshow: false,
            lastActiveBox: -1,
        };
        this.modalShow = this.modalShow.bind(this);
        this.modalClose = this.modalClose.bind(this);
    }
    // Modal
    modalShow(index) {
        this.setState({ modalshow: true, lastActiveBox: index });
    }
    modalClose() {
        this.setState({ modalshow: false });
    }
    render() {
        return (
            <div className="section-padding-2 pt-0">
                <div className="container">
                    <div className="section-header text-center">
                        <h5>Featured</h5>
                        <div className="heading_arrow">
                            <span className="dots_div" />
                            <span className="s" />
                            <span className="dots_div" />
                        </div>
                        <h2>Our Featured Products</h2>
                    </div>
                    <div className="row">
                        {getFeatured().map((item, i) => (
                            <div key={i} className="col-lg-3 col-md-4 col-sm-6">
                                <div className="sigma_product style-5">
                                    <div className="sigma_product-thumb">
                                        <Link to={"/shop-details/" + item.id}>
                                            <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                                        </Link>
                                        <div className="sigma_product-controls">
                                            <Link to="#"><i className="fa fa-heart" /></Link>
                                            {item.stock === true ? <Link to="#"><i className="fa fa-shopping-cart" /></Link> : <Link to="#" onClick={handleOutofStock}><i className="fa fa-shopping-cart" /></Link>}
                                            <Link to="#" onClick={(e) => this.modalShow(item.id)}><i className="fa fa-eye" /></Link>
                                        </div>
                                        <div className="sigma_product-badge">
                                            {item.sale === true ? <span className="sale">Sale</span> : ''}
                                            {item.discount > 0 || item.discount !== '' ? <span className="discount">-{item.discount}%</span> : ''}
                                        </div>
                                    </div>
                                    <div className="sigma_product-body">
                                        <h5 className="sigma_product-title">
                                            <Link to={"/shop-details/" + item.id}>{item.title}</Link>
                                        </h5>
                                        <div className="sigma_product-price">
                                            {
                                                item.discount > 0 || item.discount !== '' ? <span>${new Intl.NumberFormat().format((item.price * (100 - item.discount) / 100).toFixed(2))}</span> : ''
                                            }
                                            <span>${new Intl.NumberFormat().format((item.price).toFixed(2))}</span>
                                        </div>
                                        <div className="cart-btn">
                                            {item.stock === true ? <Link to="#">Add to Cart</Link> : <Link to="#" onClick={handleOutofStock}>Add to Cart</Link>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Modal (Quick View) */}
                        <Modal show={this.state.modalshow} className="quick-view-modal" onHide={this.modalClose} aria-labelledby="contained-modal-title-vcenter" size="lg" centered>
                            <Modal.Body>
                                <div className="sigma_close" onClick={this.modalClose}>
                                    <span />
                                    <span />
                                </div>
                                <Quickview productId={this.state.lastActiveBox} />
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}

export default Featuredproducts;