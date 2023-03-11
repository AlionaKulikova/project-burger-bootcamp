import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { FC } from "react";


type Props = {
  element: JSX.Element,
}


export const ProtectedRouteElement: FC<Props> = ({ element }) => {

  const { nameUser } = useSelector((state: any) => ({
    nameUser: state.postLogin.nameUser,
  }));

  return !nameUser ? <Navigate to="/login" /> : element
} 