import Footer from "../../components/comman/footer"
import Header from "../../components/comman/header"
import Hero from "../../components/home/hero"
import LoginSignupForm from "../../components/signup&login/login"
import FromSignup from "../../components/signup&login/script"

    


function Signup_loginFrom(){
    return(
        <>
            <header>
                <Header page="login&signup" />
            </header>
            <Hero title="Login & Signup" />
            <LoginSignupForm />
            {/* <FromSignup /> */}
            <Footer />

        </>
    )
}

export default Signup_loginFrom