import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Recentslider from './Recentslider';
import Shopcategory from './Shopcategory';
import Shopgallery from './Shopgallery';
import Toppicks from './Toppicks';
import Cta from '../../layouts/Cta';
import Bloginsta from './Bloginsta';
import Hotproducts from './Hotproducts';
import Sponsors from '../../layouts/Sponsors';
import Shopblock from './Shopblock';
import Filterproducts from './Filterproducts';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Hotproducts/>
                <Sponsors/>
                <Toppicks/>
                <Shopcategory/>
                <Recentslider/>
                <Shopblock/>
                <Shopgallery/>
                <Filterproducts/>
                <Cta/>
                <Bloginsta/>
            </Fragment>
        );
    }
}

export default Content;