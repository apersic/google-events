import { useSelector } from "react-redux";
import { StoreState } from "../../store/types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PageTitle } from "../../shared/styles/styles";
import { LOGIN_PAGE } from "../../routers/routeNames";

export const EventsPage = () => {
  const user = useSelector((state: StoreState) => state.userReducer.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(LOGIN_PAGE);
    }
  }, [user]);

  return (
    <>
      <PageTitle>Your events</PageTitle>
    </>
  );
};
