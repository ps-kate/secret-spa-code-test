import { useStore } from "../RootStore";
import { Moment } from "moment";
import { useMemo } from "react";
import { observer } from "mobx-react-lite";

interface Props {
  iso: string;
  moment: Moment;
}

const DayItem = ({ moment }: Props) => {
  const { setSelectedDay, selectedDay } = useStore();

  // it's better to have this memoized, so that it doesn't recompute on every render. Moment is a bit heavy.
  const formattedDay = useMemo(() => moment.format("MMM Do YYYY"), [moment]);

  const classNames = useMemo(
    () =>
      ["dayItem", selectedDay.toISOString() === moment.toISOString() ? "selected" : ""].join(" "),
    [selectedDay, moment],
  );

  return (
    <button className={classNames} onClick={() => setSelectedDay(moment)}>
      {formattedDay}
    </button>
  );
};

export default observer(DayItem);
