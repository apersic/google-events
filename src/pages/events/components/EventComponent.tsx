import { Event } from "../../../shared/types";
import * as S from "./EventComponent.styles";
import { getFormattedDate } from "../../../shared/utils/DateFormatter";

interface EventComponentProps {
  event: Event;
}

export const EventComponent = ({ event }: EventComponentProps) => {
  return (
    <S.EventComponent>
      <span>{event.summary}</span>
      <S.EventDates>
        <span>Start: {getFormattedDate(event.start.dateTime)}</span>
        <span>End: {getFormattedDate(event.end.dateTime)}</span>
      </S.EventDates>
    </S.EventComponent>
  );
};
