import { NavEN, NavSV } from "./Nav";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <div className="font-sans text-white bg-center bg-no-repeat bg-cover bg-fri ">
      <div className="bg-semitransparent">
        {props.en ? <NavEN /> : <NavSV />}

        <div className="min-h-screen ">
          <main>{props.children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
