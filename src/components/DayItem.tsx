import { useStore } from "../RootStore";
import { Moment } from "moment";
import { useMemo } from "react";
import { observer } from "mobx-react-lite";

interface Props {
  day: {
    iso: string;
    moment: Moment;
  };
}

const DayItem = ({ day }: Props) => {
  const { setSelectedDay, selectedDay } = useStore();

  // it's better to have this memoized, so that it doesn't recompute on every render. Moment is a bit heavy.
  const formattedDay = useMemo(() => day.moment.format("MMM Do YYYY"), [day]);

  const classNames = useMemo(
    () =>
      ["dayItem", selectedDay?.toISOString() === day.moment.toISOString() ? "selected" : ""].join(
        " ",
      ),
    [selectedDay, day],
  );

  return (
    <button className={classNames} onClick={() => setSelectedDay(day.moment)}>
      {formattedDay}
    </button>
  );
};

export default observer(DayItem);
