import clsx from "clsx";

const Layout = ({ children }) => {
  return (
    <div className={clsx(`max-w-screen-lg py-4 px-2 mx-auto h-[100vh]`)}>
      {children}
    </div>
  );
};

export default Layout;
