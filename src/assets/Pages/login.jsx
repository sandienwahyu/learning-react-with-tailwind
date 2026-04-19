import AuthLayout from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

export default function LoginPage() {
  return (
    <AuthLayout title={"Login"}>
      <FormLogin />
    </AuthLayout>
  );
}
