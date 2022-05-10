import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Breadcrumb from '../layouts/Breadcrumb';
import Content from '../sections/team/Content';

const pagelocation = "Team";

class Team extends Component {
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
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Team;