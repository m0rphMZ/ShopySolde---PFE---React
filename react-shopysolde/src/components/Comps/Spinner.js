import { CircularProgress } from "@material-ui/core";
import "../../styles/Spinner.css";

const Spinner = () => (
  <div className="spinner">
    <CircularProgress />
  </div>
);

export default Spinner;