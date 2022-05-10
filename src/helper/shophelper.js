import shopblock from "../data/shop/shop.json";
import category from "../data/shop/category.json";
import tags from "../data/shop/tag.json";
import author from "../data/author.json";

// Product details
function getProduct(id) {
    return shopblock.filter(product => { return product.id === parseInt(id) })[0];
}

// Categroy
function getCategories(items) {
    var elems = category.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
function getTags(items) {
    var elems = tags.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Author
function getAuthor(items) {
    var elems = author.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Featured
function getFeatured() {
    var elems = shopblock.filter((item) => {
        return item.featured === true;
    });
    return elems;
}
// Trending
function getTrending() {
    var elems = shopblock.filter((item) => {
        return item.trending === true;
    });
    return elems;
}
// Count Category
function setCategoriesCount() {
    for (let i = 0; i < category.length; i++) {
        var count = shopblock.filter(product => { return product.category.includes(parseInt(category[i].id)) });
        count = count.length;
        category[i].count = count;
    }
}
setCategoriesCount();
// Recent post
function changeToMonth(month) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
}

function setDemoDate() {
    var today = new Date();
    shopblock.slice(0, 4).map((item) => {
        item.timestamp = today.getTime() - (3 * 24 * 60 * 60 * 1000);
        // Remove this date on your live demo. This is only used for preview purposed. Your date should actually be updated
        // in the blog.json object
        item.postdate = `${today.getDate() - 2} ${changeToMonth(today.getMonth())}, ${today.getFullYear()}`;
        return item;
    });
}
setDemoDate();

function recentPost() {
    var elems = shopblock.filter((item) => {
        return item.timestamp < new Date(item.postdate);
    });
    return elems;
}

// Filter
function getFilteredproducts(products, filter = { cat: '', tag: '', searchQuery: '', priceFilter: [] }) {
    var catgoryFilter = filter.cat !== undefined && filter.cat !== null && filter.cat !== '';
    var tagFilter = filter.tag !== undefined && filter.tag !== null && filter.tag !== '';
    var priceFilterValue = filter.priceFilter[0] !== undefined && filter.priceFilter[1] !== undefined && filter.priceFilter[0] !== null && filter.priceFilter[1] != null && filter.priceFilter[0] !== '' && filter.priceFilter[1] !== '';
    //var authorFilter = filter.author !== undefined && filter.author !== null && filter.author !== '';
    var searchFilter = filter.searchQuery !== undefined && filter.searchQuery !== null && filter.searchQuery !== '';
    // Category filter
    if (catgoryFilter) {
        products = products.filter(product => {
            return (product.category !== undefined && product.category !== null) && product.category.includes(parseInt(filter.cat))
        })
    }
    // Tag filter
    if (tagFilter) {
        products = products.filter(product => {
            return (product.tags !== undefined && product.tags !== null) && product.tags.includes(parseInt(filter.tag))
        })
    }
    // Author filter
    // if (authorFilter) {
    //     products = products.filter(product => {
    //         return (product.author !== undefined && product.author !== null) && product.author.includes(parseInt(filter.author))
    //     })
    // }
    // Search Filter
    if (searchFilter) {
        products = products.filter(product => {
            return (product.title !== undefined && product.title !== null) && product.title.toLowerCase().includes(filter.searchQuery.toLowerCase())
        })
    }
    if (priceFilterValue) {
        products = products.filter(product => {
            return (product.price !== undefined && product.price !== null) && product.price > filter.priceFilter[0] && product.price <= filter.priceFilter[1]
        })
    }
    return products;
}

function handleOutofStock(){
    alert('Product Out of Stock')
}
export { getProduct, getCategories, getTags, getAuthor, getFeatured, getTrending, recentPost, handleOutofStock ,getFilteredproducts };