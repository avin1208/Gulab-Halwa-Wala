import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import blogpost from '../../../data/blog/blog.json';
import { getCategories } from '../../../helper/bloghelper';

class Blogpost extends Component {
    render() {
        return (
            <div className="section-padding-2 pt-0">
                <div className="container">
                    <div className="section-header text-center">
                        <h5>Recent news</h5>
                        <div className="heading_arrow">
                            <span className="dots_div" />
                            <span className="s" />
                            <span className="dots_div" />
                        </div>
                        <h2>Our Blog</h2>
                    </div>
                    <div className="row">
                        {blogpost.slice(0, 3).map((item, i) => (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <div className="post_wrap style-2">
                                    <div className="post_img">
                                        <Link to={"/blog-details/" + item.id}>
                                            <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                                        </Link>
                                    </div>
                                    <div className="post_info">
                                        <div className="post_date"><Link to={"/blog-details/" + item.id}><i className="fa fa-calendar" /> {item.postdate}</Link></div>
                                        <h5><Link to={"/blog-details/" + item.id}>{item.title}</Link></h5>
                                        <p>{item.shortdesc.slice(0, 60)}...</p>
                                        <div className="post_categorys">
                                            {getCategories(item.category).slice(0, 2).map((cat, i) => (
                                                <Link to={"/blog/cat/" + cat.id} key={i}>{cat.title}</Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Blogpost;