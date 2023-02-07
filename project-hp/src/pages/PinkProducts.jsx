import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PinkProducts = () => {
  const {title} = useParams();
  const pinkItems = useSelector((state) => state.pinkState);

  return (  
    <div>

    </div>
  );
}

export default PinkProducts;