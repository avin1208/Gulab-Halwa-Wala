import React from 'react';
import Contactform from '../../../helper/contactform';

class Content extends Contactform {
    render() {
        return (
            <div className="section-padding pb-0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="form_wrap">
                                <div className="box_heading">
                                    <h4>Get In Touch</h4>
                                    <div className="heading_arrow">
                                        <span className="dots_div" />
                                        <span className="s" />
                                        <span className="dots_div" />
                                    </div>
                                </div>
                                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" placeholder="Full name" className="form-control" name="name" value={this.state.name} onChange={this.onNameChange.bind(this)} required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" placeholder="Phone Number" className="form-control" name="phone" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="email" placeholder="Email Address" className="form-control" name="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" placeholder="Subject" className="form-control" name="subject" value={this.state.subject} onChange={this.onSubjectChange.bind(this)} required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" rows={3} placeholder="Enter Message" name="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} required />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn">Get Action</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map_wp">
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7060970.521913474!2d-102.60272453381052!3d37.588245893295074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited+States!5e0!3m2!1sen!2sin!4v1495005824042" style={{ border: 0 }} allowFullScreen />
                </div>
            </div>
        );
    }
}

export default Content;