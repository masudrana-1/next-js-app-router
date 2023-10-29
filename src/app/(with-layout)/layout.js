import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Navbar";

const MainLayout = ({children}) => {
    return (
        <>
        <Header/>
            <div className='min-h-screen'>
                {children}
            </div>
        <Footer/>
        </>
    );
};

export default MainLayout;