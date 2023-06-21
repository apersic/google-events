import { useNavigate } from "react-router";
import { useGoogleLoginService } from "../../services/useGoogleLoginService";
import { Button } from "../../shared/components/Button/Button";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../../store/types";
import * as S from "./LoginPage.styles";
import { PageTitle } from "../../shared/styles/styles";
import { HOME_PAGE } from "../../routers/routeNames";

export const LoginPage = () => {
  const user = useSelector((state: StoreState) => state.userReducer.user);
  const { login } = useGoogleLoginService();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(HOME_PAGE);
    }
  }, [user]);

  return (
    <S.LoginPage>
      <PageTitle>Welcome to Events</PageTitle>
      <Button onClick={login} label="Sign in with Google" />
    </S.LoginPage>
  );
};
