import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedUserRoute = ({ children }) => {
  const { isLogin } = useSelector((state) => state.authReducer);
  if (isLogin) {
    return <>{children}</>;
  } else {
    return <Navigate to={{ pathname: "/login" }} />;
  }
};

export const ProtectedAdminRoute = ({ children }) => {
  const { isLogin, user } = useSelector((state) => state.authReducer);
  if (isLogin ) {
    if (user.isAdmin) {
      return <>{children}</>;
    }
    else {
      //
    }
  } else {
    return <Navigate to={{ pathname: "/login" }} />;
  }
};

export const CheckLogin = ({ children }) => {
  const { isLogin } = useSelector((state) => state.authReducer);

  if (!isLogin) {
    return <>{children}</>;
  } else {
    return <Navigate to={{ pathname: "/" }} />;
  }
};
