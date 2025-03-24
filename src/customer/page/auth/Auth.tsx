import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Button } from "@mui/material";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <div className="flex justify-center h-[90vh] items-center">
      <div className="max-w-md h-[85vh] rounded-md shadow-lg">
        <img className="w-full rounded-md h-32" src="https://media.istockphoto.com/id/1329619660/photo/laptop-computer-screen-mockup-template-background-banner-man-hand-typing-laptop-computer-with.jpg?b=1&s=612x612&w=0&k=20&c=H2izMd0LveVGKTGrEwxhuM3kEPsK1Oc5E_cewGOhGVg=" alt="" />
        <div className="mt-8 px-10">
          {isLogin ? <LoginForm /> : <RegisterForm />}
          <div className="flex items-center gap-1 justify-center mt-5">
            <p>{isLogin && "Don't "} Have Account</p>
            <Button size="small" onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Create Account" : "Login"}</Button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Auth;
