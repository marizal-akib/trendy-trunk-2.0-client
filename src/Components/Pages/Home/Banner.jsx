import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="hero  mb-2  min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/4jYfNv0/group-469-1-data.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-center flex flex-col">
          <div>
            <img
              src="https://i.ibb.co/bzfK8nP/Screenshot-2023-10-21-141909-removebg-preview.png"
              alt=""
            />
          </div>
          <Link
            to="/brand"
            className="underline text-2xl font-semibold text-white"
          >
            Shop Now
          </Link>
        </div>
      </div>
      <div
        className="hero   "
        style={{
          backgroundImage:
            "url(https://i.ibb.co/pyk84Xn/trianglify-lowres-ml-resize-x2-ml-resize-x2-auto-x2.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content ">
          <div>
            <Link to="/brand/H&M">
              <img src="https://i.ibb.co/tX6cj6W/19-10-23-block-6.jpg" alt="" />
              <h2 className="relative bottom-8 ml-1 text-white underline md:text-base text-xs font-light">
               H&M Men's winter warmers
              </h2>
            </Link>
          </div>
          <div>
            <Link to="brand/Zara">
              <img
                src="https://i.ibb.co/sH5Wx7X/womens-2-coats-jackets.jpg"
                alt=""
              />
              <h2 className="relative bottom-8 ml-1 text-white underline md:text-base text-xs font-light">
                Women's coats & jackets of Zara
              </h2>
            </Link>
          </div>
          <div>
            <Link to="brand/Gucci">
              <img src="https://i.ibb.co/0XV4VGJ/19-10-23-block-5.jpg" alt="" />

              <h2 className="relative bottom-8 ml-1 text-white underline md:text-base text-xs font-light">
                New season bags from Gucci
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
