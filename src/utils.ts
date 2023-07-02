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
