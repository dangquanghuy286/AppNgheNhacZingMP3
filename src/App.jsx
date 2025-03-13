import "./App.css";
import { Routes, Route } from "react-router-dom";
import Public from "./container/publicPage/Public";
import Home from "./container/publicPage/Home";
import Login from "./container/publicPage/Login";
import path from "./utils/path";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />

          <Route path={path.STAR} element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
