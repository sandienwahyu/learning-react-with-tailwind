import InputForm from "../Elements/InputForm";
import Button from "../Elements/Button";

export default function FormRegister() {
  return (
    <form action="">
      <div className="mb-6">
        <InputForm
          type={"text"}
          name={"fullname"}
          label={"Fullname"}
          placeholder={"masukkan nama anda..."}
        ></InputForm>
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
        <InputForm
          type={"password"}
          name={"confirmPassword"}
          label={"Confirm Password"}
          placeholder={"masukkan ulang password anda..."}
        ></InputForm>
      </div>
      <Button classname={"bg-blue-600 w-full"} onClick={() => {}}>
        Register
      </Button>
    </form>
  );
}
