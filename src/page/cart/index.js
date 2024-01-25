import Header from "../../components/comman/header"
import Hero from "../../components/home/hero"
import Footer from "../../components/comman/footer"
import AddToCart from "../../components/add-to-cart/addToCart"

function Cart() {
    return (
        <>
            <header>
                <Header page="cart" />
            </header>
            <Hero title="Add To Cart" />
            <AddToCart />
            {/* footer  */}
            <Footer />
        </>
    )
}
export default Cart