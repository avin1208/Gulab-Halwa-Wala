import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Infotext extends Component {
    render() {
        return (
            <div className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about_img dots_bg">
                                <img src={process.env.PUBLIC_URL + "/assets/images/about-img.jpg"} alt="img" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about_company">
                                <h6 className="sub-heading">TRUSTED BY MILLIONS OF CONSUMERS.</h6>
                                <h3>A honey bottle that can speak thousand words.</h3>
                                <p>Honey is a supercooled liquid when stored below its melting point, as is normal. At very low temperatures, honey does not freeze solid; rather its viscosity increases. Like most viscous liquids, the honey becomes thick and sluggish with decreasing temperature.</p>
                                <p>The viscosity of honey is affected greatly by both temperature and water content. The higher the water percentage, the more easily honey flows. Above its melting point, however, water has little effect on viscosity. Aside from water content.</p>
                                <Link to="/about" className="btn">Read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Infotext;