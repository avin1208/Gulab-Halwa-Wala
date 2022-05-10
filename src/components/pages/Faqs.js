import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Breadcrumb from '../layouts/Breadcrumb';
import Content from '../sections/faqs/Content';

const pagelocation = "FAQ's";

class Faqs extends Component {
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
                <Header />
                <Breadcrumb breadcrumb={{ pagename: pagelocation }} />
                <Content
                    query={this.props.match.params.query}
                />
                <Footer />
            </Fragment>
        );
    }
}

export default Faqs;