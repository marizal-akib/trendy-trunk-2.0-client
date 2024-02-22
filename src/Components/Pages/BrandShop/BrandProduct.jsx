/* eslint-disable no-unused-vars */
import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState } from "react";

const BrandProduct = () => {
  const allProducts = useLoaderData();
  const { id } = useParams();
  // console.log(id);
  const brandArya = allProducts.filter(
    (product) => id.includes(product.brand_Name) && product.logo
  );
  const brand = brandArya[0];

  const products = allProducts.filter(
    (product) => id.includes(product.brand_Name) && product.name
  );
  const [viewProducts,setViewProducts] = useState(products.slice(0, 4));
  const [showAllProducts, setShowAllProducts] = useState(false);

  // console.log(brand);
  // console.log(products);

  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={brand.ad1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn bg-opacity-20 text-lg border-none btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn bg-opacity-20 text-lg border-none btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={brand.ad2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn bg-opacity-20 text-lg border-none btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn bg-opacity-20 text-lg border-none btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={brand.ad3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn bg-opacity-20 text-lg border-none btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn bg-opacity-20 text-lg border-none btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
      <div
        className="max-w-7xl py-9"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/pyk84Xn/trianglify-lowres-ml-resize-x2-ml-resize-x2-auto-x2.jpg)",
        }}
      >
        {products.length <= 0 ? <div className=" text-center"> <h2 className="uppercase text-4xl font-semibold">Out of stock</h2> <p className="text-2xl font-light mt-4">Please have a look on our other brands</p> </div>  : 
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-9  grid-cols-1 ">
          {showAllProducts
            ? products.map((product) => (
                <ProductCard key={product._id} product={product}></ProductCard>
              ))
            : viewProducts.map((product) => (
                <ProductCard key={product._id} product={product}></ProductCard>
              ))}
        </div>}
        <div className={products.length > 4 ? "text-center" : "hidden"}>
          <button
            onClick={() => setShowAllProducts(!showAllProducts)}
            className="btn btn-primary m-5"
          >
            {showAllProducts ? "Show Less" : "Show All"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default BrandProduct;
