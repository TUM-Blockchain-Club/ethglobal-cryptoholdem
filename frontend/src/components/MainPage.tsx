import Navbar from "./Navbar";
import Table from "./Table";


const MainPage = () => {
  return (
    <div>
      <div className="flex flex-col">
        <Navbar />
        <Table/>
      </div>
    </div>
  );
};

export default MainPage;