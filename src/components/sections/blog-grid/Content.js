import React, { Component } from 'react';
import blogpost from '../../../data/blog/blog.json';
import { getCategories, getFilteredPosts } from '../../../helper/bloghelper';
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.getPosts(),
            activePage: 1,
            itemPerpage: 6
        }
    }
    getPosts() {
        var cat = this.props.catId ? this.props.catId : '';
        var tag = this.props.tagId ? this.props.tagId : '';
        var searchQuery = this.props.query ? this.props.query : '';
        var filteredItems = getFilteredPosts(blogpost, { cat, tag, searchQuery });
        return filteredItems;
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div className="col-lg-4 col-md-6" key={i}>
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
        });
        return (
            <div className="section-padding pb-0">
                <div className="container">
                    <div className="row">
                        {paginationData}
                    </div>
                </div>
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
        );
    }
}

export default Content;