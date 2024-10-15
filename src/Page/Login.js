import React, { useState } from "react";
import background from "../asset/background.jpg";
import { useFormik } from "formik";
import { formSchema } from "../schema/LoginAndRegistractionSchema";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { ThreeDot } from "react-loading-indicators";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/slice/userSlice";
import NavBar from "../Page/NavBar";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  // const navigate=useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema: formSchema(isRegister),
    onSubmit: (values, { resetForm }) => {
      setIsLoading(true);
      if (isRegister) {
        createUserWithEmailAndPassword(auth, values.email, values.password)
          .then((response) => {
            const user = response.user;
            updateProfile(user, {
              displayName: values.name,
            })
              .then((res) => {
                const { email, displayName, accessToken } = auth.currentUser;
                dispatch(
                  adduser({
                    displayName: displayName,
                    email: email,
                    token: accessToken,
                  })
                );

                resetForm();
                setIsLoading(false);
                // navigate('/browse')
              })
              .catch((error) => {
                setError(error);
                setIsLoading(false);
              });
            // resetForm();
            // setIsLoading(false);
          })
          .catch((error) => {
            setError(error);
            setIsLoading(false);
          });
      } else {
        signInWithEmailAndPassword(auth, values.email, values.password)
          .then((response) => {
            resetForm();
            setIsLoading(false);
            // navigate('/browse')
          })
          .catch((error) => {
            setError(error);
            setIsLoading(false);
          });
      }
    },
  });

  const { errors, touched } = formik;

  const handelRegistration = () => {
    setIsRegister((prev) => !prev);
  };

  return (
    <>
      <div
        className="w-full min-h-[100vh] bg-gradient-to-r bg-black  bg-no-repeat bg-cover bg-center relative"
        style={{ backgroundImage: `url(${background})`}}
      >
        <NavBar />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 pointer-events-none"></div>
        <div className="w-full min-h-[90vh] flex items-center  justify-center p-2">
          <form
            onSubmit={formik.handleSubmit}
            className="relative w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-6 shadow-lg rounded-lg"
          >
            <div className="bg-black bg-opacity-70 p-6 rounded-lg flex flex-col gap-2">
              <h2 className="text-center font-extrabold text-3xl text-white mb-3">
                {isRegister ? "Sign Up" : "Sign In"}
              </h2>
              {isRegister ? (
                <>
                  <input
                    type="name"
                    name="name"
                    value={formik.values.name}
                    className="w-full rounded-lg p-2 bg-gray-400 text-white"
                    onChange={formik.handleChange}
                    placeholder="Enter name"
                  />
                  {touched.name && errors.name && (
                    <div className="text-red-400">{errors.name}</div>
                  )}
                </>
              ) : null}

              <input
                type="email"
                name="email"
                value={formik.values.email}
                className="w-full rounded-lg p-2 bg-gray-400 text-white mt-4"
                onChange={formik.handleChange}
                placeholder="Email address"
              />
              {touched.email && errors.email && (
                <div className="text-red-400">{errors.email}</div>
              )}
              <input
                type="password"
                name="password"
                value={formik.values.password}
                className="w-full rounded-lg p-2 mt-4 bg-gray-400 text-white"
                onChange={formik.handleChange}
                placeholder="Password"
              />
              {touched.password && errors.password && (
                <div className="text-red-400">{errors.password}</div>
              )}
              {isRegister ? (
                <>
                  <input
                    type="password"
                    name="rePassword"
                    value={formik.values.rePassword}
                    className="w-full rounded-lg p-2 mt-4 bg-gray-400 text-white"
                    onChange={formik.handleChange}
                    placeholder="Re-enter password"
                  />
                  {touched.rePassword && errors.rePassword && (
                    <div className="text-red-400">{errors.rePassword}</div>
                  )}
                </>
              ) : null}
              {isRegister ? (
                <button
                  type="submit"
                  className="w-full rounded-lg bg-red-600 text-white p-2 mt-4 mb-5"
                >
                  {isLoading ? (
                    <ThreeDot
                      variant="pulsate"
                      color="#ffffff"
                      size="medium"
                      text=""
                      textColor=""
                    />
                  ) : (
                    "Sign Up"
                  )}
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full rounded-lg bg-red-600 text-white p-2 mt-4 mb-5"
                >
                  {isLoading ? (
                    <ThreeDot
                      variant="pulsate"
                      color="#ffffff"
                      size="medium"
                      text=""
                      textColor=""
                    />
                  ) : (
                    "Sign in"
                  )}
                </button>
              )}

              {error ? <p className="text-red-600">{error.message}</p> : null}

              {isRegister ? (
                <p
                  className=" text-sm text-white block mt-4 cursor-pointer"
                  onClick={() => handelRegistration()}
                >
                  <span className="text-slate-400">Already Member?</span> Sign
                  in now.
                </p>
              ) : (
                <p
                  className=" text-sm text-white block mt-4 cursor-pointer"
                  onClick={() => setIsRegister((prev) => !prev)}
                >
                  <span className="text-slate-400">New to Cinema Column?</span>{" "}
                  Sign up now.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
