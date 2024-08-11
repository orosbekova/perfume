import { useDispatch, useSelector } from "react-redux";
import { FaRegWindowClose } from "react-icons/fa";
import { deCrement, filterBasket, inCrement } from "../redux/CreateSlice";
import axios from "axios";


const Basket = () => {
  const { basket } = useSelector((s) => s.add);
  console.log(basket, "bas");
  const dispatch=useDispatch()

  const basketProd = async (id) => {
    await axios.delete(
      `https://api.elchocrud.pro/api/v1/c7dac1a3f5157bc4f560b6a70c5005bf/new/${id}`
    );
  };


  return (
    <div>
      <div className="container">
     { basket.length?  <div className=" flex flex-col items-center mt-20">
          <div className="w-[80%] p-[20px] flex justify-center text-white text-[25px]   gap-48 bg-gray-700">
            <h1>PRODUCT</h1>
            <h1>QANTITY</h1>
            <h1>PRICE</h1>
          </div>
          <div className="w-[80%] p-[20px] bg-white">
            {basket.map((el) => (
              <div className="flex flex-col gap-12 items-center" key={el.id}>
                <span onClick={()=>{
                  basketProd(el._id)
                  dispatch(filterBasket(el._id))}} 
                  className=" relative   left-96 top-8 text-[25px]"><FaRegWindowClose />
                </span>
                <div className="flex justify-center text-[25px] items-center gap-60">
                  <div>
                    <img className="w-[200px] h-[250px]" src={el.url} alt="" />
                    <h1>{el.title}</h1>
                  </div>
                  <div className="flex items-center">
                    <div className="">
                      <button onClick={()=>dispatch(deCrement(el))} className="w-[50px]  bg-gray-800 text-white text-[40px]">-</button>
                    </div>
                    <div className=" flex items-center justify-center">
                      <h1  className="bg-gray-400 p-[11px] w-[50px]">{el.quantity}</h1>
                    </div>
                    <div>
                    <button onClick={()=>dispatch(inCrement(el))} className="w-[50px]  bg-gray-800 text-white text-[40px]">+

                    </button>
                    </div>
                  </div>
                  <div>
                    <h1>{el.price*el.quantity}$</h1>
                  </div>
                </div>
                <div style={{
                    border:"1px solid black"
                }} className="w-[80%]   "></div>
              </div>
            ))}
          </div>
        </div>:  <div className=" flex items-center  justify-center mt-40 text-white">  
          <img className="" src="https://cdn-icons-png.flaticon.com/512/10967/10967193.png" alt="" />
        </div>  }
      </div>
    </div>
  );
};

export default Basket;
