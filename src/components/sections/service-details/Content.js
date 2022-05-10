import React, { Component, Fragment } from 'react';
import Infotext from './Infotext';
import Serviceblock from './Serviceblock';
import Videobox from './Videobox';
import Ctatwo from '../../layouts/Ctatwo';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Infotext />
                <Videobox />
                <Serviceblock />
                <Ctatwo />
            </Fragment>
        );
    }
}

export default Content;