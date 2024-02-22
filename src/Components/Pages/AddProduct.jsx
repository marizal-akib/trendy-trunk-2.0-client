import Swal from 'sweetalert2';
import Footer from "../Elements/Footer";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;

    const image = form.photo.value;
    const name = form.name.value;
    const brand_Name = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const newProduct= {
      image,
      name,
      brand_Name,
      type,
      price,
      description,
      rating,

    };

    fetch(' https://trendy-trunk-server-fvsf5ofec-mariz-al-akibs-projects.vercel.app/products',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(newProduct)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Products Added Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  };

  return (
    <div>
      <div className="bg-[#F4F3F0] flex flex-col-reverse md:flex-row justify-center">
        <div className=" lg:p-20 md:mt-5">
          <h2 className="relative text-3xl font-extrabold text-center bottom-6">
            Add Product
          </h2>
          <form onSubmit={handleAddProduct}>
            {/* form name and Brand Name row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="brand"
                    placeholder="Brand Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* form Price and Type row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text">Type</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="type"
                    placeholder="Type"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* form Short description and Rating row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Short description</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="description"
                    placeholder="Short description"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="rating"
                    placeholder="Rating"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* form Photo url row */}
            <div className="mb-8">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <label className="input-group ">
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered  w-full"
                  />
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Add Product"
              className="btn border-solid border-black btn-block"
            />
          </form>
        </div>
        <div>
          <img
            className="hidden md:block h-5/6 lg:p-12 md:p-4"
            src="https://i.ibb.co/ns39y6p/Jacob-Coupe-2017-How-to-Spend-It-Alexander-Mc-Queen.jpg"
            alt=""
          />
          <div>
            <img
              className="block md:hidden"
              src="https://i.ibb.co/61mBsH7/hotheads-hair.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddProduct;
