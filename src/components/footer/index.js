import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmileWink } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>This is a code challenge for Rahnama college</p>
      <FontAwesomeIcon icon={faSmileWink} />
    </div>
  );
};
export default Footer;
