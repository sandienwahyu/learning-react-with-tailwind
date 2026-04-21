import InputForm from "../Elements/InputForm";
import Button from "../Elements/Button";

export default function FormLogin() {
  function handleLogin(e) {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/products";
  }

  return (
    <form onSubmit={(e) => handleLogin(e)}>
      <div className="mb-6">
        <InputForm
          type={"email"}
          name={"email"}
          label={"Email"}
          placeholder={"masukkan email anda..."}
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
    </form>
  );
}
