import Button from "react-bootstrap/Button";
import "./style.scss";

const CustomButton = ({ variant, size, children }) => {
  return (
    <Button variant={variant} size={size}>
      {children}
    </Button>
  );
};

export default CustomButton;
