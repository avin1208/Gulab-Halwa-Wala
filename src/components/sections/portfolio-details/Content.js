import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import portfolio from '../../../data/portfolio/portfolio.json';
import { getPortfolio, getClient, getTags, postnavigation } from '../../../helper/portfoliohelper';
import { getSocialShare } from '../../../helper/helper';
import clients from '../../../data/author.json';

class Content extends Component {
    constructor(props) {
        super(props);
        this.openSocialPopup = this.openSocialPopup.bind(this);
    }
    // Open window
    openSocialPopup(social) {
        window.open(social.link, "MsgWindow", "width=600,height=600")
        // alert(social.title)
    }
    render() {
        const portfolioId = this.props.portfolioId;
        const item = getPortfolio(portfolioId);
        return (
            <div className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="post_content">
                                <h4>{item.title}</h4>
                                <div dangerouslySetInnerHTML={{ __html: item.htmldesc }} />
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="post_tags pt-0">
                                            <h6>Releted Tags</h6>
                                            {getTags(item.tags).map((tag, i) => (
                                                <Link to={"/portfolio/tag/" + tag.id} key={i}>{tag.title}</Link>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="post_share pt-0">
                                            <h6>Social Share</h6>
                                            {getSocialShare(item.title).map((social, i) => (
                                                <Link to="#" key={i} onClick={(e) => this.openSocialPopup(social, i)}>
                                                    <i className={social.iconClass} />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {item.image.map((image, i) => (
                                        <div className="col-md-4" key={i}>
                                            <Link to="#" className="gallery-thumb dark-overlay">
                                                <img src={process.env.PUBLIC_URL + "/" + image} alt="post" />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                                <div className="sigma_single-pagination">
                                    {postnavigation(portfolio, portfolio.findIndex(item => parseInt(item.id) === parseInt(portfolioId)))}
                                </div>
                            </div>
                        </div>
                        {/* Sidebar */}
                        <aside className="col-lg-4">
                            <div className="sidebar_wrap sidebar-2">
                                <div className="sidebar_widget">
                                    <div className="widget_title">
                                        <h4>Honey Details</h4>
                                    </div>
                                    <div className="sigma_list-item">
                                        <label>Client:</label>
                                        {getClient(item.client).map((client, i) => (
                                            <span key={i} >{client.name}</span>
                                        ))}
                                    </div>
                                    <div className="sigma_list-item">
                                        <label>Location:</label>
                                        <span>{item.location}</span>
                                    </div>
                                    <div className="sigma_list-item">
                                        <label>Honey:</label>
                                        <span>{item.production} </span>
                                    </div>
                                </div>
                                <div className="sidebar_widget categories_widget">
                                    <div className="widget_title">
                                        <h4>Latest Clients</h4>
                                    </div>
                                    <ul>
                                        {clients.map((client, i) => (
                                            <li key={i}>
                                                <Link to={"/portfolio/client/" + client.id}>{client.name}
                                                    <i className="fa fa-chevron-right" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="sidebar_widget p-0">
                                    <blockquote>
                                        <div className="widget_title">
                                            <h4 className="text-white">Request a Quote</h4>
                                        </div>
                                        <p>Honey is a sweet, viscous food substance made by honey bees and some related insects eiusmod tempor incididuntAccording to the Codex Alimentarius of the United Nations.</p>
                                        <Link to="/contact" className="btn btn-sm">Get a Quote</Link>
                                    </blockquote>
                                </div>
                                <div className="sidebar_widget categories_widget">
                                    <div className="widget_title">
                                        <h4>Project assets</h4>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link to="#" className="justify-content-start">
                                                <i className="fa fa-file mr-3" />
                  Download Pdf
                </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="justify-content-start">
                                                <i className="fa fa-file mr-3" />
                  Download Documents
                </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="justify-content-start">
                                                <i className="fa fa-file mr-3" />
                  Download Brochures
                </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                        {/* /Sidebar */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;