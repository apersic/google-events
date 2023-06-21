import { PageTitle } from "./EventsPage.styles";
import { useSelector } from "react-redux";
import { StoreState } from "../../store/types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const EventsPage = () => {
  const user = useSelector((state: StoreState) => state.userReducer.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <>
      <PageTitle>Your events</PageTitle>
    </>
  );
};
