import moment, { Moment } from "moment";

export function generateUpcomingDays() {
  const currentDate = moment();
  const days = [] as {
    moment: Moment;
    iso: string;
  }[];

  for (let i = 0; i < 28; i++) {
    const date = currentDate.clone().add(i, "days");

    days.push({
      moment: date,
      iso: date.format(moment.HTML5_FMT.DATE),
    });
  }

  return days;
}

export function generateTimeSlots() {
  const timeSlots = [] as number[];

  // Once again, since moment is heavy, I'm trying to avoid using it here :-)
  for (let hour = 6; hour < 22; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const decimalTime = hour + minute / 60;
      timeSlots.push(decimalTime);
    }
  }

  return timeSlots;
}
