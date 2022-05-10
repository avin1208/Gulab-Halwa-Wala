import React, { Component } from 'react';
import instagram from '../../data/instagram.json';
import { recentPost } from '../../helper/shophelper';
import category from '../../data/shop/category.json';
import tags from '../../data/shop/tag.json';
import { Link, withRouter } from 'react-router-dom';
import IonRangeSlider from 'react-ion-slider'

class Shopsidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            priceFilter: [1, 1000],
            minPrice: 1,
            maxPrice: 0,
        };
    }
    // Price filter
    onPriceChange(event) {
        this.setState({
            minPrice: event.from,
            maxPrice: event.to
        })
        if (this.state.maxPrice !== 0 && this.state.minPrice !== 0) {
            this.props.history.push(`/shop/minPrice=${this.state.minPrice}&maxPrice=${this.state.maxPrice}`);
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
            this.props.history.push("/shop/search/" + this.state.searchText);
        }
    }
    render() {
        return (
            <div className="sidebar_wrap p-0">
                <div className="sidebar_widget search_widget">
                    <div className="widget_title">
                        <h4>Search</h4>
                    </div>
                    <form onSubmit={this.handleSubmit.bind(this)} method="Get">
                        <input type="text" className="form-control" placeholder="Search your keyword..." name="searchText" value={this.state.searchText} onChange={this.onChange.bind(this)} required />
                        <button type="submit" className="search_btn"><i className="fa fa-search" /></button>
                    </form>
                </div>
                <div className="sidebar_widget popular_widget">
                    <div className="widget_title">
                        <h4>Recent Products</h4>
                    </div>
                    <ul>
                        {recentPost().map((item, i) => (
                            <li key={i}>
                                <div className="post_thumb">
                                    <Link to={"/shop-details/" + item.id}>
                                        <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                                    </Link>
                                </div>
                                <h6><Link to={"/shop-details/" + item.id}>{item.title}</Link></h6>
                                <div className="sigma_product-price">
                                    {
                                        item.discount > 0 || item.discount !== '' ? <span>${new Intl.NumberFormat().format((item.price * (100 - item.discount) / 100).toFixed(2))}</span> : ''
                                    }
                                    <span>${new Intl.NumberFormat().format((item.price).toFixed(2))}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sidebar_widget">
                    <div className="widget_title">
                        <h4>Price</h4>
                    </div>
                    <IonRangeSlider type="double" skin="round" hide_min_max={true} min={1} max={1000} from={this.state.priceFilter[0]} to={this.state.priceFilter[1]} grid={true} prefix="$" onChange={this.onPriceChange.bind(this)} />
                </div>
                <div className="sidebar_widget categories_widget">
                    <div className="widget_title">
                        <h4>Categories</h4>
                    </div>
                    <ul>
                        {category.map((item, i) => (
                            <li key={i}>
                                <Link to={"/shop/cat/" + item.id}>{item.title}<span>{item.count}</span></Link>
                            </li>
                        ))}
                    </ul>
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
                <div className="sidebar_widget">
                    <div className="widget_title">
                        <h4>Tags</h4>
                    </div>
                    <div className="tag_cloud">
                        {tags.map((item, i) => (
                            <Link to={"/shop/tag/" + item.id} key={i}>{item.title}</Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Shopsidebar);