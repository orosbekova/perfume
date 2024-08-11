import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { basProduct, filterProduct } from "../redux/CreateSlice";
import { MdArrowRight } from "react-icons/md";
import axios from "axios";

const Products = () => {
  const { product } = useSelector((s) => s.add);
console.log(product);

  const getProd = async (id) => {
    await axios.delete(
      `https://api.elchocrud.pro/api/v1/c7dac1a3f5157bc4f560b6a70c5005bf/new/${id}`
    );
  };

  console.log(product);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="container">
        <div className="flex  ">
          <div className="bg-gray-500 text-white flex  flex-col gap-8 h-[760px] w-[350px] p-[15px] px-[30px]">
            <div className=" flex flex-col gap-2">
              <h1 className="text-[27px] font-bold">CATEGORY</h1>
              <h1 className="flex items-center">
                {" "}
                <span>
                  {" "}
                  <MdArrowRight />
                </span>
                MALE PERFUMES
              </h1>
              <h1 className="flex items-center">
                {" "}
                <span>
                  {" "}
                  <MdArrowRight />
                </span>
                FEMALE PERFUMES
              </h1>
              <h1 className="flex items-center">
                {" "}
                <span>
                  {" "}
                  <MdArrowRight />
                </span>
                FEMALE PERFUMES
              </h1>
            </div>
            <div className=" flex flex-col gap-2">
              <h1 className="text-[28px] font-bold">PRICE</h1>
              <input type="range" />
              <div className="flex justify-between">
                <h1 className=" font-thin">Price:0-25.000</h1>
                <h1 className=" font-bold">Filter</h1>
              </div>
            </div>
            <div className=" flex flex-col gap-2">
              <h1 className="text-[28px] font-bold">BRAND</h1>
              <h1 className="flex items-center">
                <span>
                  <MdArrowRight />
                </span>
                DIOR
              </h1>
              <h1 className="flex items-center">
                <span>
                  {" "}
                  <MdArrowRight />
                </span>
                VERSACE
              </h1>
              <h1 className="flex items-center">
                {" "}
                <span>
                  {" "}
                  <MdArrowRight />
                </span>{" "}
                PRADA
              </h1>
              <h1 className="flex items-center">
                {" "}
                <span>
                  {" "}
                  <MdArrowRight />
                </span>{" "}
                TOM FORD
              </h1>
            </div>
            <div className=" flex flex-col gap-2">
              <h1 className="text-[28px] font-bold">TYPE</h1>
              <h1 className="flex items-center">
                {" "}
                <span>
                  {" "}
                  <MdArrowRight />
                </span>
                ELIXIP
              </h1>
              <h1 className="flex items-center">
                {" "}
                <span>
                  {" "}
                  <MdArrowRight />
                </span>
                COLOGNE
              </h1>
              <h1 className="flex items-center">
                {" "}
                <span>
                  {" "}
                  <MdArrowRight />
                </span>
                PERFUME
              </h1>
              <h1 className="flex items-center">
                {" "}
                <span>
                  {" "}
                  <MdArrowRight />
                </span>
                EAU DE TOLLETE
              </h1>
            </div>
          </div>
          <div className="h-[760px] w-[10px] bg-white"></div>

          <div className="flex flex-wrap gap-20 ml-10">
            {product?.map((el) => (
              <div
                key={el.id}
                className="w-[320px] gap-1 mt-10 p-[15px] h-[380px] bg-white items-center flex rounded-[10px] text-black flex-col"
              >
                <img className="w-[200px] h-[220px]" src={el.url} alt="" />

                <h1>{el.title}</h1>
                <h1>
                  {el.price} <span className="text-red-500">$</span>
                </h1>
                <h1>{el.cetegory}</h1>
                <div className="flex item-center gap-10">
                  <button
                    onClick={() => dispatch(basProduct(el))}
                    className="w-[150px] bg-gray-500 rounded-[8px] text-white p-[3px]"
                  >
                    ADD TO BASKET
                  </button>
                  <span
                    onClick={() => {
                      getProd(el._id);
                      dispatch(filterProduct(el._id));
                    }}
                    className="text-red-500 text-[30px]"
                  >
                    <RiDeleteBin2Fill />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
