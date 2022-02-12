import Nav from '/components/Nav.jsx'
import Footer from '/components/Footer.jsx'

const Layout = ({ children }) => {
    return (
        <div>
            <Nav />
            { children }
            <Footer />
        </div>
    )
}

export default Layout
