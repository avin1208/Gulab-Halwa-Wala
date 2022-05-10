import React, { Component } from 'react';
import testimonials from '../../../data/testimonial.json';
import author from '../../../data/author.json';
import { Rating } from '../../../helper/helper';
import Slider from 'react-slick';

const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: "d-flex slick-dots",
    autoplay: false
}
function getAuthor(items) {
    var elems = author.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
class Testimonials extends Component {
    render() {
        return (
            <div className="section-padding gray_bg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="about_company p-0">
                                <h6 className="sub-heading">Happy Clients</h6>
                                <h3>Client Say's About Our Product</h3>
                                <p>To safely collect honey from a hive, beekeepers typically pacify the bees using a bee smoker. The smoke triggers a feeding instinct (an attempt to save the resources of the hive from a possible fire), making them less aggressive, and obscures the pheromones the bees use to communicate. The honeycomb is removed from the hive and the honey may be extracted from it either by crushing or by using a honey extractor. The honey is then usually filtered to remove beeswax and other debris.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Slider {...settings} className="sigma_testimonial-slider">
                                {testimonials.map((item, i) => (
                                    <div key={i}>
                                        <div className="item">
                                            <div className="testimonial_box">
                                                <div className="stars">
                                                    {Rating(item.rating)}
                                                </div>
                                                <p>{item.comment} </p>
                                                {getAuthor(item.user).map((author, i) => (
                                                    <div className="testimonial_author" key={i}>
                                                        <img src={process.env.PUBLIC_URL + "/" + author.image} alt={author.name} />
                                                        <h5>{author.name}</h5>
                                                        <p>{author.designation}</p>
                                                    </div>
                                                ))}
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

export default Testimonials;