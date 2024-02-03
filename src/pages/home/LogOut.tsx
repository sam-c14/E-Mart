import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store/hooks/hooks";
import { logout } from "../../store/asyncFns/postData";

const LogOut: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleLogout = async () => {
    await dispatch(logout);
  };

  const [loggingOut, setLoggingOut] = useState<boolean>(false);

  useEffect(() => {
    handleLogout();
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center sm:mx-0 mx-4">
      <div className="bg-white p-8 shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Logout Successful</h1>
        <p className="text-gray-600">
          You have been successfully logged out. Kindly wait while we redirect
          you to the home page
        </p>
      </div>
    </div>
  );
};

export default LogOut;
