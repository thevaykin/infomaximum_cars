import { Global } from "@emotion/react";
import { autorun } from "mobx";
import { FC } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import carsListStore from "./components/store/carsListStore";
import Cars from "./pages/Cars/Cars";
import Favorite from "./pages/Favorite/Favorite";
import { GLOBAL_STYLES } from "./styles/global.styles";


const App: FC = () => {
  return (
    <div>
      <Global styles={GLOBAL_STYLES} />
      <div>
        <BrowserRouter>
          <Header />
          <div css={GLOBAL_STYLES.container}>
            <Routes>
              <Route path="/" element={<Cars />}></Route>
              <Route path="/favorite" element={<Favorite />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

autorun(() => {
  carsListStore.fetchData();
});

export default App;
