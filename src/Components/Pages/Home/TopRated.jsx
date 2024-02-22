import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopRated = () => {
  const [allProducts, setAllProducts] = useState();

  useEffect(() => {
    fetch("https://trendy-trunk-server-kl0lqxjhy-mariz-al-akibs-projects.vercel.app /products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  const topRating = allProducts?.filter((products) => products.rating <= "4");
  console.log(topRating);

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="mb-5 text-5xl text-black font-bold mt-14  ">Our Top Rated Products</h2>
      </div>
      <div className=" gap-10  mt-16">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[]}
          className="mySwiper mt-14 mb-8"
        >
          <SwiperSlide>
            <div className="  mt-32 ml-48  text-6xl text-[#f47520]">
              <FaArrowCircleLeft />
            </div>
          </SwiperSlide>

          {topRating?.map((item, i) => (
            <SwiperSlide key={i}>
              <Link to={`/product/${item._id}`}>
                <img className="w-11/12" src={item.image} alt="" />
                <div>
                  <h2 className="text-lg text-[#f47520] font-bold">
                    {item.type}
                  </h2>
                  <div className="flex gap-2 items-baseline">
                    <h2 className="text-xl text-black font-semibold">
                      {item.name}{" "}
                    </h2>
                    <h4 className="text-sm text-black">
                      {" "}
                      <span className="text-lg">{item.price}</span>
                    </h4>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopRated;
