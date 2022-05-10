import React from 'react';
import counter from '../../../data/counter.json';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Counter(props) {
    const [focus, setFocus] = React.useState(false);
    return (
        <div className="fun_facts section-padding">
            <div className="container">
                <div className="section-header full-wd text-center">
                    <h5>Fun facts</h5>
                    <div className="heading_arrow">
                        <span className="dots_div" />
                        <span className="s" />
                        <span className="dots_div" />
                    </div>
                    <h2>Our Glorious Achievements</h2>
                </div>
                <div className="row">
                    {counter.map((item, i) => (
                        <div className="col-lg-3 col-sm-6" key={i}>
                            <div className="facts_wrap">
                                <i className={item.icon} />
                                <CountUp start={focus ? 0 : null} end={item.value} duration={5} redraw={true}>
                                    {({ countUpRef }) => (
                                        <VisibilitySensor
                                            onChange={isVisible => {
                                                if (isVisible) {
                                                    setFocus(true);
                                                }
                                            }}
                                        >
                                            <span className="counter" ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Counter;