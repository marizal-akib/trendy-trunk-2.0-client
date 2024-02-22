import { Link } from "react-router-dom";

const PageError = () => {
    return (
        <div className="mx-w-7xl mx-auto">
            <div className="w-2/3 mx-auto text-center">

            <img  src="https://i.ibb.co/2y9xSfq/26611681.jpg" alt="" />
            <Link to="/" className="relative md:bottom-16 btn text-white bg-violet-400">Back To Home</Link>
            </div>
        </div>
    );
};

export default PageError;