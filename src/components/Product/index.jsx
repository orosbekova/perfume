import { useAuth } from "../AuthContext";
import { useState } from "react";

const Product = () => {
  const { logInOut, registerUser } = useAuth();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  function createRegister() {
    registerUser(userName, password);
  }

  return (
    <div>
      <div className="container">
        <div className="flex flex-col  items-center justify-center">
          <div className="w-[40%]  mt-10">
            <div className="pro items-center font-bold flex justify-center text-white text-[25px] p-[15px]">
              <h1>LOG IN AS A SELLER</h1>
            </div>
            <div className="pro2 flex gap-10 flex-col  items-center justify-center text-[25px] font-bold  py-[20px]">
              <div className=" flex flex-col items-center justify-center">
                <h1>USERNAME</h1>
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  className="bg-gray-500 py-[12px]"
                  type="text"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h1>PASSWORD</h1>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-500 py-[12px]"
                  type="text"
                />
              </div>
              <button
                onClick={createRegister}
                className="p-[10px] text-white rounded-[15px] text-[20px] bg-gray-500 w-[250px]"
              >
                LOG UP AS
              </button>
              <button
                onClick={() => logInOut()}
                className="p-[10px] text-white rounded-[15px] text-[20px] bg-gray-500 w-[250px]"
              >
                LOG IN AS A SELLER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
