import { useSelector } from "react-redux";
import { StoreState } from "../../store/types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PageLayout, PageTitle } from "../../shared/styles/styles";
import { LOGIN_PAGE } from "../../routers/routeNames";
import { useGoogleCalendarService } from "../../services/useGoogleCalendarService";
import LoadingComponent from "../../shared/components/LoadingComponent/LoadingComponent";
import { EventList } from "./components/EventList";

export const EventsPage = () => {
  const user = useSelector((state: StoreState) => state.userReducer.user);
  const navigate = useNavigate();
  const { getCalendarEvents } = useGoogleCalendarService();
  const events = useSelector((state: StoreState) => state.eventReducer.events);

  useEffect(() => {
    if (!user) {
      navigate(LOGIN_PAGE);
    } else {
      getCalendarEvents();
    }
  }, [user]);

  if (events) {
    return (
      <PageLayout>
        <PageTitle>Your events</PageTitle>
        <EventList events={events} />
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <LoadingComponent text="Loading" />
    </PageLayout>
  );
};
