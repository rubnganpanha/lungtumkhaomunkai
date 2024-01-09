// import icon
import { AiFillStar } from "react-icons/ai";

export const Rating = ({ point }) => {
  return <>
    <div className="flex inline-flex justify-center text-yellow-400">
       {[...Array(point)].map((e, i) => {
        return (
          <span key={i}>
            <AiFillStar />
          </span>
        );
      })}
    </div>
  </>;
};

