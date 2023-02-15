import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFeed } from "../../services/actions/App.js";
import AppHeader from "../AppHeader/AppHeader.js";
import { Main } from "../Main/Main.js"
import styles from "./styles.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeed());
  }, [dispatch]);

  const { feed, feedRequest, feedFailed } = useSelector((state) => ({
    feed: state.dataReducer.feed,
    feedRequest: state.dataReducer.feedRequest,
    feedFailed: state.dataReducer.feedFailed,
  }));

  return (
    <div className="page">
      <AppHeader />
      <div>
        {feedRequest && "Загрузка..."}
        {feedFailed && "Произошла ошибка"}
        {!feedRequest && !feedFailed && feed.length && (
          <div className={styles.box}>
            <DndProvider backend={HTML5Backend}>
              <Main />
            </DndProvider>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;