import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  props?: any;
}

export default function Layout({ children, className, props }: LayoutProps) {
  const classes =
    `flex flex-col justify-center items-center w-[100%] ` + (className || "");

  return (
    <div {...props} className={classes}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
