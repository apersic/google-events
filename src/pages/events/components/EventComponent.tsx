import { Event } from "../../../shared/types";
import * as S from "./EventComponent.styles";
import { getFormattedDate, getFormattedTime } from "../../../shared/utils/DateFormatter";
import { ReactComponent as DeleteIcon } from "../../../shared/assets/icons/delete.svg";

interface EventComponentProps {
  event: Event;
}

export const EventComponent = ({ event }: EventComponentProps) => {
  return (
    <S.EventComponent>
      <span>{event.summary}</span>
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
        <S.DeleteButton>
          <DeleteIcon />
        </S.DeleteButton>
      </S.EventDetails>
    </S.EventComponent>
  );
};
