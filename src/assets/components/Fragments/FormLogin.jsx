import InputForm from "../Elements/InputForm";
import Button from "../Elements/Button";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { userLogin } from "../../../services/auth.service";

export default function FormLogin() {
  const usernameRef = useRef(null);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    localStorage.getItem("token")
      ? (window.location.href = "/products")
      : usernameRef.current.focus();
  }, []);

  async function handleLogin(e) {
    e.preventDefault();
    setIsError("");

    const dataLogin = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    try {
      const token = await userLogin(dataLogin);

      if (token) {
        window.location.href = "/products";
        localStorage.setItem("token", token);
      }
    } catch (error) {
      const message = error.response
        ? error.response.data
        : "Koneksi gagal, coba lagi";
      setIsError(message);
    }
  }

  return (
    <form onSubmit={(e) => handleLogin(e)}>
      <div className="mb-6">
        <InputForm
          type={"text"}
          name={"username"}
          label={"Username"}
          placeholder={"masukkan username anda..."}
          ref={usernameRef}
        ></InputForm>
        <InputForm
          type={"password"}
          name={"password"}
          label={"Password"}
          placeholder={"masukkan password anda..."}
        ></InputForm>
      </div>
      <Button type="submit" classname={"bg-blue-600 w-full"}>
        Login
      </Button>
      {isError && (
        <div className="w-full flex justify-center">
          <p className="text-red-600 text-md pt-2">{isError + " !!!"}</p>
        </div>
      )}
    </form>
  );
}
