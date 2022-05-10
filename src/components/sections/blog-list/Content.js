import React, { Component } from 'react';
import blogpost from '../../../data/blog/blog.json';
import { getCategories } from '../../../helper/bloghelper';
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import Sidebar from '../../layouts/Blogsidebar';
import Slider from 'react-slick';

const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: false
}

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: blogpost,
            activePage: 1,
            itemPerpage: 2
        }
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div className="post_wrap" key={i}>
                {/* Standard */}
                {item.format === 'standard' || item.format === '' ?
                    <div className="post_img">
                        <Link to={"/blog-details/" + item.id}>
                            <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                        </Link>
                    </div>
                    : ''}
                {/* Video */}
                {item.format === 'video' && item.video !== '' ?
                    <div className="post_img post-format-video">
                        <Link to={"/blog-details/" + item.id}>
                            <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                        </Link>
                        <a className="popup-youtube sigma_video-btn" rel={"external"} href={item.video}><i className="fa fa-play" /></a>
                    </div>
                    : ''}
                {/* Gallery */}
                {item.format === 'gallery' ?
                    <Slider {...settings} className="post_img post-img-slider post-format-gallery">
                        {item.image.map((image, i) => (
                            <img key={i} src={process.env.PUBLIC_URL + "/" + image} alt={item.title} />
                        ))}
                    </Slider>
                    : ''}
                {/* Quote */}
                {item.format === 'quote' && item.quote !== '' && item.quoteauthor !== '' ?
                    <div className="post_wrap post-format-quote">
                        <blockquote>
                            <p>{item.quote}</p>
                            <div className="quote_owner">- {item.quoteauthor}</div>
                        </blockquote>
                    </div>
                    : ''}
                {/* Audio */}
                {item.format === 'audio' && item.audio !== '' ?
                    <div className="post_img m-0 post-format-audio">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src={item.audio} title={item.title} />
                        </div>
                    </div>
                    : ''}
                {/* Link */}
                {item.format === 'link' && item.link !== '' ?
                    <div className="post_wrap post-format-link">
                        <div className="post_info">
                            <p>{item.title}</p>
                            <div className="post_meta">
                                <a rel={"external"} href={item.link}>
                                    <i className="fa fa-link" />
                                    {item.link}
                                </a>
                            </div>
                        </div>
                    </div>
                    : ''}
                <div className="post_info">
                    <div className="post_date">
                        <Link to={"/blog-details/" + item.id}>
                            <i className="fa fa-calendar" />
                            {item.postdate}
                        </Link>
                    </div>
                    <h5><Link to={"/blog-details/" + item.id}>{item.title}</Link></h5>
                    <p>{item.shortdesc}...</p>
                    <div className="post_categorys">
                        {getCategories(item.category).slice(0, 2).map((cat, i) => (
                            <Link to={"/blog/cat/" + cat.id} key={i}>{cat.title}</Link>
                        ))}
                    </div>
                </div>
            </div>
        });
        return (
            <div className="section-padding pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {paginationData}
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
                        </div>
                        {/* Sidebar */}
                        <aside className="col-lg-4">
                            <Sidebar />
                        </aside>
                        {/* /Sidebar */}
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;