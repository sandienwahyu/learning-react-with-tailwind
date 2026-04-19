import AuthLayout from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";

export default function RegisterPage() {
  return (
    <AuthLayout title={"Register"}>
      <FormRegister />
    </AuthLayout>
  );
}
