 import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

const SingUp = () => {
  const { userWithEmail } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const picture = form.picture.value;

    if (password.length < 6) {
      return toast(
        "The password is less than 6 characters.It should be 6 characters or longer"
      );
    } else if (!/[A-Z]/.test(password)) {
      return toast("The password must contain at least one capital letter.");
    } else if (!/[!@#$%^&*]/.test(password)) {
      return toast(
        "The password must contain at least one special character (!, @, #, $, %, ^, &, or *)."
      );
    }

    userWithEmail(email, password)
      .then((res) => {
        console.log(res.user);
        const user = {email , password};
        fetch(" https://trendy-trunk-server-fvsf5ofec-mariz-al-akibs-projects.vercel.app/user" ,{
          method: "PUT",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
        })
        Swal.fire({
          title: "Success!",
          text: "User created successfully",
          icon: "success",
          confirmButtonText: "Cool",
        })
        form.reset();
        updateProfile(res.user, {
          displayName: name,
          photoURL: picture,
        })
          .then(() => console.log("update"))
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.error(error);
        toast(error.message);
      });
    console.log(email, password, name, picture);
  };
  return (
    <div>
    <div className="hero min-h-screen bg-[#f0eceb] ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl mb-3 font-bold">Sign-Up now!</h1>
          <img
            className="lg:block hidden"
            src="https://i.ibb.co/0rGTqXK/depositphotos-253160930-stock-photo-beautiful-stylish-young-woman-colorful-transformed.jpg"
            alt=""
          />
          <img
            className="block lg:hidden"
            src="https://i.ibb.co/CzTsxr6/depositphotos-394294840-stock-photo-collage-smiling-trendy-girl-holding-transformed.jpg"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Profile Picture</span>
              </label>
              <input
                type="picture"
                name="picture"
                placeholder="Picture Link (Optional)"
                className="input input-bordered"
              
              />
              <label className="label">
                <p>
                  Have an account? Then <span> </span>
                  <Link to="/login" className=" link text-blue-700 link-hover">
                    Login.
                  </Link>
                </p>
              </label>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign-Up</button>
            </div>
          </form>
      
        </div>
      </div>
    </div>
<ToastContainer/>
    </div>
  );
};

export default SingUp;
