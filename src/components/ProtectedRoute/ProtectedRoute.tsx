import { Navigate } from 'react-router-dom';
import { useSelector } from '../../utils/hooks';
import { FC } from "react";

type Props = {
  element: JSX.Element,
}

export const ProtectedRouteElement: FC<Props> = ({ element }) => {

  const { nameUser } = useSelector((state) => ({
    nameUser: state.postLogin.nameUser,
  }));

  return !nameUser ? <Navigate to="/login" /> : element
} 