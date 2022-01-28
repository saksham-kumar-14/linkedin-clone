import HomeBody from "../Components/Home/body";
import HomeHeader from "../Components/Home/header";

const Home = () =>{
  return(
    <div className="px-2 py-4 bg-gray-100 h-[100vh]">
      <HomeHeader />
      <HomeBody />

    </div>
  )
}

export default Home;