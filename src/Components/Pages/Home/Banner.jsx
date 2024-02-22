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
    
    </div>
  );
};

export default Banner;
