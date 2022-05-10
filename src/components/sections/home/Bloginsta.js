
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import instagram from '../../../data/instagram.json';

class Bloginsta extends Component {
    render() {
        return (
            <div className="insta style-2">
                <span className="insta-text">Instagram @Template</span>
                <div className="row no-gutters">
                    {instagram.slice(0, 6).map((item, i) => (
                        <div key={i} className="col-lg-2 col-md-4 col-sm-4 col-6">
                            <Link to="#" className="ct-ig-item">
                                <img src={process.env.PUBLIC_URL + "/" + item.image} alt="ig" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Bloginsta;