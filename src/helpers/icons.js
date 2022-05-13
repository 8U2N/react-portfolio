import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusCircle, 
    faSpinner, 
    faSignOutAlt, 
    faEdit } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return library.add(faSignOutAlt, faEdit, faSpinner, faPlusCircle)
};

export default Icons;