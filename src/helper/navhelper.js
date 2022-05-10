import React, { Component, Fragment } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navmethod: false,
            searchmethod: false,
            sidebarmethod: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.searchToggle = this.searchToggle.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }
    // Navigation
    toggleNav() {
        this.setState({
            navmethod: !this.state.navmethod
        });
    }
    // Search
    searchToggle() {
        this.setState({
            searchmethod: !this.state.searchmethod
        });
    }
    
    // Sidebar
    toggleSidebar() {
        this.setState({
            sidebarmethod: !this.state.sidebarmethod
        });
    }
    // Mobile menu
    getNextSibling = function (elem, selector) {
        // Get the next sibling element
        var sibling = elem.nextElementSibling;
        // If there's no selector, return the first sibling
        if (!selector) return sibling;
        // If the sibling matches our selector, use it
        // If not, jump to the next sibling and continue the loop
        while (sibling) {
            if (sibling.matches(selector)) return sibling;
            sibling = sibling.nextElementSibling
        }
    }

    triggerChild = (e) => {
        let subMenu = '';

        subMenu = (this.getNextSibling(e.target, '.sub-menu') !== undefined) ? this.getNextSibling(e.target, '.sub-menu') : null;

        if (subMenu !== null && subMenu !== undefined && subMenu !== '') {
            subMenu.classList = subMenu.classList.contains('d-block') ? 'sub-menu' : 'sub-menu d-block';
        }
    }
    render() {
        return (
            <Fragment />
        );
    }
}

export default HeaderComponent;