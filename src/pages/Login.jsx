import React from "react";
import { Button, InputField } from "../components";

const Login = () => {
  return (
    <div>
      <img
        src="https://i.pinimg.com/736x/ec/fb/9f/ecfb9ffd184bceec03b3c19161eee7fd.jpg"
        alt="test"
        className="mx-auto w-60"
      />
      <div className="mb-4 text-center text-2xl ">Login</div>
      <div className="flex flex-col w-10/12 mx-auto gap-y-4">
        <InputField placeholder="Username or Student Id" />
        <InputField placeholder="Password" />
        <p className="text-sm text-end text-blue-500 font-semibold cursor-pointer">
          Forgot Password?
        </p>
        <Button
          title="Log in"
          styles={
            "font-semibold mt-6 bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
          }
        />

        <div className="text-center uppercase font-semibold text-gray-400">
          or
        </div>
        <div className="flex justify-center gap-x-2 text-sm font-semibold">
          <p className="text-gray-600">Don't have an account?</p>
          <p className="text-blue-500 cursor-pointer">Create Account</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
