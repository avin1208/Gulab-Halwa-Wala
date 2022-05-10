import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumb extends Component {
    render() {
        return (
            <div id="inner_header" className="bg-overlay" data-parallax="scroll" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/images/header_image.jpg)" }}>
                <div className="container">
                    <div className="inner_intro">
                        <h1>{this.props.breadcrumb.pagename}</h1>
                        <nav className="breadcrumb">
                            <ul>
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active">{this.props.breadcrumb.pagename}</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Breadcrumb;