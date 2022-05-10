import React, { Component, Fragment } from 'react';
import Ctatwo from '../../layouts/Ctatwo';
import team from '../../../data/author.json';
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: team,
            activePage: 1,
            itemPerpage: 6
        }
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div className="col-lg-4 col-sm-6" key={i}>
                <div className="team_wp">
                    <div className="team_img">
                        <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.name} />
                        <div className="hover_wp">
                            <ul>
                                {item.social.map((social, i) => (
                                    <li key={i}>
                                        <Link to={social.url}><i className={social.icon} /></Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <h6><Link to={"/team-details/" + item.id}>{item.name}</Link></h6>
                    <p className="member_post">{item.designation}</p>
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
                <Ctatwo />
            </Fragment>
        );
    }
}

export default Content;