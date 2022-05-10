import React, { Component, Fragment } from 'react';
import Aboutus from './Aboutus';
import Counter from './Counter';
import Infobox from './Infobox';
import Testimonials from './Testimonials';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Infobox />
                <Counter />
                <Aboutus />
                <Testimonials />
            </Fragment>
        );
    }
}

export default Content;