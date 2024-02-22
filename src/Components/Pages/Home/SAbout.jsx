import { Link } from "react-router-dom";

const SAbout = () => {
  return (
    <div
      className="hero   "
      style={{
        backgroundImage: "url(https://i.ibb.co/G3fdpcf/cool-background-2.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content ">
        <div className="grid md:grid-cols-3  gap-4">
          <div className="row-span-2 md:col-span-1 col-span-2 ">
            <Link to="brand/Levi's">
              <img
              className=""
                src="https://i.ibb.co/9GSfsqw/56d6f03e82ee57b731adef06a0910b52.jpg"
                alt=""
              />
              <h2 className="relative bottom-8 ml-1 text-white underline md:text-base text-xs font-light">
                Levi's 501 best in the word
              </h2>
            </Link>
          </div>
          <div className="col-span-1">
            <Link to="brand/Adidas">
              <img
                src="https://i.ibb.co/vwYzSqK/54de19fa9c0db8e3de6ebc1e7e39efd8.jpg"
                alt=""
              />
              <h2 className="relative bottom-8 ml-1 text-gray-400 underline md:text-base text-xs font-light">
                Men's adidas Centennial 85
              </h2>
            </Link>
          </div>
          <div className="col-span-1">
            <Link to="brand/Nike">
              <img
                src="https://i.ibb.co/dpgCSkc/Fbk-4p-MUYAA-t-On.jpg"
                alt=""
              />
              <h2 className="relative bottom-8 ml-1 text-white underline md:text-base text-xs font-light">
                Iconic hoops style from Nike
              </h2>
            </Link>
          </div>
          <div className="md:col-span-2 col-span-3 text-center  md:px-14">
            <p className="mb-3">
              Trendy Trunk is your go-to fashion destination, offering the
              latest styles from Nike, Adidas, Gucci, Zara, H&M, and Levi's.
              Elevate your wardrobe with our curated collection, spanning sporty
              activeness, chic formal attire, and casual everyday fashion. Click
              here to unlock exclusive coupon offers and stay ahead in the
              fashion game!
            </p>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn mt-6 text-white bg-[#ff908b]"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              click to get coupon
            </button>
            <dialog
              id="my_modal_1"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box text-center">
                <h3 className="font-bold text-lg">Your coupon</h3>
                <p className="py-4 text-2xl font-extralight">
                  56973
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SAbout;
