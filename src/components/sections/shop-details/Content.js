import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { getProduct, handleOutofStock, getCategories, getTags, getAuthor } from '../../../helper/shophelper';
import { Rating } from '../../../helper/helper';
import { Tab, Nav } from 'react-bootstrap';

const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: false
};
const settingsThumb = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: false,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
            }
        }
    ]
}
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null,
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
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    render() {
        const productId = this.props.productId;
        const item = getProduct(productId);
        return (
            <div className="section-padding pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <Slider {...settings} asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} className="sigma_product-slider-1">
                                {item.image.map((image, i) => (
                                    <div key={i} className="item">
                                        <img src={process.env.PUBLIC_URL + "/" + image} alt={item.title} />
                                    </div>
                                ))}
                            </Slider>
                            <Slider {...settingsThumb} asNavFor={this.state.nav1} ref={slider => (this.slider2 = slider)} className="sigma_product-slider-2 mt-3">
                                {item.image.map((image, i) => (
                                    <img key={i} src={process.env.PUBLIC_URL + "/" + image} alt={item.title} />
                                ))}
                            </Slider>
                        </div>
                        <div className="col-lg-7">
                            <div className="shop-detail-content mt-5 mt-lg-0">
                                <h3 className="product-title m-0">{item.title}</h3>
                                <div className="stars">
                                    {Rating(item.rating)}
                                    <span className="pro-review">{item.reviews.length} Reviews</span>
                                </div>
                                <div className="sigma_product-price">
                                    {
                                        item.discount > 0 || item.discount !== '' ? <span>${new Intl.NumberFormat().format((item.price * (100 - item.discount) / 100).toFixed(2))}</span> : ''
                                    }
                                    <span>${new Intl.NumberFormat().format((item.price).toFixed(2))}</span>
                                </div>
                                <div className="shop-detail-inner">
                                    <div className="availability-box">
                                        <div className="d-inline-block other-info">
                                            <h6>Availability:
                                    {item.stock === true ? <span className="text-success ml-2">In Stock</span> : <span className="text-danger ml-2">Out of Stock</span>}
                                            </h6>
                                        </div>
                                        <div className="ml-2 d-inline-block other-info">
                                            <h6>SKU:
                  <span className="grey ml-2">{item.sku}</span>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="short-descr">
                                        <p>{item.shorttext}</p>
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
                                            {item.stock === true ? <button type="button" className="btn">Add to Cart</button> : <button type="button" className="btn" onClick={handleOutofStock}>Add to Cart</button>}
                                        </div >
                                    </div >
                                    <div className="other-info flex">
                                        <h6>Category:</h6>
                                        <ul>
                                            {getCategories(item.category).slice(0, 3).map((cat, i) => (
                                                <li className="list-inline-item mr-2" key={i}>
                                                    <Link to={"/shop/cat/" + cat.id} className="grey">{cat.title}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div >
                                    <div className="other-info flex">
                                        <h6>Tags:</h6>
                                        <ul>
                                            {getTags(item.tags).slice(0, 3).map((tag, i) => (
                                                <li className="list-inline-item mr-2" key={i}>
                                                    <Link to={"/shop/tag/" + tag.id} className="grey">{tag.title}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div >
                                </div >
                            </div >
                        </div >
                        <div className="col-12">
                            <div className="product-description">
                                <div className="tabs">
                                    <Tab.Container defaultActiveKey="tab1">
                                        <Nav variant="tabs" className="justify-content-center">
                                            <Nav.Item>
                                                <Nav.Link eventKey="tab1">Description</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="tab2">Reviews ({item.reviews.length})</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="tab3">Additional Info</Nav.Link>
                                            </Nav.Item> 
                                        </Nav>
                                        <Tab.Content className="pb-0">
                                            <Tab.Pane eventKey="tab1">
                                                <div dangerouslySetInnerHTML={{ __html: item.htmltext }} />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab2">
                                                <div className="news-details-box">
                                                    <div id="comments">
                                                        <div className="all_comments m-0 p-0 border-0">
                                                            <h4>Reviews</h4>
                                                            <ul className="commentlist">
                                                                {item.reviews.map((review, i) => (
                                                                    <li className="comment" key={i}>
                                                                        <div className="comment the-comment">
                                                                            {getAuthor(review.user).map((user, i) => (
                                                                                <div className="comment-avatar" key={i}>
                                                                                    <img alt={user.name} src={process.env.PUBLIC_URL + "/" + user.image} className="avatar" />
                                                                                </div>
                                                                            ))}
                                                                            <div className="comment-content">
                                                                                <div className="comment-meta">
                                                                                    <span className="comment-time"><span>
                                                                                        {review.commentdate}</span></span>
                                                                                    {getAuthor(review.user).map((user, i) => (
                                                                                        <span key={i} className="comment-author">
                                                                                            <Link to={"/team-details/" + user.id} className="url">{user.name}</Link>
                                                                                        </span>
                                                                                    ))}
                                                                                </div>
                                                                                <div className="text">
                                                                                    <div className="comment-text">
                                                                                        <p>{review.comment}</p>
                                                                                        <span className="reply"> <Link rel="nofollow" className="comment-reply-link" to="#"><i className="fa fa-reply" /> Reply</Link>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        {/* /all-comment */}
                                                        {/* comment-form*/}
                                                        <div id="respond" className="comment-respond">
                                                            <h4>Post Review</h4>
                                                            <form id="commentform" className="comment-form">
                                                                <div className="form-group">
                                                                    <div className="msg_input">
                                                                        <textarea name="comment" cols={45} rows={3} className="form-control" placeholder="Type your comments...." />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="name_input">
                                                                        <input type="email" className="form-control" placeholder="Type name email...." />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="email_input">
                                                                        <input type="email" className="form-control" placeholder="Type your email...." />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="web_input">
                                                                        <input type="text" className="form-control" placeholder="Type your website...." />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <button type="submit" className="btn">Post Review</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab3" className="additional-info">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Attributes</th>
                                                            <th>Values</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {item.additionalinfo.map((info, i) => (
                                                            <tr key={i}>
                                                                <td><b>{info.title}</b></td>
                                                                <td className="value">{info.text}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div >
                            </div >
                        </div >
                    </div >
                </div >
            </div >
        );
    }
}

export default Content;