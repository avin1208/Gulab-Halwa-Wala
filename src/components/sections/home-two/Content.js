import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Sponsors from '../../layouts/Sponsors';
import Cta from '../../layouts/Cta';
import Trendingproducts from './Trendingproducts';
import Categories from './Categories';
import Featuredproducts from './Featuredproducts';
import Blogpost from './Blogpost';
import Shopadv from './Shopadv';
import Fresharrivals from './Fresharrivals';
import Shopblock from '../home/Shopblock';
import Bloginsta from './Bloginsta';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Shopblock />
                <Shopadv />
                <Trendingproducts />
                <Cta />
                <Sponsors />
                <Categories />
                <Featuredproducts />
                <Fresharrivals />
                <Blogpost />
                <Bloginsta />
            </Fragment>
        );
    }
}

export default Content;