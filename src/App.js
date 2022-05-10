import React, { Suspense, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

// Newsletter
const Newsletter = React.lazy(() => import("./components/layouts/Newsletter"));

// Home
const Home = React.lazy(() => import("./components/pages/Home"));
const Hometwo = React.lazy(() => import("./components/pages/Hometwo"));
// About Us
const About = React.lazy(() => import("./components/pages/About"));
// Portfolio
const Portfolio = React.lazy(() => import("./components/pages/Portfolio"));
const Portfoliodetails = React.lazy(() => import("./components/pages/Portfoliodetails"));
// Services
const Services = React.lazy(() => import("./components/pages/Services"));
const Servicedetails = React.lazy(() => import("./components/pages/Servicedetails"));
// Team
const Team = React.lazy(() => import("./components/pages/Team"));
const Teamdetails = React.lazy(() => import("./components/pages/Teamdetails"));
// FAQ's
const Faqs = React.lazy(() => import("./components/pages/Faqs"));
// Gallery
const Gallery = React.lazy(() => import("./components/pages/Gallery"));
// Contact Us
const Contact = React.lazy(() => import("./components/pages/Contact"));
// Shop
const Shop = React.lazy(() => import("./components/pages/Shop"));
const Shopleft = React.lazy(() => import("./components/pages/Shopleft"));
const Shopright = React.lazy(() => import("./components/pages/Shopright"));
const Shopdetails = React.lazy(() => import("./components/pages/Shopdetails"));
// Cart
const Cart = React.lazy(() => import("./components/pages/Cart"));
// Checkout
const Checkout = React.lazy(() => import("./components/pages/Checkout"));
// Wishlist
const Wishlist = React.lazy(() => import("./components/pages/Wishlist"));
// Blog
const Bloggrid = React.lazy(() => import("./components/pages/Bloggrid"));
const Bloglist = React.lazy(() => import("./components/pages/Bloglist"));
const Blogdetails = React.lazy(() => import("./components/pages/Blogdetails"));


// Scroll to Top
const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children || null
})


function App() {
  return (
    <Router basename={"/templatemonster/react/beaz/"}>
      <Suspense fallback={<div></div>}>
        <ScrollToTop>
          <Newsletter />
          {/* Home */}
          <Route exact path="/" component={Home} />
          <Route exact path="/home-v2" component={Hometwo} />
          {/* About Us */}
          <Route exact path="/about" component={About} />
          {/* Portfolio */}
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/portfolio/cat/:catId" component={props => (<Portfolio {...props} key={window.location.pathname} />)} />
          <Route exact path="/portfolio/tag/:tagId" component={props => (<Portfolio {...props} key={window.location.pathname} />)} />
          <Route exact path="/portfolio/client/:clientId" component={props => (<Portfolio {...props} key={window.location.pathname} />)} />
          <Route exact path="/portfolio-details/:id" component={props => (<Portfoliodetails {...props} key={window.location.pathname} />)} />
          {/* Services */}
          <Route exact path="/services" component={Services} />
          <Route exact path="/service-details" component={Servicedetails} />
          {/* Team */}
          <Route exact path="/team" component={Team} />
          <Route exact path="/team-details/:id" component={props => (<Teamdetails {...props} key={window.location.pathname} />)} />
          {/* FAQ's */}
          <Route exact path="/faqs" component={Faqs} />
          <Route exact path="/faqs/search/:query" component={props => (<Faqs {...props} key={window.location.pathname} />)} />
          {/* Gallery */}
          <Route exact path="/gallery" component={Gallery} />
          {/* Contact Us */}
          <Route exact path="/contact" component={Contact} />
          {/* Shop */}
          <Route exact path="/shop/search/:query" component={props => (<Shop {...props} key={window.location.pathname} />)} />
          <Route exact path="/shop/cat/:catId" component={props => (<Shop {...props} key={window.location.pathname} />)} />
          <Route exact path="/shop/tag/:tagId" component={props => (<Shop {...props} key={window.location.pathname} />)} />
          <Route exact path="/shop/minPrice=:minPrice&maxPrice=:maxPrice" component={props => (<Shop {...props} key={window.location.pathname} />)} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shop-left" component={Shopleft} />
          <Route exact path="/shop-right" component={Shopright} />
          <Route exact path="/shop-details/:id" component={props => (<Shopdetails {...props} key={window.location.pathname} />)} />
          {/* Cart */}
          <Route exact path="/cart" component={Cart} />
          {/* Checkout */}
          <Route exact path="/checkout" component={Checkout} />
          {/* Wishlist */}
          <Route exact path="/wishlist" component={Wishlist} />
          {/* Blog */}
          <Route exact path="/blog-grid" component={Bloggrid} />
          <Route exact path="/blog/search/:query" component={props => (<Bloggrid {...props} key={window.location.pathname} />)} />
          <Route exact path="/blog/cat/:catId" component={props => (<Bloggrid {...props} key={window.location.pathname} />)} />
          <Route exact path="/blog/tag/:tagId" component={props => (<Bloggrid {...props} key={window.location.pathname} />)} />
          <Route exact path="/blog" component={Bloglist} />
          <Route exact path="/blog-details/:id" component={props => (<Blogdetails {...props} key={window.location.pathname} />)} />
        </ScrollToTop>
      </Suspense>
    </Router>
  );
}

export default App;
