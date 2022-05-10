import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Aboutus extends Component {
    render() {
        return (
            <div className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-md-12">
                            <div className="about_img">
                                <img src={process.env.PUBLIC_URL + "/assets/images/about-img2.jpg"} alt="img" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about_company">
                                <h6 className="sub-heading">WELCOME TO OUR HONEY COMPANY</h6>
                                <h3>PROVIDING THE NATURALLY SWEET PRODUCT</h3>
                                <p>Honey is produced by bees collecting nectar and honeydew for use as sugars consumed to support metabolism of muscle activity during foraging or to be stored as a long-term food supply </p>
                                <p>Honey gets its sweetness from the monosaccharides fructose and glucose, and has about the same relative sweetness as sucrose table sugar Fifteen millilitres (1 US tablespoon) of honey provides around 190 kilojoules (46 kilocalories) of food.</p>
                                <Link to="/about" className="btn">Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="space-60" />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about_img">
                                <img src={process.env.PUBLIC_URL + "/assets/images/about-img3.jpg"} alt="img" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about_company">
                                <h6 className="sub-heading">CREATIVITY IS A BEST WEAPON</h6>
                                <h3>NATURAL SKIN CARE FOR FACE AND BODY & SPA</h3>
                                <p>Leaving the hive, a foraging bee collects sugar-rich flower nectar, sucking it through its proboscis and placing it in its proventriculus (honey stomach or crop), which lies just dorsal to its food stomach. The honey stomach holds about 40 mg of nectar, or roughly 50% of the bee's unloaded weight</p>
                                <p>The bees work together as a group with the regurgitation and digestion for as long as 20 minutes, passing the nectar from one bee to the next, until the product reaches the honeycombs in storage quality.</p>
                                <Link to="/about" className="btn">Read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aboutus;