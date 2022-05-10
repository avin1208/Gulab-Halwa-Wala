import React, { Component } from 'react';

class Searchform extends Component {
    render() {
        return (
            <form className="search-form">
                <input type="text" placeholder="Search..." />
                <button type="submit" className="search-btn">
                    <i className="flaticon-search m-0" />
                </button>
            </form>
        );
    }
}

export default Searchform;