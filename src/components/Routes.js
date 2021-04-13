//products routes
import Listing from "../components/views/products/Listing/Listing";
import Detail from "../components/views/products/Detail/Detail";

//pages rotues
import About from "../components/views/pages/About/About";

const routes = [
    { path: '/', exact: true, name: 'Listing', component: Listing},
    { path: '/products/{id}/detail',  exact: true, name: 'Product Detail', component: Detail },
    { path: '/about',  exact: true, name: 'About Us', component: About }
];

export default routes;