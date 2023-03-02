import React from "react";
import Img from "../../components/images/pnf.jpg";
import "./PageNotFound.scss";

const PageNotFound = () => {
  return (
    <div className="notFound">
      <img src={Img} alt="pageNotFound" />
    </div>
  );
};

export default PageNotFound;
