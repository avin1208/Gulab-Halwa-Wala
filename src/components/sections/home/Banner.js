import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import bannerdata from '../../../data/homebanner.json';

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
            <div className="sigma-banner banner-2">
                <Slider {...settings} className="sigma_banner-slider">
                    {/* slider-item */}
                    {bannerdata.map((item, i) => (
                        <div key={i}>
                            <div className="sigma_banner-slider-inner bg-cover bg-center" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.bgimage + ")" }}>
                                <div className="container">
                                    <div className="intro_text style-2 " >
                                        <p>{item.couponcode}</p>
                                        <h1>{item.title}</h1>
                                        <p>{item.text}</p>
                                        <Link to="/shop-left" className="btn">Order Now</Link>
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