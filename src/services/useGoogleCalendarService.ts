/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { showToast } from "../shared/hooks/useToast";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../store/types";
import { setEvents } from "../store/reducers/eventReducer";
import { FieldValues } from "react-hook-form";

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
    } catch (error: any) {
      showToast(error.response.data.error.message);
    }
  };

  const deleteEvent = async (eventId: string) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_CALENDAR_BASE_URL}/calendars/${user?.email}/events/${eventId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json",
          },
        }
      );

      showToast("Event deleted.");
      dispatch(setEvents(null));
      getCalendarEvents();
    } catch (error: any) {
      showToast(error.response.data.error.message);
    }
  };

  const addEvent = async (payload: FieldValues) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_CALENDAR_BASE_URL}/calendars/${user?.email}/events/`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json",
          },
        }
      );

      showToast("Event created.");
      dispatch(setEvents(null));
      getCalendarEvents();
    } catch (error: any) {
      showToast(error.response.data.error.message);
    }
  };

  return {
    getCalendarEvents,
    deleteEvent,
    addEvent,
  };
};
