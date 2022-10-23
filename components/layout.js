import Navigation from "./Navigation";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="flex h-full flex-col">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
