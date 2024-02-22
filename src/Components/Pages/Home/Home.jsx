import { useLoaderData } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Footer from "../../Elements/Footer";
import Banner from "./Banner";
import SAbout from "./SAbout";
import TopRated from "./TopRated";
import Section1 from "./Section1";
import NewsLetter from "./NewsLtter/NewsLetter";
import Featured from "./Featured/Featured";
import SecondaryNav from "./SecondaryNav";
import About from "./About";



const Home = () => {

  const allProducts = useLoaderData();
  const brands = allProducts.filter((products) => products.logo);

  console.log(brands);

  return (
    <div>
      <Banner></Banner>
      <Marquee className="mt-5 " speed={75} pauseOnHover={true}>
        {brands.map((brand) => (
          <div className="text-center ml-2 " key={brand._id}>
            {" "}
            <Link to={`/brand/${brand.brand_Name}`}>
              <img
                className="md:h-32 h-10"
                src={brand.logo}
                alt={brand.brand_Name}
              />
              <p className="mb-2 hover:underline uppercase font-semibold">
                {brand.brand_Name}
              </p>
            </Link>
          </div>
        ))}
      </Marquee>
      <Section1></Section1>
      <TopRated></TopRated>
      <About></About>
      <SAbout></SAbout>
      <Featured></Featured>
      <NewsLetter></NewsLetter>
      <SecondaryNav></SecondaryNav>
      <Footer></Footer>
    </div>
  );
};

export default Home;
