import Choose from "../../components/comman/choose"
import Header from "../../components/comman/header"
import Help from "../../components/comman/help"
import Popular from "../../components/comman/popular"
import ProductSection from "../../components/comman/product-section"
import Testimonial from "../../components/comman/testimonial"
import Hero from "../../components/home/hero"
import Blog from "../../components/comman/blog"
import Footer from "../../components/comman/footer"

function Home() {
    return (
        <>
            <header>
                <Header page="home" />
            </header>
            <Hero title="Modern Interior Design Studio" />

            {/* Product Section */}
            <ProductSection />

            {/* why choose us  */}
            <Choose />

            {/* helo section  */}
            <Help />

            {/* popular product  */}
            <Popular />

            {/* testimonial area  */}
            <Testimonial />

            {/* blog section  */}
            <Blog />

            {/* footer  */}
            <Footer />
        </>
    )
}
export default Home