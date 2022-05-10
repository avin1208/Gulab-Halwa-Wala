import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { getProduct, handleOutofStock, getCategories, getTags } from '../../helper/shophelper';
import { Rating } from '../../helper/helper';

class Quickview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 1
        };
    }
    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    };

    DecreaseItem = () => {
        if (this.state.clicks < 1) {
            this.setState({
                clicks: 0,
            });
        } else {
            this.setState({
                clicks: this.state.clicks - 1,
            });
        }
    };
    handleChange(event) {
        this.setState({ clicks: event.target.value });
    }
    render() {
        const productId = this.props.productId;
        const modalContent = getProduct(productId);
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="sigma_product-image">
                            <img src={process.env.PUBLIC_URL + "/" + modalContent.image[0]} alt={modalContent.title} />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="shop-detail-content mt-5 mt-lg-0">
                            <h3 className="product-title m-0">{modalContent.title}</h3>
                            <div className="stars">
                                {Rating(modalContent.rating)}
                                <span className="pro-review">{modalContent.reviews.length} Reviews</span>
                            </div>
                            <div className="sigma_product-price">
                                {
                                    modalContent.discount > 0 || modalContent.discount !== '' ? <span>${new Intl.NumberFormat().format((modalContent.price * (100 - modalContent.discount) / 100).toFixed(2))}</span> : ''
                                }
                                <span>${new Intl.NumberFormat().format((modalContent.price).toFixed(2))}</span>
                            </div>
                            <div className="shop-detail-inner">
                                <div className="availability-box">
                                    <div className="d-inline-block other-info">
                                        <h6>Availability:
                  {modalContent.stock === true ? <span className="text-success ml-2">In Stock</span> : <span className="text-danger ml-2">Out of Stock</span>}
                                        </h6>
                                    </div>
                                    <div className="ml-2 d-inline-block other-info">
                                        <h6>SKU:
                <span className="grey ml-2">{modalContent.sku}</span>
                                        </h6>
                                    </div>
                                </div>
                                <div className="short-descr">
                                    <p>{modalContent.shorttext}</p>
                                </div>
                                <div className="quantity-cart d-sm-flex align-items-center">
                                    <div className="quantity-box">
                                        <button type="button" className="minus-btn" onClick={this.DecreaseItem}>
                                            <i className="fa fa-minus" />
                                        </button>
                                        <input type="text" className="input-qty" name="name" value={this.state.clicks} onChange={this.handleChange.bind(this)} />
                                        <button type="button" className="plus-btn" onClick={this.IncrementItem}>
                                            <i className="fa fa-plus" />
                                        </button>
                                    </div>
                                    <div className="cart-btn">
                                        {modalContent.stock === true ? <button type="button" className="btn">Add to Cart</button> : <button type="button" className="btn" onClick={handleOutofStock}>Add to Cart</button>}
                                    </div>
                                </div>
                                <div className="other-info flex">
                                    <h6>Category:</h6>
                                    <ul>
                                        {getCategories(modalContent.category).slice(0, 3).map((cat, i) => (
                                            <li className="list-inline-item mr-2" key={i}>
                                                <Link to={"/shop/cat/" + cat.id} className="grey">{cat.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="other-info flex">
                                    <h6>Tags:</h6>
                                    <ul>
                                        {getTags(modalContent.tags).slice(0, 3).map((tag, i) => (
                                            <li className="list-inline-item mr-2" key={i}>
                                                <Link to={"/shop/tag/" + tag.id} className="grey">{tag.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Quickview;