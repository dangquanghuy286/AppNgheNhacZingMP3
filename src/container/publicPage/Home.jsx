import { useEffect, useState } from "react";
import { Header } from "../../components";
import { getHome } from "../../services/Home";
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await getHome();
      console.log(res);
      setData(res);
    };
    fetchApi();
  }, []);
  return (
    <>
      <div className="overflow-y-auto ">
        <div className="h-[70px] bg-[#170f23] px-[59px] flex items-center text-[#fff]">
          <Header />
        </div>
      </div>
    </>
  );
}
export default Home;
