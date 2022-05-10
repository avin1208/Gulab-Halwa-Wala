import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getBlog, getAuthor, getTags } from '../../../helper/bloghelper';
import { getSocialShare } from '../../../helper/helper';
import Sidebar from '../../layouts/Blogsidebar';

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
        const blogId = this.props.blogId;
        const item = getBlog(blogId);
        return (
            <div className="section-padding pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="post_content">
                                <div className="post_date"><Link to={"/blog-details/" + item.id}><i className="fa fa-calendar" /> {item.postdate}</Link></div>
                                <h4>{item.title}</h4>
                                <div dangerouslySetInnerHTML={{ __html: item.htmldesc }} />
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="post_tags">
                                            <h6>Releted Tags</h6>
                                            {getTags(item.tags).map((tag, i) => (
                                                <Link to={"/blog/tag/" + tag.id} key={i}>{tag.title}</Link>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="post_share">
                                            <h6>Social Share</h6>
                                            {getSocialShare(item.title).map((social, i) => (
                                                <Link to="#" key={i} onClick={(e) => this.openSocialPopup(social, i)}>
                                                    <i className={social.iconClass} />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* Comments */}
                                <div id="comments">
                                    <div className="all_comments">
                                        <h4>{item.reviews.length} Comments</h4>
                                        <ul className="commentlist">
                                            {item.reviews.map((review, i) => (
                                                <li className="comment" key={i}>
                                                    <div className="comment the-comment">
                                                        {getAuthor(review.user).map((user, i) => (
                                                            <div className="comment-avatar" key={i}>
                                                                <img alt={user.name} src={process.env.PUBLIC_URL + "/" + user.image} className="avatar" />
                                                            </div>
                                                        ))}
                                                        <div className="comment-content">
                                                            <div className="comment-meta">
                                                                <span className="comment-time"><span> {review.commentdate}</span></span>
                                                                {getAuthor(review.user).map((user, i) => (
                                                                    <span key={i} className="comment-author">
                                                                        <Link to={"/team-details/" + user.id} className="url">{user.name}</Link>
                                                                    </span>
                                                                ))}
                                                            </div>
                                                            <div className="text">
                                                                <div className="comment-text">
                                                                    <p>{review.comment}</p>
                                                                    <span className="reply"> <Link rel="nofollow" className="comment-reply-link" to="#"><i className="fa fa-reply" /> Reply</Link> </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* /all-comment */}
                                    {/* comment-form*/}
                                    <div id="respond" className="comment-respond">
                                        <h4>Post Comment</h4>
                                        <form id="commentform" className="comment-form">
                                            <div className="form-group">
                                                <div className="msg_input">
                                                    <textarea name="comment" cols={45} rows={3} className="form-control" placeholder="Type your comments...." />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="name_input">
                                                    <input type="email" className="form-control" placeholder="Type name email...." />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="email_input">
                                                    <input type="email" className="form-control" placeholder="Type your email...." />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="web_input">
                                                    <input type="text" className="form-control" placeholder="Type your website...." />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <button className="btn" type="submit">Post comment</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Sidebar */}
                        <aside className="col-md-4">
                            <Sidebar />
                        </aside>
                        {/* /Sidebar */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;