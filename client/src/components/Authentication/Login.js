import Stars from "../Stars";
import loginLogo from "../../assets/login_rocket.json";
import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Message from "../Message";
import { useDispatch, useSelector } from "react-redux";
import { userLoginRequest } from "../../redux/actions.js/userAction";
import Loader from "../Loader";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, hackUser, error } = userLogin;
  const handleLogin = () => {
    dispatch(userLoginRequest(email, password));
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (hackUser) {
      navigate("/");
    }
  }, [navigate, hackUser]);
  return (
    <div className="w-full h-[100vh] login relative">
      {error && <Message type={"error"} message={error} />}
      <Stars />
      <div className="flex justify-center items-center w-full h-[99vh]">
        <div className="w-[700px] h-[400px] bg-gradient-to-tr flex items-center justify-around from-slate-300 to-gray-200 rounded-lg">
          <Lottie className="max-w-[200px]" animationData={loginLogo} />
          <div className="flex flex-col">
            <h2 className="mb-3 font-bold text-2xl">Login</h2>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="border outline-none px-3 py-2 rounded-lg focus:border-red-500 my-2 w-[300px]"
            />
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="border outline-none px-3 py-2 rounded-lg focus:border-red-500 my-2 w-[300px]"
            />
            {loading ? (
              <button
                onClick={handleLogin}
                className="w-full bg-red-500 my-4 py-2 px-8 rounded-lg text-white font-semibold cursor-pointer text-lg hover:bg-red-600"
              >
                <Loader />
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="w-full bg-red-500 my-4 py-2 px-8 rounded-lg text-white font-semibold cursor-pointer text-lg hover:bg-red-600"
              >
                Login
              </button>
            )}
            <p>
              Don't have an account ?{" "}
              <Link to={"/register"} className="text-red-500">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
