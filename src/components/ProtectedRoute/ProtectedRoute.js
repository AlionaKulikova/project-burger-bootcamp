import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";


export const ProtectedRouteElement = ({ element }) => {

  const { nameUser } = useSelector((state) => ({
    nameUser: state.postLogin.nameUser,
  }));

  return !nameUser ? <Navigate to="/login" /> : element
} 