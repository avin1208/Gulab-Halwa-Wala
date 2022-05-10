import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sponsors from '../../data/sponsors.json';

class Sponsors extends Component {
    render() {
        return (
            <div className="sponsors section-padding">
                {sponsors.map((item, i) => (
                    <Link to="#" key={i}>
                        <img src={process.env.PUBLIC_URL + "/" + item.image} alt="img" />
                    </Link>
                ))}
            </div>
        );
    }
}

export default Sponsors;