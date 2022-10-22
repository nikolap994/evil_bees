import Navigation from "./Navigation";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
