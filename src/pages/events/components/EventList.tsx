import { useSelector, useDispatch } from "react-redux";
import { GroupByTypes, StoreState } from "../../../store/types";
import { Event, EventGroup } from "../../../shared/types";
import { setDaysLimit, setGroupBy } from "../../../store/reducers/eventReducer";
import { sortEvents } from "../../../shared/utils/EventSorter";
import { EventComponent } from "./EventComponent";
import * as S from "./EventList.styles";
import { getLanguage } from "../../../shared/localisation/i18n-utils";
import { useTranslation } from "react-i18next";

interface EventListProps {
  events: Event[];
}

export const EventList = ({ events }: EventListProps) => {
  const groupBy = useSelector((state: StoreState) => state.eventReducer.groupBy);
  const daysLimit = useSelector((state: StoreState) => state.eventReducer.daysLimit);
  const dispatch = useDispatch();
  const language = getLanguage();
  const { t } = useTranslation();

  const sortedEvents: EventGroup[] = sortEvents(events, groupBy, daysLimit, language);

  const handleOnDaysLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = parseInt(event.target.value, 10);
    dispatch(setDaysLimit(newLimit));

    if (newLimit === 30) {
      dispatch(setGroupBy(GroupByTypes.WEEK));
    } else {
      dispatch(setGroupBy(GroupByTypes.DAY));
    }
  };

  if (sortedEvents.length < 1) {
    return (
      <S.EventList>
        <S.EventGroup>
          <S.NoResults>{t("noEvents")}</S.NoResults>
        </S.EventGroup>
      </S.EventList>
    );
  }

  return (
    <S.EventList>
      <S.FilterSelect
        value={daysLimit.toString()}
        placeholder={t("daysLimitPlaceholder")}
        onChange={handleOnDaysLimitChange}
      >
        <option value={1}>{t("nextDay")}</option>
        <option value={7}>{t("nextSevenDays")}</option>
        <option value={30}>{t("nextThirtyDays")}</option>
      </S.FilterSelect>
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
