import Footer from "../Elements/Footer";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h2 className="text-3xl font-semibold mb-5">
          <span className="bg-slate-400 text-slate-400">..</span>
          <span className=" relative text-red-500 font-extrabold bg-red-500 ">
            l
          </span>
          <span className=" relative text-orange-500 font-extrabold bg-orange-500 ml-1 mr-2">
            l
          </span>
          Welcome to Trendy Trunk's Story
        </h2>
      </div>
      <div className=" py-10" style={{
          backgroundImage:
            "url(https://i.ibb.co/pyk84Xn/trianglify-lowres-ml-resize-x2-ml-resize-x2-auto-x2.jpg)",
        }}>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-6xl mx-auto items-center"
      >
        <div>
          <p className="text-xl">
            At Trendy Trunk, our passion for fashion is matched only by our
            commitment to delivering the latest trends and top-quality apparel.
            We believe that every individual deserves to express themselves
            through their unique style, and our mission is to empower you to do
            just that. Our journey began with a vision to redefine the fashion
            industry by curating a diverse selection of clothing from renowned
            brands and designers worldwide. With an emphasis on quality,
            comfort, and cutting-edge fashion, we strive to bring you the finest
            garments that embody your individuality and personal flair.
            <br />
            <br />
            From our humble beginnings to becoming a leading fashion
            destination, our dedication to customer satisfaction and
            trendsetting designs has remained unwavering. Join us in celebrating
            the joy of self-expression and discover your perfect style at Trendy
            Trunk.
            <br />
            <br />
            Thank you for being a part of our fashionable family!
          </p>
        </div>
        <div>
          <img
            src="https://i.ibb.co/5s8y0Yk/798ad688-b58b-4365-a0df-2d015949efb6-transformed.jpg"
            alt=""
          />
        </div>
      </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default About;
