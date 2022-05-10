import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import category from '../../../data/shop/category.json';

const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass:"d-flex slick-dots",
    autoplay: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
}
class Shopcategory extends Component {
    render() {
        return (
            <div className="section-padding-2 pt-0">
                <div className="container">
                    <Slider {...settings} className="sigma_category-slider-2">
                        {category.map((item, i) => (
                            <div key={i} className="sigma_category-item">
                                <div className="sigma_category">
                                    <Link to={"/shop/cat/" + item.id}>
                                        <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} />
                                    </Link>
                                    <div className="sigma_category-content">
                                        <span>{item.title}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Shopcategory;