import Header from "../../components/comman/header"
import Hero from "../../components/home/hero"
import Footer from "../../components/comman/footer"
import CheckoutForm from "../../components/Checkout/form"

function Checkout() {
    return (
        <>
            <header>
                <Header page="cart" />
            </header>
            <Hero title="checkout" />
            <CheckoutForm />
            {/* footer  */}
            <Footer />
        </>
    )
}
export default Checkout