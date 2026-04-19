import "./App.css";
import LoginPage from "./assets/Pages/login";
import RegisterPage from "./assets/Pages/register";

export default function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* <LoginPage /> */}
      <RegisterPage />
    </div>
  );
}
