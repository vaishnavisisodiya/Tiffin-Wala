import React from "react";
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar/Navbar';

const HomeLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-full overflow-x-hidden">
      {/* <Navbar /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default HomeLayout;
