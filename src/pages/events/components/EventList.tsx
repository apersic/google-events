import { useSelector, useDispatch } from "react-redux";
import { GroupByTypes, StoreState } from "../../../store/types";
import { Event, EventGroup } from "../../../shared/types";
import { setDaysLimit, setGroupBy } from "../../../store/reducers/eventReducer";
import { sortEvents } from "../../../shared/utils/EventSorter";
import { EventComponent } from "./EventComponent";
import * as S from "./EventList.styles";

interface EventListProps {
  events: Event[];
}

export const EventList = ({ events }: EventListProps) => {
  const groupBy = useSelector((state: StoreState) => state.eventReducer.groupBy);
  const daysLimit = useSelector((state: StoreState) => state.eventReducer.daysLimit);
  const dispatch = useDispatch();

  const sortedEvents: EventGroup[] = sortEvents(events, groupBy, daysLimit);

  const handleOnDaysLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = parseInt(event.target.value, 10);
    dispatch(setDaysLimit(newLimit));

    if (newLimit === 30) {
      dispatch(setGroupBy(GroupByTypes.WEEK));
    } else {
      dispatch(setGroupBy(GroupByTypes.DAY));
    }
  };

  return (
    <S.EventList>
      <select
        value={daysLimit.toString()}
        placeholder="Days limit"
        onChange={handleOnDaysLimitChange}
      >
        <option value={1}>Next day</option>
        <option value={7}>Next seven days</option>
        <option value={30}>Next thirty days</option>
      </select>
      {sortedEvents.map((group) => (
        <S.EventGroup key={group.group}>
          <S.GroupName>{group.group}</S.GroupName>
          {group.events.map((event) => (
            <EventComponent key={event.id} event={event} />
          ))}
        </S.EventGroup>
      ))}
    </S.EventList>
  );
};
