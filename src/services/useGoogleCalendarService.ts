import axios from "axios";
import { showToast } from "../shared/hooks/useToast";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../store/types";
import { setEvents } from "../store/reducers/eventReducer";

export const useGoogleCalendarService = () => {
  const accessToken = useSelector((state: StoreState) => state.userReducer.accessToken);
  const user = useSelector((state: StoreState) => state.userReducer.user);
  const dispatch = useDispatch();

  const getCalendarEvents = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_CALENDAR_BASE_URL}/calendars/${user?.email}/events`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json",
          },
        }
      );

      dispatch(setEvents(response.data.items));
    } catch (error) {
      showToast("There was an error while fetching your events.");
    }
  };

  return {
    getCalendarEvents,
  };
};
