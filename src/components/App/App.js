import React from "react";
import AppHeader from "../AppHeader/AppHeader.js";
import Main from "../Main/Main.js";

function App() {
  const [state, setState] = React.useState({
    isLoading: false,
    hasError: false,
    datas: [],
  });

  const getData = () => {
    setState({ ...state, hasError: false, isLoading: true });
    fetch("https://norma.nomoreparties.space/api/ingredients")
      .then((res) => res.json())
      .then((datas) => setState({ ...state, datas: datas.data, isLoading: false }))
      .catch((e) => {
        setState({ ...state, hasError: true, isLoading: false });
      });
  };
  React.useEffect(() => {
    getData();
  }, []);

  const { datas, isLoading, hasError } = state;

  return (
    <div>
      <AppHeader />
      <div>
        {isLoading && "Загрузка..."}
        {hasError && "Произошла ошибка"}
        {!isLoading && !hasError && datas.length && <Main data={datas} />}
      </div>
    </div>
  );
}

export default App;