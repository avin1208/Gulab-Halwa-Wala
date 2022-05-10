import React, { Component, Fragment } from 'react';
import Sponsors from '../../layouts/Sponsors';
import portfolio from '../../../data/portfolio/portfolio.json';
import { getCategories, getFilteredPosts } from '../../../helper/portfoliohelper';
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
        var client = this.props.clientId ? this.props.clientId : '';
        var filteredItems = getFilteredPosts(portfolio, { cat, tag, client });
        return filteredItems;
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div className="col-md-6" key={i}>
                <div className="portfolio_wp">
                    <div className="portfolio_img">
                        <Link to={"/portfolio-details/" + item.id}>
                            <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                        </Link>
                    </div>
                    <div className="portfolio_info">
                        <div className="portfolio_category">
                            {getCategories(item.category).map((cat, i) => (
                                <Link to={"/portfolio/cat/" + cat.id} key={i}>{cat.title}</Link>
                            ))}
                        </div>
                        <h4><Link to={"/portfolio-details/" + item.id}>{item.title}</Link></h4>
                        <Link to={"/portfolio-details/" + item.id} className="move_btn"><i className="fa fa-long-arrow-right" /></Link>
                    </div>
                </div>
            </div>
        });
        return (
            <Fragment>
                <div className="section-padding">
                    <div className="container">
                        <div className="row">
                            {paginationData}
                        </div>
                        {/* Pagination Start */}
                        <div className="pagination_wrap mt-4">
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
                </div>
                <Sponsors />
            </Fragment>
        );
    }
}

export default Content;