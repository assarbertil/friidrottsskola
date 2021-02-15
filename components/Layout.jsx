import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ preview, children }) {
  return (
    <div className="font-sans text-black bg-center bg-no-repeat bg-cover bg-fri ">
      <div className="bg-semitransparent">
        <Nav />
        <div className="min-h-screen ">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
