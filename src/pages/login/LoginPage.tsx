import { useNavigate } from "react-router";
import { useGoogleLoginService } from "../../services/useGoogleLoginService";
import { Button } from "../../shared/components/Button/Button";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../../store/types";
import { PageLayout, PageTitle } from "../../shared/styles/styles";
import { HOME_PAGE } from "../../routers/routeNames";
import { useTranslation } from "react-i18next";

// This is a Login page
export const LoginPage = () => {
  const user = useSelector((state: StoreState) => state.userReducer.user);
  const { login } = useGoogleLoginService();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (user) {
      navigate(HOME_PAGE);
    }
  }, [user]);

  return (
    <PageLayout>
      <PageTitle>{t("welcomeToEvents")}</PageTitle>
      <Button onClick={login} label={t("signInWithGoogle")} />
    </PageLayout>
  );
};
