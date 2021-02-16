import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <div className="font-sans text-white bg-center bg-no-repeat bg-cover bg-fri ">
      <div className="bg-semitransparent">
        <Nav nav={props.nav} />
        <div className="min-h-screen ">
          <main>{props.children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
