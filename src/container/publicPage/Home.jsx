import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Header, SliderImg } from "../../components";
import { getHome } from "../../store/actions/home";

function Home() {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getHome());
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [dispatch]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="overflow-y-auto w-full">
        <SliderImg />
      </div>
    </>
  );
}

export default Home;
