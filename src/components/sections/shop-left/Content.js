import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shopblock from '../../../data/shop/shop.json';
import { handleOutofStock } from '../../../helper/shophelper';
import Quickview from '../../layouts/Quickview';
import Sidebar from '../../layouts/Shopsidebar';
import { Modal } from 'react-bootstrap';
import Pagination from 'react-js-pagination';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalshow: false,
            lastActiveBox: -1,
            data: shopblock,
            activePage: 1,
            itemPerpage: 12
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
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div className="col-lg-4 col-md-4 col-sm-6" key={i}>
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
        });
        return (
            <div className="section-padding pb-0">
                <div className="container">
                    <div className="row">
                        {/* Sidebar */}
                        <aside className="col-lg-4">
                            <Sidebar />
                        </aside>
                        {/* /Sidebar */}
                        <div className="col-lg-8 mt-5 mt-lg-0">
                            {/* top filter bar */}
                            <div className="sigma_shop-filter d-block d-sm-flex">
                                <p>Showing {paginationData.length} results</p>
                                <div className="filter-box position-relative mt-4 mt-sm-0">
                                    <select className="form-control">
                                        <option value={0}>Filter</option>
                                        <option value={1}>Sort By Popularity</option>
                                        <option value={2}>Sort By Latest</option>
                                        <option value={3}>Sort By Rating</option>
                                        <option value={4}>Sort By Price:Low to High</option>
                                        <option value={5}>Sort By Price:High to Low</option>
                                    </select>
                                    <i className="fa fa-chevron-down" />
                                </div>
                            </div>
                            {/* Products Starts */}
                            <div className="row">
                                {paginationData}
                            </div>
                            {/* Pagination Start */}
                            <div className="pagination_wrap">
                                <Pagination
                                    activePage={this.state.activePage}
                                    itemsCountPerPage={this.state.itemPerpage}
                                    totalItemsCount={this.state.data.length}
                                    pageRangeDisplayed={this.state.data.length}
                                    onChange={this.handlePageChange.bind(this)}
                                    innerClass="pagination mb-0"
                                    activeLinkClass="active"
                                    itemClass="page-item"
                                    linkClass="page-link"
                                />
                            </div>
                            {/* Pagination End */}
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
            </div>
        );
    }
}

export default Content;