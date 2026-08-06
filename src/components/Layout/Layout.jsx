import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Layout({ children }) {

  return (

    <>

      <Navbar />

      <main
        style={{
          minHeight: "calc(100vh - 160px)"
        }}
      >

        {children}

      </main>

      <Footer />

    </>

  );

}

export default Layout;