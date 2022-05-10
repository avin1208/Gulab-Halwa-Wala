import React from 'react-dom';
import { Link } from 'react-router-dom';

import portfolio from "../data/portfolio/portfolio.json";
import portfoliocategory from '../data/portfolio/category.json';
import portfoliotags from '../data/portfolio/tags.json';
import client from '../data/author.json';
// Get Category
function getCategories(items) {
    var elems = portfoliocategory.filter(item => {
        return items.includes(item.id)
    });
    return elems;
}
// Tags
function getTags(items) {
    var elems = portfoliotags.filter(item => {
        return items.includes(item.id)
    });
    return elems;
}

// Client
function getClient(items) {
    var elems = client.filter(item => {
        return items.includes(item.id)
    });
    return elems;
}
// Post details
function getPortfolio(id) {
    return portfolio.filter(post => { return post.id === parseInt(id) })[0];
}
// Pagination
function postnavigation(items, index) {
    var output = [],
        id, item;
    if (items[index - 1] !== undefined && index - 1 !== -1) {
        item = items[index - 1];
        id = item.id;
        // Show the previous button 
        output.push(<div className='sigma_single-pagination-item sigma_single-pagination-prev' key={id}> <Link to={"/portfolio-details/" + parseInt(id)}> <i className='fa fa-arrow-left'/><div className='sigma_single-pagination-content'><h6>{item.title.slice(0, 20)}</h6> <span>Prev Post</span></div> </Link></div>);
    }
    if (items[index + 1] !== undefined && index <= items.length - 1) {
        // Show next button 
        item = items[index + 1];
        id = item.id;
        output.push(<div className='sigma_single-pagination-item sigma_single-pagination-next' key={id}> <Link to={"/portfolio-details/" + parseInt(id)}> <div className='sigma_single-pagination-content'><h6>{item.title.slice(0, 20)}</h6> <span>Next Post</span></div><i className='fa fa-arrow-right'/> </Link></div>);
    }

    return output;
}
// Filter
function getFilteredPosts(posts, filter = { cat: '', tag: '', client: ''}) {
    var catgoryFilter = filter.cat !== undefined && filter.cat !== null && filter.cat !== '';
    var tagFilter = filter.tag !== undefined && filter.tag !== null && filter.tag !== '';
    var clientFilter = filter.client !== undefined && filter.client !== null && filter.client !== '';
    //var searchFilter = filter.searchQuery !== undefined && filter.searchQuery !== null && filter.searchQuery !== '';
    // Category filter
    if (catgoryFilter) {
        posts = posts.filter(post => {
            return (post.category !== undefined && post.category !== null) && post.category.includes(parseInt(filter.cat))
        })
    }
    // Tag filter
    if (tagFilter) {
        posts = posts.filter(post => {
            return (post.tags !== undefined && post.tags !== null) && post.tags.includes(parseInt(filter.tag))
        })
    }
    //Client filter
    if (clientFilter) {
        posts = posts.filter(post => {
            return (post.client !== undefined && post.client !== null) && post.client.includes(parseInt(filter.client))
        })
    }
    // if (searchFilter) {
    //     posts = posts.filter(post => {
    //         return (post.title !== undefined && post.title !== null) && post.title.toLowerCase().includes(filter.searchQuery.toLowerCase())
    //     })
    // }
    return posts;
}
export { getPortfolio, getCategories, getTags, getClient, getFilteredPosts, postnavigation };