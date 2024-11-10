import Header from "./header/Header";
import Main from "./main/Main";
import { Footer } from "./footer/Footer";

interface Props {
  Children: React.ReactNode;
}
export const Layout = (props: Props) => {
  return (
    <>
      <div className="app-container">
        <Header />
        <Main Children={props.Children} />
        <Footer />
      </div>
    </>
  );
};
