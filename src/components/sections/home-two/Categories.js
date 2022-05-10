import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import category from '../../../data/shop/category.json';

const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
            }
        },
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
class Categories extends Component {
    render() {
        return (
            <div className="section-padding-2">
                <div className="container-fluid">
                    <Slider {...settings} className="sigma_category-slider">
                        {category.map((item, i) => (
                            <div key={i} className="sigma_category-item my-style">
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

export default Categories;