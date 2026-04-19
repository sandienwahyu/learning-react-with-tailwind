import InputForm from "../Elements/InputForm";
import Button from "../Elements/Button";

export default function FormLogin() {
  return (
    <form action="">
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
      <Button classname={"bg-blue-600 w-full"}>Login</Button>
    </form>
  );
}
