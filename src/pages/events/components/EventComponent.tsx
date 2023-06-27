import { Event } from "../../../shared/types";
import * as S from "./EventComponent.styles";
import { getFormattedDate, getFormattedTime } from "../../../shared/utils/DateFormatter";
import { ReactComponent as DeleteIcon } from "../../../shared/assets/icons/delete.svg";
import { useGoogleCalendarService } from "../../../services/useGoogleCalendarService";
import usePopup from "../../../shared/hooks/usePopup";
import { DeletePopup } from "../../../shared/components/DeletePopup/DeletePopup";

interface EventComponentProps {
  event: Event;
}

export const EventComponent = ({ event }: EventComponentProps) => {
  const { deleteEvent } = useGoogleCalendarService();
  const { show, unMountPopup } = usePopup();

  const handleOnDeleteClick = (event: Event) => {
    show({
      content: (
        <DeletePopup
          title={`Are you sure you want to delete ${event.summary}?`}
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
            <S.DateText>Start date: {getFormattedDate(event.start.dateTime)}</S.DateText>
            <S.DateText>Start time: {getFormattedTime(event.start.dateTime)}</S.DateText>
          </S.DateTime>
          <S.DateTime>
            <S.DateText>End date: {getFormattedDate(event.end.dateTime)}</S.DateText>
            <S.DateText>End time: {getFormattedTime(event.end.dateTime)}</S.DateText>
          </S.DateTime>
        </S.EventDates>

        <S.DeleteButton onClick={() => handleOnDeleteClick(event)}>
          <DeleteIcon />
        </S.DeleteButton>
      </S.EventDetails>
    </S.EventComponent>
  );
};
