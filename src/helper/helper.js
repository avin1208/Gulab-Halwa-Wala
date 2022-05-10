function Rating(rating) {
    let stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<i className="fa fa-star" key={i}></i>);
    }
    if (rating && rating > 0) {
        for (let i = 0; i <= rating - 1; i++) {
            stars[i] = <i className="fa fa-star active" key={i}></i>;
        }
    }
    return stars;
};
// Social Share
const pageUrl = window.location.href;
function getSocialShare(title) {
    var socialIcons = [
        {
            title: "facebook",
            iconClass: "fa fa-facebook-f",
            link: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(pageUrl) + ""
        },
        {
            title: "twitter",
            iconClass: "fa fa-twitter",
            link: "http://twitter.com/intent/tweet?text=" + encodeURIComponent(title) + "&" + encodeURIComponent(pageUrl) + ""
        },
        {
            title: "linkedin",
            iconClass: "fa fa-linkedin",
            link: "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(pageUrl) + "&title=" + encodeURIComponent(title) + ""
        },
        {
            title: "pinterest",
            iconClass: "fa fa-pinterest-p",
            link: "http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(pageUrl) + ""
        }
    ];
    return socialIcons;
}
export { Rating, getSocialShare };