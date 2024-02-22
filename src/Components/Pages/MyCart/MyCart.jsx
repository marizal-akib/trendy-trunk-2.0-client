import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { getToCart, saveTOCart } from "../../Utility/storage";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const MyCart = () => {
  const { user } = useContext(AuthContext);

  const allUserData = useLoaderData();

  const email = user.email;

  const activeUser = allUserData.find((userData) => userData.email === email);

  // console.log(activeUser);

  const cartItems = activeUser?.cartProduct;

  
  // delete
  const [cart , setCart] = useState(cartItems);
  const [itemToBuy , setItemToBuy] = useState();
  
  
  
  
  
  
  
  
  const handleDelete = (item) => {
    
    
    
    Swal.fire({
      title: "Are you sure?",
      text: `${item.name} will be remove from the cart`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it",
    }).then((res) => {
      if (res.isConfirmed) {
        saveTOCart(item._id);
        const dId = getToCart();
        console.log(dId);
        const itemToBuy = cartItems.filter((cartItem) => !dId.includes(cartItem._id));
        console.log(itemToBuy);
        setItemToBuy(cart)
        const newCart = {
          email,
          cart
        };
        axios.put(" https://trendy-trunk-server-fvsf5ofec-mariz-al-akibs-projects.vercel.app/user",newCart)
        // fetch(` https://trendy-trunk-server-fvsf5ofec-mariz-al-akibs-projects.vercel.app/user/cart`, {
          //   method: "PUT",
          //   headers: {
            //     "content-type": "application/json",
            //   },
            //   body: JSON.stringify(newCart),
            // })
            // .then(res=>res.json())
            .then(data=>{
              console.log(data.data)
              if(data.modifiedCount>0){
                toast(`${item.name} is removed`)
            setCart(cart)
          }
        })
        

      }
    });
  };

  console.log(cartItems.length);
  

      

  
  

  return (
    <div>
      <div>
        <img src="https://i.ibb.co/Wf3kKNd/SL-100321-45940-75.jpg" alt="" />
      </div>
      {cart && (
        <div className="my-4 text-start items-center flex mx-5">
          <h2 className="md:text-2xl flex-1 font-semibold text-xl ">
            You have {cart.length} items in your cart
          </h2>
          <button className="btn   btn-error text-sm  mx-5">
            Submit Order
          </button>
        </div>
      )}
      {(cart.length != 0 )? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, i) => (
                <tr key={i}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.brand_Name}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {item.type}
                    </span>
                  </td>
                  <td>{item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-ghost btn-xs"
                    >
                      Remove
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th> </th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        <div className=" text-center ">
          <img
            className="mx-auto"
            src="https://i.ibb.co/VtwSDHL/preview.png"
            alt=""
          />
          <h2 className="text-2xl font-bold my-4">Your cart is empty</h2>
        </div>
      )}
      <ToastContainer/>
    </div>
  );
};

export default MyCart;
