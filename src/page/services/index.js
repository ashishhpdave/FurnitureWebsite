import Header from "../../components/comman/header"
import Testimonial from "../../components/comman/testimonial"
import Hero from "../../components/home/hero"
import Footer from "../../components/comman/footer"
import ProductSection from "../../components/comman/product-section"
import ServiceCard from "../../components/service/card"

function Service() {
    return (
        <>
            <header>
                <Header page="service" />
            </header>
            <Hero title="Service" />

            {/* service card  */}
            <ServiceCard />


            {/* Product Section */}
            <ProductSection />

            {/* testimonial area  */}
            <Testimonial />

            {/* footer  */}
            <Footer />
        </>
    )
}
export default Service