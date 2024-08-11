import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../redux/CreateSlice";
import { FiDownload } from "react-icons/fi";
// import img from "../../img/A-53816527.html"

import axios from "axios";

const About = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [descr, setDescr] = useState("");
  const [data, setData] = useState("");
  const [brand, setBrand] = useState("");
  const [kategor, setKategor] = useState("");
  const [url, setUrl] = useState("");
  const [res, setRes] = useState(false);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.add);

  const api = `https://api.elchocrud.pro/api/v1/c7dac1a3f5157bc4f560b6a70c5005bf/new`;
  console.log(api);

  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setUrl(reader.result);
    reader.readAsDataURL(file);
  };

  async function getAddProduct() {
    const obj = {
      id:product.length+1,
      
      title: name,
      price: price,
      descr: descr,
      brand: brand,
      category: kategor,
      url: url,
      quantity: 1,
      data: data,
    };
    try {
      const { data } = await axios.post(api, obj);
      dispatch(addProduct(data));
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

  const getProd = () => async (dispatch) => {
    try {
      const { data } = await axios.get(api);
      dispatch(addProduct(data));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handlePreview = () => {
    // getAddProduct();
    setRes(true);
  };

  const handlePost = () => {
    getAddProduct();
    setRes(false);
    nav("/products");
  };

  useEffect(() => {
    dispatch(getProd());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="flex justify-center items-center">
        <div className="w-[80%]">
          <div className="ab mt-8 flex items-center justify-center py-[10px] text-white text-[30px] font-bold">
            <h1>PRODUCT INFORMATION</h1>
          </div>
          <div className="bg2 flex justify-between items-center p-[40px] px-[20px]">
            <div className="flex flex-col ">
              <div className="flex gap-10">
                <div className="flex flex-col gap-7">
                  <h1>PRODUCT NAME:</h1>
                  <h1>PRODUCT PRICE:</h1>
                  <h1>PRODUCT DESCRIPTION:</h1>
                  <h1>PRODUCT BRAND:</h1>
                  <h1>NO. OF BATCHES AVAILABLE:</h1>
                  <h1>UPLOAD PRODUCT IMAGE:</h1>
                </div>
                <div className="flex flex-col gap-6">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    className="bg-transparent border-2 border-solid border-black"
                    type="text"
                    placeholder="Product Name"
                  />
                  <input
                    onChange={(e) => setPrice(e.target.value)}
                    className="bg-transparent border-2 border-solid border-black"
                    type="number"
                    placeholder="Product Price"
                  />
                  <input
                    onChange={(e) => setDescr(e.target.value)}
                    className="bg-transparent border-2 border-solid border-black"
                    type="text"
                    placeholder="Product Description"
                  />
                  <input
                    onChange={(e) => setBrand(e.target.value)}
                    className="bg-transparent border-2 border-solid border-black"
                    type="text"
                    placeholder="Product Brand"
                  />
                  <input
                    onChange={(e) => setData(e.target.value)}
                    className="bg-transparent border-2 border-solid border-black"
                    type="date"
                    placeholder="data"
                  />
                  <input
                    className="bg-transparent border-2 border-solid border-black"
                    type="text"
                    placeholder="Image URL"
                  />
                </div>
              </div>
            </div>
            {/* <select onChange={(e) => setKategor(e.target.value)}>
              <option value="">Category</option>
              <option value="male">MALE PERFUMES</option>
              <option value="female">FEMALE PERFUMES</option>
              <option value="unisex">UNISEX</option>
            </select> */}
            <div className="flex flex-col gap-16 justify-center items-center">
              <h1>UPLOAD PRODUCT IMAGE:</h1>
              {!res ? (
                <span className="text-[50px]">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full"
                  >
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      onChange={onChange}
                    />
                 
                          <span className="text-[90px]">
                  <FiDownload />

                  </span>
                  </label>
                </span>
              ) : (
                <div>
              <img
  src={url }
  alt="Product"
  className="w-[250px] h-[250px]"
/>

             
                </div>
              )}
              {!res ? (
                <button
                  onClick={handlePreview}
                  className="w-[250px] bg-gray-400 text-white rounded-[10px] text-[22px] p-[6px]"
                >
                  PREVIEW PRODUCT
                </button>
              ) : (
                <button
                  onClick={handlePost}
                  className="w-[250px] bg-gray-400 text-white rounded-[10px] text-[22px] p-[6px]"
                >
                  POST PRODUCT
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
