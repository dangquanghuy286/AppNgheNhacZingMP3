import "./App.css";
import { Routes, Route } from "react-router-dom";
import Public from "./container/publicPage/Public";
import Home from "./container/publicPage/Home";
import Login from "./container/publicPage/Login";
import path from "./utils/path";
import { Flower, Mymusic } from "./container/publicPage";
import ZingChart from "./container/publicPage/ZingChart";
import Radio from "./container/publicPage/Radio";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.MY_MUSIC} element={<Mymusic />} />
          <Route path={path.ZING_CHART} element={<ZingChart />} />
          <Route path={path.RADIO} element={<Radio />} />
          <Route path={path.FLOWER} element={<Flower />} />
          <Route path={path.STAR} element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
