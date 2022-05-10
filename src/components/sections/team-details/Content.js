import React, { Component, Fragment } from 'react';
import Serviceblock from '../service-details/Serviceblock';
import Videobox from '../service-details/Videobox';
import Ctatwo from '../../layouts/Ctatwo';
import { getTeam } from '../../../helper/teamhelper';
import { Link } from 'react-router-dom';

class Content extends Component {
    render() {
        const teamId = this.props.teamId;
        const item = getTeam(teamId);
        return (
            <Fragment>
                <div className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="about_img dots_bg h-100">
                                    <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.name} className="h-100" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about_company about-team">
                                    <h3>{item.name}</h3>
                                    <h6 className="sub-heading">{item.designation}</h6>
                                    <p className="mb-0">{item.text}</p>
                                    <ul className="team-descr">
                                        {item.contactinfo.map((info, i) => (
                                            <li key={i}>
                                                <i className={info.icon} />
                                                <span className="descr-title">{info.title} :</span>
                                                {info.link === true ? <a rel={"external"} href={info.text}>{info.text}</a> : <span>{info.text}</span>}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="follow_us">
                                        <ul>
                                            {item.social.map((social, i) => (
                                                <li key={i}>
                                                    <Link to={social.url}><i className={social.icon} /></Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Videobox />
                <Serviceblock />
                <Ctatwo />
            </Fragment>
        );
    }
}

export default Content;