import Meta from "../components/meta";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ preview, children }) {
  return (
    <div className="font-sans text-white bg-center bg-no-repeat bg-cover bg-fri ">
      <div className="bg-semitransparent">
        <Meta />
        <Nav />
        <div className="min-h-screen ">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
