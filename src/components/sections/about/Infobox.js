import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import infobox from '../../../data/infobox.json';

class Infobox extends Component {
    render() {
        return (
            <div className="section-padding">
                <div className="container">
                    <div className="row">
                        {infobox.map((item, i) => (
                            <div className="col-lg-4" key={i}>
                                <div className="info_box">
                                    <div className="icon">
                                        <img src={process.env.PUBLIC_URL + "/" + item.icon} alt={item.title} />
                                    </div>
                                    <h5>{item.title}</h5>
                                    <p>{item.longtext}</p>
                                    <Link to="/shop" className="round-btn"><i className="fa fa-angle-double-right" /></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Infobox;