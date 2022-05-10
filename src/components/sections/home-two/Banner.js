import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import bannerpost from '../../../data/bannertwo.json';

const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: false,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                arrows: false,
            }
        }
    ]
}

class Banner extends Component {
    render() {
        return (
            <div className="sigma-banner bg-cover bg-center" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/images/intro_bg.jpg)" }}>
                <Slider {...settings} className="sigma_banner-slider">
                    {/* slider-item */}
                    {bannerpost.map((item, i) => (
                        <div key={i}>
                            <div className="sigma_banner-slider-inner">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <div className="intro_text text-center">
                                                <h5>{item.subtitle}</h5>
                                                <h1>{item.title}</h1>
                                                <Link to="/shop-details/1" className="btn">Order Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

export default Banner;