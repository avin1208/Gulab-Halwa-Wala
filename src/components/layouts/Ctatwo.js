import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Ctatwo extends Component {
    render() {
        return (
            <div className="quick_start section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <h5>Take Action</h5>
                            <h2>Are You Ready To Work Together</h2>
                        </div>
                        <div className="col-lg-3">
                            <Link to="/contact" className="btn btn-lg">Drop us a line</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ctatwo;