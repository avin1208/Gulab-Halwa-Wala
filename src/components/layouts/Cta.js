import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cta extends Component {
    render() {
        return (
            <div className="quick_start section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>Buy Today And Get 20% Off</h2>
                            <p>Honey is a sweet, viscous food substance made by honey bees and some related insects</p>
                            <Link to="/shop" className="btn">Order Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cta;