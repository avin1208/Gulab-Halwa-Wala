import React, { Component } from 'react';
import instagram from '../../data/instagram.json';
import { getRecentPost } from '../../helper/bloghelper';
import category from '../../data/blog/blogcategory.json';
import tags from '../../data/blog/blogtags.json';
import { Link, withRouter } from 'react-router-dom';

class Blogsidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
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
            this.props.history.push("/blog/search/" + this.state.searchText);
        }
    }
    render() {
        return (
            <div className="sidebar_wrap">
                <div className="sidebar_widget search_widget">
                    <div className="widget_title">
                        <h4>Search</h4>
                    </div>
                    <form onSubmit={this.handleSubmit.bind(this)} method="Get">
                        <input type="text" className="form-control" placeholder="Search your keyword..." name="searchText" value={this.state.searchText} onChange={this.onChange.bind(this)} required />
                        <button type="submit" className="search_btn"><i className="fa fa-search" /></button>
                    </form>
                </div>
                <div className="sidebar_widget instagram_widget">
                    <div className="widget_title">
                        <h4>Instagram</h4>
                    </div>
                    <ul>
                        {instagram.slice(0, 6).map((item, i) => (
                            <li key={i}>
                                <Link to="#">
                                    <img src={process.env.PUBLIC_URL + "/" + item.image} alt="img" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sidebar_widget followus_widget">
                    <div className="widget_title">
                        <h4>Follow Us</h4>
                    </div>
                    <ul>
                        <li><Link to="#"><i className="fa fa-twitter" /></Link></li>
                        <li><Link to="#"><i className="fa fa-pinterest" /></Link></li>
                        <li><Link to="#"><i className="fa fa-facebook" /></Link></li>
                        <li><Link to="#"><i className="fa fa-instagram" /></Link></li>
                        <li><Link to="#"><i className="fa fa-wordpress" /></Link></li>
                    </ul>
                </div>
                <div className="sidebar_widget categories_widget">
                    <div className="widget_title">
                        <h4>Categories</h4>
                    </div>
                    <ul>
                        {category.map((item, i) => (
                            <li key={i}>
                                <Link to={"/blog/cat/" + item.id}>{item.title}<span>{item.count}</span></Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sidebar_widget popular_widget">
                    <div className="widget_title">
                        <h4>Feeds</h4>
                    </div>
                    <ul>
                        {getRecentPost().map((item, i) => (
                            <li key={i}>
                                <div className="post_thumb">
                                    <Link to={"/blog-details/" + item.id}>
                                        <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                                    </Link>
                                </div>
                                <h6><Link to={"/blog-details/" + item.id}>{item.title}</Link></h6>
                                <p><i className="fa fa-calendar" /> {item.postdate}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sidebar_widget">
                    <div className="widget_title">
                        <h4>Tags</h4>
                    </div>
                    <div className="tag_cloud">
                        {tags.map((item, i) => (
                            <Link to={"/blog/tag/" + item.id} key={i}>{item.title}</Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Blogsidebar);