import React from 'react';
import Popuphelper from '../../../helper/popuphelper'

class Videobox extends Popuphelper {
    render() {
        return (
            <div className="intro_video section-padding pb-0">
                <div className="container">
                    <div className="section-header text-center">
                        <h5>Our Video</h5>
                        <div className="heading_arrow">
                            <span className="dots_div" />
                            <span className="s" />
                            <span className="dots_div" />
                        </div>
                        <h2>Recommand For You</h2>
                    </div>
                    {/* Video */}
                    <div className="video_wrap">
                        <img src={process.env.PUBLIC_URL + "/assets/images/video_cover.jpg"} alt="img" />
                        <a className="popup-youtube sigma_video-btn" rel={"external"} href={"https://www.youtube.com/watch?v=KH1pcNUTa6U"}><i className="fa fa-play" /></a>
                    </div>
                    {/* /Video */}
                </div>
            </div>
        );
    }
}

export default Videobox;