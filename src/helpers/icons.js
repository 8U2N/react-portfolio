import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlusCircle,
  faSpinner,
  faSignOutAlt,
  faEdit,
  faSquarePhone,
  faSquareEnvelope,
  faDumpsterFire,
  faLinkedin,
  faFacebookSquare,
  faTwitterSquare,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  return library.add(
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlusCircle,
    faSquarePhone,
    faSquareEnvelope,
    faDumpsterFire,
    faLinkedin,
    faTwitterSquare,
    faFacebookSquare,
    faMapMarkedAlt
  );
};

export default Icons;
