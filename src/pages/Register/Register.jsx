import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser,setUser } = use(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(name, photo, email, password);
      createUser(email, password)
          .then((result) => {
        const user = result.user;
       setUser(user)
          })
          .catch(error => {
              console.log(error.massage)
          });
  };
  return (
    <div className=" w-full mx-auto flex justify-center min-h-screen items-center ">
      <div className="card bg-base-100  shrink-0 shadow-2xl py-10 px-8 max-w-3xl">
        <h2 className=" text-center font-semibold text-3xl ">
          Register your account
        </h2>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Your Name</label>
              <input
                type="text"
                className="input"
                name="name"
                placeholder="Enter you name"
                required
              />
              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input"
                name="photo"
                placeholder="Photo URL"
                required
              />
              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email"
                required
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                placeholder="Password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </fieldset>
          </form>
          <p className="mt-2">
            Allready Have An Accout?
            <Link className=" font-semibold text-red-500" to={"/auth/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
