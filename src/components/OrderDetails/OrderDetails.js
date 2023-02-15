import React, { useEffect } from "react";
import done from "../../images/done.svg";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { sendData } from "../../services/actions/OrderDetails";
import PropTypes from "prop-types";

const OrderDetails = () => {

  const { dataConstructor } = useSelector((state) => ({
    dataConstructor: state.dataConstructor,
  }));
  const idConstructorForPost = dataConstructor.map((item) => item.arr._id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendData(idConstructorForPost));
  }, []);

  const { dataPost, postRequest } = useSelector((state) => ({
    dataPost: state.postReducer.dataPost,
    postRequest: state.postReducer.postRequest,
  }));

  if (postRequest) {
    return <p>Загрузка...</p>
  }

  return (
    <div className={styles.order_modal}>

      {dataPost.order &&
        <div>
          <p className="text text_type_digits-large">{dataPost.order.number}</p>
        </div>
      }
      <div className="mt-10 mb-15">
        <p className="text text_type_main-medium"> идентификатор заказа</p>
      </div>
      <div className={styles.icon_order_modal}>
        <img src={done} alt={`Заказ`} />
      </div>
      <div className="mb-2 mt-15">
        <p className="text text_type_main-default">Ваш заказ начали готовить</p>
      </div>
      <div className="mb-30">
        <p className="text text_type_main-default  text_color_inactive">Дождитесь готовности на орбитальной станции</p>
      </div>
    </div>
  );
};

OrderDetails.propTypes = {
  modalOrderRef: PropTypes.object.isRequired,
};

export default OrderDetails;