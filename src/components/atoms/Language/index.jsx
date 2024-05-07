import React from "react";
import { Button } from "react-bootstrap";
import "./style.scss";

const Language = () => {
  return (
    <div className="wrapper-language">
      <Button className="language-btn" size="sm">
        IN
      </Button>
      <Button variant="outline-primary" className="language-btn mr-2" size="sm">
        EN
      </Button>
    </div>
  );
};

export default Language;
