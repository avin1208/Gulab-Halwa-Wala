import React, { Component } from 'react';
import { Modal } from 'react-bootstrap'

class Newsletter extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: true,
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose() {
        this.setState({ show: false });
    }
    handleShow() {
        this.setState({ show: true });
    }
    render() {
        return (
            <Modal show={this.state.show} className="andro_newsletter-popup-modal" aria-labelledby="contained-modal-title-vcenter" onHide={this.handleClose} centered>
                <Modal.Header>
                    <img src={process.env.PUBLIC_URL + "/assets/images/newsletter.jpg"} alt="newsletter" />
                    <div className="sigma_close newsletter-popup-trigger" onClick={this.handleClose}>
                        <span />
                        <span />
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="andro_newsletter-popup-text-wrapper">
                        <h3>Join Our Newsletter</h3>
                        <p>Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere.</p>
                    </div>
                    <form method="post" className="text-center">
                        <div className="form-group">
                            <input type="email" placeholder="Email Address" className="form-control" name="newsletter-email" />
                        </div>
                        <button type="submit" className="btn" name="button">Subscribe</button>
                        <span className="newsletter-popup-trigger" onClick={this.handleClose}>No Thanks</span>
                    </form>
                </Modal.Body>
            </Modal>
        );
    }
}

export default Newsletter;