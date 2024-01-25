import Header from "../../components/comman/header"
import Testimonial from "../../components/comman/testimonial"
import Hero from "../../components/home/hero"
import BlogCard from '../../components/blog/blogCard'
import Footer from "../../components/comman/footer"

function BlogPage() {
    return (
        <>
            <header>
                <Header page="blog" />
            </header>
            <Hero title="Blog" />

            <BlogCard />

            {/* testimonial area  */}
            <Testimonial />

            {/* footer  */}
            <Footer />
        </>
    )
}
export default BlogPage