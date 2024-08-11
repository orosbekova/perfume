import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import axios from "axios";


const Home = () => {
  const [data, setData] = useState([]);

  const api =
    "https://api.elchocrud.pro/api/v1/c7dac1a3f5157bc4f560b6a70c5005bf/new";

  async function getProduct() {
    try {
      let { data } = await axios.get(api);
      setData(data);
    } catch (error) {
      console.log("Invalid error API", error);
    }
  }
  const sortPro = data ? [...data].sort((a, b) => b._id - a._id) : [];
  useEffect(() => {
    getProduct();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="home">
      <div className="container">
        <div className=" flex flex-col gap-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className=" flex justify-center items-center gap-20">
              <h1 className="border-2 border-gray-300 w-[520px]"></h1>
              <h1 className="text-[40px] text-white">NEW IN ENSCENT</h1>
              <h1 className="border-2 border-gray-300 w-[520px]"></h1>
            </div>
            <div  className="bg-[hsla(210,6%,85%,1)]  w-[70%] h-[432px] max-[446px]:h-[180px] max-[1200px]:h-[350px] max-lg:h-[300px]">
            <div className=" ">
    <Slider {...settings}>
      {sortPro.map((el) => (
        <div
          key={el._id}
          className=""
        >
          <img src={el.url} alt="" className="w-[350px] h-[400px] ml-[350px] " />
        </div>
      ))}
    </Slider>
  </div>
            </div>
          </div>
          <div className="mt-[10px] flex items-center justify-between">
            <div className="text-white text-[25px]">
              <h1>OFFERS AND TRENDS</h1>
              <h1 className="text-[35px]">Newsletter Application</h1>
              <p className="text-[15px]">
                Enter your email address and let us notify you <br />
                about news and discounts...
              </p>
              <div className=" flex gap-9 mt-3">
                <input className=" rounded-[9px]" type="text" />
                <button className="bg-gray-400 rounded-[8px] text-[22px] text-black p-[3px] w-[130px]">
                  SIGN UP
                </button>
              </div>
            </div>
            <div className="text-white text-[25px]">
              <h1>STAY UP TO DATE</h1>
              <h1 className="text-[35px]">Follow Us</h1>

              <p className="text-[15px]">
                Become part of our friends on social networks and <br /> find
                out first about the discounts and novelties that <br /> we
                announce...
              </p>

              <div className="flex mt-4 gap-16 text-[30px]">
              
                <span>
                  <FaInstagram />
                </span>
                <span>
                  <FaFacebook />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
