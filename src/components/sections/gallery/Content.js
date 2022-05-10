import React, { Component, Fragment } from 'react';
import Sponsors from '../../layouts/Sponsors';
import galleryblock from '../../../data/gallery/gallery.json';
import gallerycategory from '../../../data/gallery/category.json';
import Masonry from 'react-masonry-component';
import { Link } from 'react-router-dom';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredProducts: galleryblock,
            activeItem: -1
        };
    }
    handleClick = id => {
        let filteredProducts = [];
        if (id === -1) {
            filteredProducts = galleryblock;
        } else {
            filteredProducts = galleryblock.filter(
                (product) => product.category.includes(id)
            );
        }
        this.setState({ filteredProducts, activeItem: id });
    };
    render() {
        const imagesLoadedOptions = {
            itemSelector: '.img-box',
            percentPosition: true
        };
        const renderAll = this.state.filteredProducts.map((item, i) => (
            <div key={i} className="img-box col-md-6">
                <img src={process.env.PUBLIC_URL + "/" + item.image} alt="img" />
            </div>
        ));
        return (
            <Fragment>
                <div className="section-padding">
                    <div className="container">
                        <div className="galleryFilter">
                            <Link to="#" className={this.state.activeItem === -1 ? 'current' : ''} onClick={this.handleClick.bind(this, -1)}>All</Link>
                            {gallerycategory.map((item, i) => (
                                <Link to="#" key={i} className={this.state.activeItem === parseInt(item.id) ? 'current' : ''} onClick={this.handleClick.bind(this, item.id)}>{item.title}</Link>
                            ))}
                        </div>
                        <Masonry className="galleryContainer row" options={imagesLoadedOptions}>
                            {renderAll}
                        </Masonry>
                    </div>
                </div>
                <Sponsors />
            </Fragment>
        );
    }
}

export default Content;