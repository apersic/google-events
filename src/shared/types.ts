export interface User {
  name: string;
  email: string;
  picture: string;
  family_name: string;
  given_name: string;
  locale: string;
  verified_email: boolean;
}

export interface DateTime {
  dateTime: string;
  timeZone: string;
}

export interface Event {
  id: string;
  summary: string;
  end: DateTime;
  start: DateTime;
}

export interface EventGroup {
  group: string | number;
  events: Event[];
}
