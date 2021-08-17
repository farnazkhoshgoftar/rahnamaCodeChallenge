import React from "react";

import './pageHOC.css'
import Header from "../../components/header";
import Footer from "../../components/footer";

const PageHOC = ({ children }) => {
  return (
    <>
      <Header />
      <div className='content'>{children}</div>
      <Footer />
    </>
  );
};

export default PageHOC;
