import './css/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/home'
import Shop from './page/shop'
import About from './page/about'
import Service from './page/services'
import BlogPage from './page/blog'
import Contact from './page/contact'
import Cart from './page/cart'
import Checkout from './page/checkout'
import ErrorPage from './page/404'
import Signup_loginFrom from './page/Login&signup/login'
function Root() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<ErrorPage />} />
                <Route path='/' element={<Home />} />
                <Route path='/Shop' element={<Shop />} />
                <Route path='/about-us' element={<About />} />
                <Route path='/service' element={<Service />} />
                <Route path='/blog' element={<BlogPage />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login&signup'element={<Signup_loginFrom/>} />
                <Route path='/add-to-cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Root