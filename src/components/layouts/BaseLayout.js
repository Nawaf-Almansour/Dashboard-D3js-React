import Header from "../shared/Header";
import Footer from "../shared/Footer";

const BaseLayout = (props) => {
    const { children, className } = props
    return (
        <div className="layout-container">
            <Header/>
            <main className={`cover ${className}`}>
                <div className="wrapper">
                    {children}
                </div>
            </main>
            <Footer/>
        </div>

    )

}
export default BaseLayout;