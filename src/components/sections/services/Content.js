import React, { Component, Fragment } from 'react';
import Sponsors from '../../layouts/Sponsors';
import services from '../../../data/services.json';
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: services,
            activePage: 1,
            itemPerpage: 4
        }
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div className="col-md-6" key={i}>
                <div className="service_box">
                    <div className="icon_wp">
                        <img src={process.env.PUBLIC_URL + "/" + item.icon} alt={item.title} />
                    </div>
                    <h3><Link to="/service-details">{item.title}</Link></h3>
                    <p>{item.text}</p>
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