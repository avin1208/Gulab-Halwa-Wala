import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Breadcrumb from '../layouts/Breadcrumb';
import Content from '../sections/portfolio-details/Content';

const pagelocation = "Portfolio Details";

class Portfoliodetails extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Beaz Honey Shop - React Template | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags> 
                <Header/>
                <Breadcrumb breadcrumb={{ pagename: pagelocation }} />
                <Content portfolioId={this.props.match.params.id}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Portfoliodetails;