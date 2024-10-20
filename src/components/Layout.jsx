const Layout = ({ children, width, height, className }) => {
  return (
    <div
      // style={{ width, height }}
      className={`w-${width} h-${height} px-3 py-3 rounded shadow-md w-fit backdrop-blur-md dark:text-white/90`}
    >
      {children}
    </div>
  );
};

export default Layout;
