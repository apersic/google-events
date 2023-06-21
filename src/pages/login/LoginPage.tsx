import { useNavigate } from "react-router";
import { useGoogleLoginService } from "../../services/useGoogleLoginService";
import { Button } from "../../shared/components/Button/Button";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../../store/types";

export const LoginPage = () => {
  const user = useSelector((state: StoreState) => state.userReducer.user);
  const { login } = useGoogleLoginService();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div>
      <span>Welcome to Events</span>
      <Button onClick={login} label="Sign in with Google" />
    </div>
  );
};
