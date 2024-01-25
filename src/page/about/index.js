import Choose from "../../components/comman/choose"
import Header from "../../components/comman/header"
import Help from "../../components/comman/help"
import Popular from "../../components/comman/popular"
import ProductSection from "../../components/comman/product-section"
import Testimonial from "../../components/comman/testimonial"
import Hero from "../../components/home/hero"
import Blog from "../../components/comman/blog"
import Footer from "../../components/comman/footer"
import Team from "../../components/about/Team"

function About() {
    return (
        <>
            <header>
                <Header page="about" />
            </header>
            <Hero title="About Us" />


            {/* why choose us  */}
            <Choose />

            {/* our Team  */}
            <Team />

            {/* testimonial area  */}
            <Testimonial />

            {/* footer  */}
            <Footer />
        </>
    )
}
export default About