import React, { Component, Fragment } from 'react';
import Sponsors from '../../layouts/Sponsors';
import faqs from '../../../data/faqs.json';
import { withRouter } from 'react-router-dom';

function getFilteredPosts(posts, filter = { searchQuery: '' }) {
    var searchFilter = filter.searchQuery !== undefined && filter.searchQuery !== null && filter.searchQuery !== '';
    if (searchFilter) {
        posts = posts.filter(post => {
            return (post.title !== undefined && post.title !== null) && post.title.toLowerCase().includes(filter.searchQuery.toLowerCase())
        })
    }
    return posts;
}
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.getPosts(),
            searchText: ''
        }
    }
    // Search Filter
    onChange(event) {
        this.setState({ searchText: event.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        //const { history } = this.props;
        if (this.state.searchText === "") {
            return;
        } else {
            this.props.history.push("/faqs/search/" + this.state.searchText);
        }
    }
    getPosts() {
        var searchQuery = this.props.query ? this.props.query : '';
        var filteredItems = getFilteredPosts(faqs, {searchQuery });
        return filteredItems;
    }
    render() {
        return (
            <Fragment>
                <div className="section-padding">
                    <div className="container">
                        <div className="faq_search">
                            <form onSubmit={this.handleSubmit.bind(this)} method="Get">
                                <input type="text" placeholder="Search from here....." className="form-control" name="searchText" value={this.state.searchText} onChange={this.onChange.bind(this)} required />
                                <button type="submit"><i className="fa fa-search" /> Search</button>
                            </form>
                        </div>
                        <div className="row">
                            {this.state.data.map((item, i) => (
                                <div key={i} className="col-lg-4 col-md-6">
                                    <div className="faq_box">
                                        <span className="faq_number">{1 + i}</span>
                                        <h6>{item.title}</h6>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Sponsors />
            </Fragment>
        );
    }
}
export default withRouter(Content);
