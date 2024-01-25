import Header from "../../components/comman/header"
import Hero from "../../components/home/hero"
import Footer from "../../components/comman/footer"
import Form from "../../components/contact/form"

function Contact() {
    return (
        <>
            <header>
                <Header page="Concat" />
            </header>
            <Hero title="Concat US" />
            <Form />
            {/* footer  */}
            <Footer />
        </>
    )
}
export default Contact