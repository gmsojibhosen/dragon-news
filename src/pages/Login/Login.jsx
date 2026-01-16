import React from "react";
import { Link } from "react-router";

const Login = () => {
  const handleLogin = (event) => {
      event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
  };
  return (
    <div className=" w-full mx-auto flex justify-center min-h-screen items-center ">
      <div className="card bg-base-100  shrink-0 shadow-2xl py-10 px-8 max-w-3xl">
        <h2 className=" text-center font-semibold text-3xl ">
          Login your account
        </h2>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
          <p className="mt-2">
            Dont’t Have An Account ?
            <Link className=" font-semibold text-red-500" to={"/auth/register"}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
