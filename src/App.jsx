import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { test } = useSelector((state) => state.app);
  console.log(test);

  return (
    <>
      <></>
    </>
  );
}

export default App;
