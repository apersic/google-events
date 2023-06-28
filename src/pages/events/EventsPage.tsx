import { useSelector } from "react-redux";
import { StoreState } from "../../store/types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PageLayout, PageTitle } from "../../shared/styles/styles";
import { LOGIN_PAGE } from "../../routers/routeNames";
import { useGoogleCalendarService } from "../../services/useGoogleCalendarService";
import LoadingComponent from "../../shared/components/LoadingComponent/LoadingComponent";
import { EventList } from "./components/EventList";
import { FloatingButton } from "../../shared/components/FloatingButton/FloatingButton";
import usePopup from "../../shared/hooks/usePopup";
import { AddEventPopup } from "./components/AddEventPopup";
import { useTranslation } from "react-i18next";

export const EventsPage = () => {
  const user = useSelector((state: StoreState) => state.userReducer.user);
  const navigate = useNavigate();
  const { getCalendarEvents, addEvent } = useGoogleCalendarService();
  const events = useSelector((state: StoreState) => state.eventReducer.events);
  const { show, unMountPopup } = usePopup();
  const { t } = useTranslation();

  useEffect(() => {
    if (!user) {
      navigate(LOGIN_PAGE);
      return;
    }

    getCalendarEvents();
  }, [user]);

  const handleOnAddEventClick = () => {
    show({
      content: <AddEventPopup onCancel={unMountPopup} onSave={addEvent} />,
    });
  };

  if (events) {
    return (
      <PageLayout>
        <PageTitle>{t("yourEvents")}</PageTitle>
        <EventList events={events} />
        <FloatingButton label="+" onClick={handleOnAddEventClick} />
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <LoadingComponent text={t("loading")} />
    </PageLayout>
  );
};
