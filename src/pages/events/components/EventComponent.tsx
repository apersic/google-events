import { Event } from "../../../shared/types";
import * as S from "./EventComponent.styles";
import { getFormattedDate, getFormattedTime } from "../../../shared/utils/DateFormatter";
import { ReactComponent as DeleteIcon } from "../../../shared/assets/icons/delete.svg";
import { useGoogleCalendarService } from "../../../services/useGoogleCalendarService";
import usePopup from "../../../shared/hooks/usePopup";
import { DeletePopup } from "../../../shared/components/DeletePopup/DeletePopup";
import { useTranslation } from "react-i18next";

interface EventComponentProps {
  event: Event;
}

export const EventComponent = ({ event }: EventComponentProps) => {
  const { deleteEvent } = useGoogleCalendarService();
  const { show, unMountPopup } = usePopup();
  const { t } = useTranslation();

  const handleOnDeleteClick = (event: Event) => {
    show({
      content: (
        <DeletePopup
          title={t("deletePopupTitle", { summary: event.summary })}
          onCancel={() => unMountPopup()}
          onConfirm={() => deleteEvent(event.id)}
        />
      ),
    });
  };

  return (
    <S.EventComponent>
      <S.EventSummary>{event.summary}</S.EventSummary>
      <S.EventDetails>
        <S.EventDates>
          <S.DateTime>
            <S.DateText>
              {t("startDate", { startDate: getFormattedDate(event.start.dateTime) })}
            </S.DateText>
            <S.DateText>
              {t("startTime", { startTime: getFormattedTime(event.start.dateTime) })}
            </S.DateText>
          </S.DateTime>
          <S.DateTime>
            <S.DateText>
              {t("endDate", { endDate: getFormattedDate(event.end.dateTime) })}
            </S.DateText>
            <S.DateText>
              {t("endTime", { endTime: getFormattedTime(event.end.dateTime) })}
            </S.DateText>
          </S.DateTime>
        </S.EventDates>

        <S.DeleteButton onClick={() => handleOnDeleteClick(event)}>
          <DeleteIcon />
        </S.DeleteButton>
      </S.EventDetails>
    </S.EventComponent>
  );
};
