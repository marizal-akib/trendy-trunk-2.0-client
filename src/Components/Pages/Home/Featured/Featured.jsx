
import fImg from "../../../../assets/fff.webp";
import './Featuerd.css'

const Featured = () => {
  return (
    <div className="featured_item bg-fixed text-white py-8 my-20">
        <div className=" bg-slate-400 bg-opacity-40">
      <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-orange-400 mb-2" >---Do You Like?---</p>
            <h3 className="text-4xl uppercase border-y-4">Fashion Show</h3>
        </div>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={fImg} alt="" />
        </div>
        <div className="md:ml-10 text-white">
          <p>Aug 20, 2029</p>
          <p className="uppercase"> want to join our latest fashion event?</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            totam nam obcaecati, architecto vitae mollitia dicta tenetur
            assumenda eos, qui, accusantium rem delectus? Tenetur placeat
            asperiores nemo nihil cupiditate expedita. Accusantium, ea enim
            possimus aut hic praesentium amet soluta neque minima sed, dicta
            sequi quidem quisquam aspernatur adipisci excepturi totam?
          </p>
          <button className="btn btn-outline mt-3 border-b-4">Book Now</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
