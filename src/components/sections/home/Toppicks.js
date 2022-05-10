import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shopblock from '../../../data/shop/shop.json';
import category from '../../../data/shop/category.json';
import { handleOutofStock } from '../../../helper/shophelper';
import Quickview from '../../layouts/Quickview';
import { Modal } from 'react-bootstrap';

class Toppicks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredProducts: shopblock,
            activeItem: -1,
            modalshow: false,
            lastActiveBox: -1,
        };
        this.modalShow = this.modalShow.bind(this);
        this.modalClose = this.modalClose.bind(this);
    }
    handleClick = id => {
        let filteredProducts = [];
        if (id === -1) {
            filteredProducts = shopblock;
        } else {
            filteredProducts = shopblock.filter(
                (product) => product.category.includes(id)
            );
        }
        this.setState({ filteredProducts, activeItem: id });
    };
    // Modal
    modalShow(index) {
        this.setState({ modalshow: true, lastActiveBox: index });
    }
    modalClose() {
        this.setState({ modalshow: false });
    }
    render() {
        const renderAll = this.state.filteredProducts.map((item, i) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
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
        ));
        return (
            <div className="section-padding-2">
                <div className="container">
                    <div className="section-header text-center">
                        <h5>Our Products</h5>
                        <div className="heading_arrow">
                            <span className="dots_div" />
                            <span className="s" />
                            <span className="dots_div" />
                        </div>
                        <h2>Best Quality Product</h2>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="sigma_tab-item style-13">
                                <ul className="nav nav-tabs" role="tablist">
                                    {category.map((item) => (
                                        <li className="nav-item" key={item.id}>
                                            <Link to="#" className={this.state.activeItem === parseInt(item.id) ? 'nav-link active' : 'nav-link'} onClick={this.handleClick.bind(this, item.id)}>
                                                <i className={item.icon} />
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            {renderAll}
                        </div>
                    </div>
                </div>
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
        );
    }
}

export default Toppicks;