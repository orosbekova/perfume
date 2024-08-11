import { NavLink } from "react-router-dom";
import { LuUser } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";
import { SlBasketLoaded } from "react-icons/sl";
import { useSelector } from "react-redux";

const Header = () => {
  const { basket } = useSelector((s) => s.add);
  return (
    <div className="">
      <div className="container">
        <div className="bg px-[20px] py-[10px]  justify-between flex  items-center">
          <div>
            <h1 className=" text-[40px]  font-serif">ENSCENT</h1>
          </div>
          <div className="text-[30px] flex  font-thin  gap-28">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
          <div className="flex text-[30px] font-thin gap-20">
            <NavLink to="/pro">
              <LuUser />
            </NavLink>
            <NavLink to="/like">
              <IoMdHeartEmpty />
            </NavLink>

            <div className=" flex">
              <NavLink className="flex" to="/basket">
                {" "}
                <SlBasketLoaded />
                <h1 className=" absolute top-8 text-[20px] font-bold  text-red-700">
                  {" "}
                  {basket.length}
                </h1>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="bg-white  h-[20px]"></div>
      </div>
    </div>
  );
};

export default Header;
