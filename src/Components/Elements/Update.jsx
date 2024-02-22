import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const product = useLoaderData();

  const { _id, image, description,name, brand_Name, type, price, rating } = product;

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;

    const image = form.photo.value;
    const name = form.name.value;
    const brand_Name = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const updatedProduct= {
      image,
      name,
      brand_Name,
      type,
      price,
      description,
      rating,

    };

    fetch(`https://trendy-trunk-server-kl0lqxjhy-mariz-al-akibs-projects.vercel.app /products/${_id}`,{
      method:'PUT',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(updatedProduct)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.modifiedCount>0){
        Swal.fire({
          title: 'Success!',
          text: 'Products Updated Successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      }
    })
  };

  return (
    <div className="bg-[#F4F3F0] flex flex-col-reverse md:flex-row justify-center">
      <div className=" lg:p-20 md:mt-5">
        <h2 className="relative text-3xl font-extrabold text-center bottom-6">
          Update Product : <span className="text-2xl font-bold"> {brand_Name} / {name}
            </span> 
        </h2>
        <form onSubmit={handleUpdateProduct}>
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
                  defaultValue={name}
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
                  defaultValue={brand_Name}
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
                  defaultValue={price}
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
                  defaultValue={type}
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
                  defaultValue={description}
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
                  defaultValue={rating}
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
                  defaultValue={image}
                  placeholder="Photo URL"
                  className="input input-bordered  w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update Product"
            className="btn border-solid border-black btn-block"
          />
        </form>
      </div>
      <div>
        <img
          className="hidden md:block h-5/6 lg:p-12 md:p-4"
          src="https://i.ibb.co/nrL9tcY/Jacob-Coupe-2017-How-to-Spend-It-Louis-Vuitton.jpg"
          alt=""
        />
        <div>
          <img
            className="block md:hidden"
            src="https://i.ibb.co/NS0Gx3H/82976155-239771543680021-6807798570347921408-n.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Update;
