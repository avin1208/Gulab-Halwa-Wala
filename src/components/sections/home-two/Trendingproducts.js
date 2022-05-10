import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getTrending, getCategories } from '../../../helper/shophelper';
import Slider from 'react-slick';

const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: false,
    centerMode: true,
    centerPadding: 0,
    vertical: false,
    verticalScrolling: false,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                arrows: false,
            }
        }
    ]
}

class Trendingproducts extends Component {
    render() {
        return (
            <div className="section-padding pt-0">
                <div className="container">
                    <div className="section-header text-center">
                        <h5>Best Of Month</h5>
                        <div className="heading_arrow">
                            <span className="dots_div" />
                            <span className="s" />
                            <span className="dots_div" />
                        </div>
                        <h2>Trending Products</h2>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Slider {...settings} className="sigma_trending-product-slider">
                                {getTrending().map((item, i) => (
                                    <div key={i}>
                                        <div className="sigma_portfolio style-3">
                                            <div className="sigma_portfolio-thumb">
                                                <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                                            </div>
                                            <div className="sigma_portfolio-content">
                                                <div className="sigma_portfolio-categories">
                                                    {getCategories(item.category).slice(0, 1).map((cat, i) => (
                                                        <Link to={"/shop/cat/" + cat.id} className="sigma_portfolio-category" key={i}>{cat.title}</Link>
                                                    ))}
                                                </div>
                                                <h5>
                                                    <Link to={"/shop-details/" + item.id}>{item.title}</Link>
                                                </h5>
                                                <p>{item.shorttext.slice(0, 170)}</p>
                                                <Link to={"/shop-details/" + item.id} className="btn">Order Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Trendingproducts;