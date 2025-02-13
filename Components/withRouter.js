// withRouter.js
import { useNavigate } from "react-router-dom";

const withRouter = (WrappedComponent) => (props) => {
  const navigate = useNavigate();

  return <WrappedComponent navigate={navigate} {...props} />;
};

export default withRouter;
