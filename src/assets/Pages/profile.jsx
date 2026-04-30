import { useAuthLogin } from "../../hooks/useAuthLogin";
import Navbar from "../components/Layouts/Navbar";

export default function ProfilePage() {
  const { user, isLoading } = useAuthLogin();

  if (isLoading)
    return (
      <div className="flex h-screen justify-center items-center">
        Loading...
      </div>
    );
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <p className="font-bold">Username: {user}</p>
      </div>
    </>
  );
}
