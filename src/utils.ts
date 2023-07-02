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

type TimeSlot = {
  moment: Moment;
  decimal: number;
  isDisabled: boolean;
};

export function generateTimeSlots(currentTime: Moment, from: number, to: number): TimeSlot[] {
  const timeSlots: TimeSlot[] = [];

  for (let time = from; time <= to; time += 0.25) {
    const hour = Math.floor(time);
    const minute = Math.round((time - hour) * 60);
    const selectedDateTime = currentTime.clone().hour(hour).minute(minute);
    const isDisabled = selectedDateTime.diff(currentTime, "hours") < 2;

    timeSlots.push({
      moment: selectedDateTime,
      decimal: time,
      isDisabled: isDisabled,
    });
  }

  return timeSlots;
}
