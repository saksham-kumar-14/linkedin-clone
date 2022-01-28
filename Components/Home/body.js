import HomeBody1 from "./body1";
import HomeBody2 from "./body2";

const HomeBody = () => {
    return(
        <div className="grid grid-cols-2">
            <HomeBody1/>
            <HomeBody2/>
        </div> 
    )
}

export default HomeBody;