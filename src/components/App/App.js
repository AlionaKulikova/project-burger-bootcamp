import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFeed } from "../../services/actions/App.js";
import AppHeader from "../AppHeader/AppHeader.js";
import { Main } from "../Main/Main.js";
import styles from "./styles.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Routes, Route, useNavigate } from "react-router-dom";
import { LoginPage } from "../../pages/login/login";
import { RegisterPage } from "../../pages/register/register";
import { ForgotPasswordPage } from "../../pages/forgot-password/forgot-password";
import { ResetPasswordPage } from "../../pages/reset-password/reset-password";
import { ProfilePage } from "../../pages/profile/profile";
import { TapeOrders } from "../../pages/tape/tape";
import { HistoryOrder } from "../../pages/profile/orders/orders";
import { ProtectedRouteElement } from '../ProtectedRoute/ProtectedRoute';
import { Modal } from "../Modal/Modal.js";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { DELETE_INGREDIENT_DETAL } from "../../services/actions/BurgerIngredient";

function App() {

  const navigate = useNavigate();

  const { statusModal } = useSelector((state) => ({
    statusModal: state.dataIngredientsReducer.openModal,
  }));

  const closeModal = () => {
    dispatch(
      {
        type: DELETE_INGREDIENT_DETAL,
      },
    )
    if (statusModal) {
      navigate("/");
    }
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeed());
  }, [dispatch]);

  return (
    <div className={styles.page}>
      <AppHeader />
      <Routes >
        <Route path="/" element={
          <DndProvider backend={HTML5Backend}>
            <Main />
          </DndProvider>
        } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/profile" element={<ProtectedRouteElement element={<ProfilePage />} />} />
        <Route path="/profile/orders" element={<ProtectedRouteElement element={<HistoryOrder />} />} />
        <Route path="/tape" element={<TapeOrders />} />
        <Route path="*" element={<h1>Страница не найдена</h1>} />
        {statusModal ? <Route path="/ingredients/:id" element={
          <Modal closeModal={closeModal}>
            <IngredientDetails />
          </Modal>
        } /> : <Route path="/ingredients/:id" element={<IngredientDetails />} />}
      </Routes>
    </div>
  );
}

export default App;