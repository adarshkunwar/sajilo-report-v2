import Topbar from "./navigation/topbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Topbar />
      <div className="content">{children}</div>
    </div>
  );
};
export default Layout;
